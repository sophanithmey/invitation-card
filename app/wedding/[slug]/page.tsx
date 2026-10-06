import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { weddingRepository } from '@/data/repositories/local-wedding-repository';
import { getWeddingBySlug } from '@/use-cases/get-wedding-by-slug';
import { WeddingClientPage } from './client-page';

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ to?: string }>;
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const guestName = resolvedSearchParams.to
    ? decodeURIComponent(resolvedSearchParams.to)
    : null;

  const wedding = await getWeddingBySlug(
    weddingRepository,
    resolvedParams.slug,
  );

  if (!wedding) {
    return {
      title: 'សំបុត្រអញ្ជើញមិនត្រូវបានរកឃើញ | Wedding Not Found',
    };
  }

  const coupleKh = `${wedding.groom_name_kh} & ${wedding.bride_name_kh}`;
  const coupleEn = `${wedding.groom_name} & ${wedding.bride_name}`;

  const title = guestName
    ? `លិខិតអញ្ជើញសម្រាប់ ${guestName} • ${coupleKh} (${coupleEn})`
    : `${coupleKh} • ${coupleEn} | សំបុត្រអញ្ជើញអាពាហ៍ពិពាហ៍`;

  const description =
    wedding.invitation_message ||
    `យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញចូលរួមជាអធិបតី និងជាសក្ខីភាពក្នុងពិធីមង្គលការរបស់ ${coupleKh} (${coupleEn})។`;

  const canonicalUrl = `/wedding/${resolvedParams.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Soursdey Digital Weddings',
      locale: 'km_KH',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
