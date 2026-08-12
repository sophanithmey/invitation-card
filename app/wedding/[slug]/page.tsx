import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { weddingRepository } from '@/data/repositories/local-wedding-repository';
import { getWeddingBySlug } from '@/use-cases/get-wedding-by-slug';
import { WeddingClientPage } from './client-page';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const wedding = await getWeddingBySlug(
    weddingRepository,
    resolvedParams.slug,
  );

  if (!wedding) {
    return {
      title: 'សំបុត្រអញ្ជើញមិនត្រូវបានរកឃើញ | Wedding Not Found',
    };
  }

  const title = `${wedding.groom_name} & ${wedding.bride_name} | Wedding Invitation`;
  const description = `You are warmly invited to celebrate the wedding of ${wedding.groom_name_kh} & ${wedding.bride_name_kh}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: wedding.cover_photo,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [wedding.cover_photo],
    },
  };
}

export default async function DynamicWeddingPage({ params }: PageProps) {
  const resolvedParams = await params;
  const wedding = await getWeddingBySlug(
    weddingRepository,
    resolvedParams.slug,
  );

  if (!wedding) {
    notFound();
  }

  return (
    <WeddingClientPage initialWedding={wedding} slug={resolvedParams.slug} />
  );
}
