import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';
import { getWeddingBySlug } from '@/use-cases/get-wedding-by-slug';
import { weddingRepository } from '@/data/repositories/local-wedding-repository';
import { OpengraphCard } from './opengraph-card';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function OpengraphImage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Custom high-resolution OG photo for Sopheap & Chanvadey
  if (slug === 'sopheap-chanvadey') {
    const photoPath = path.join(process.cwd(), 'public', 'vadey', '4.JPG');
    if (fs.existsSync(photoPath)) {
      const buffer = fs.readFileSync(photoPath);
      const base64 = buffer.toString('base64');

      return new ImageResponse(
        (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1a0505',
              position: 'relative',
            }}
          >
            <img
              src={`data:image/jpeg;base64,${base64}`}
              alt='Sopheap & Chanvadey Wedding Invitation'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ),
        { ...size },
      );
    }
  }

  const wedding = await getWeddingBySlug(weddingRepository, slug);

  const groomNameKh = wedding?.groom_name_kh || 'សាំង សុភាព';
  const brideNameKh = wedding?.bride_name_kh || 'ទិន ច័ន្ទវដ្តី';
  const groomNameEn = wedding?.groom_name || 'Sopheap';
  const brideNameEn = wedding?.bride_name || 'Chanvadey';
  const venue = wedding?.venue || "Bride's Residence • គេហដ្ឋានខាងស្រី";
  const weddingDate = wedding?.wedding_date
    ? new Date(wedding.wedding_date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : 'November 25, 2026';

  return new ImageResponse(
    (
      <OpengraphCard
        groomNameKh={groomNameKh}
        brideNameKh={brideNameKh}
        groomNameEn={groomNameEn}
        brideNameEn={brideNameEn}
        weddingDate={weddingDate}
        venue={venue}
      />
    ),
    { ...size },
  );
}
