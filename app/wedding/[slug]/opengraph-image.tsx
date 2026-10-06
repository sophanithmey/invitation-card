import { ImageResponse } from 'next/og';
import { getWeddingBySlug } from '@/use-cases/get-wedding-by-slug';
import { weddingRepository } from '@/data/repositories/local-wedding-repository';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function OpengraphImage({ params }: Props) {
  const resolvedParams = await params;
  const wedding = await getWeddingBySlug(
    weddingRepository,
    resolvedParams.slug,
  );

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
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#5A0000',
          backgroundImage:
            'radial-gradient(circle at 50% 35%, #8B0000 0%, #400000 70%, #200000 100%)',
          padding: '40px',
          position: 'relative',
        }}
      >
        {/* Borders */}
        <div
          style={{
            position: 'absolute',
            inset: '24px',
            border: '2px solid rgba(212, 175, 55, 0.6)',
            borderRadius: '24px',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: '34px',
            border: '1px dashed rgba(212, 175, 55, 0.35)',
            borderRadius: '16px',
            display: 'flex',
          }}
        />

        {/* Header Tag */}
        <div
          style={{
            display: 'flex',
            padding: '8px 24px',
            borderRadius: '999px',
            backgroundColor: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid rgba(212, 175, 55, 0.45)',
            color: '#FFF2B2',
            fontSize: '18px',
            fontWeight: 600,
            letterSpacing: '0.2em',
            marginBottom: '20px',
          }}
        >
          <span>✦ WEDDING INVITATION • សិរីសួស្តី អាពាហ៍ពិពាហ៍ ✦</span>
        </div>

        {/* Khmer Names */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            color: '#FFFFFF',
            fontSize: '56px',
            fontWeight: 'bold',
            marginBottom: '10px',
          }}
        >
          <span>{groomNameKh}</span>
          <span style={{ color: '#D4AF37', fontSize: '42px' }}>&amp;</span>
          <span>{brideNameKh}</span>
        </div>

        {/* English Names */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            color: '#FFF5C0',
            fontSize: '34px',
            fontStyle: 'italic',
            marginBottom: '32px',
          }}
        >
          <span>{groomNameEn}</span>
          <span style={{ color: '#D4AF37' }}>&amp;</span>
          <span>{brideNameEn}</span>
        </div>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            width: '600px',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              flex: 1,
              height: '1px',
              background:
                'linear-gradient(90deg, transparent, rgba(212,175,55,0.8))',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#D4AF37',
              transform: 'rotate(45deg)',
            }}
          />
          <div
            style={{
              flex: 1,
              height: '1px',
              background:
                'linear-gradient(270deg, transparent, rgba(212,175,55,0.8))',
            }}
          />
        </div>

        {/* Badges */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <div
            style={{
              display: 'flex',
              padding: '10px 24px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              color: '#FFF2B2',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            <span>📅 {weddingDate}</span>
          </div>

          <div
            style={{
              display: 'flex',
              padding: '10px 24px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              color: '#FFFFFF',
              fontSize: '20px',
            }}
          >
            <span>📍 {venue}</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
