import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Brand Strategy';
  const subtitle = searchParams.get('subtitle') || 'Crowd Control Digital';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0A',
          position: 'relative',
        }}
      >
        {/* Red accent line at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #FD3737, #FF6B6B, #FD3737)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            textAlign: 'center',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px 24px',
              borderRadius: '9999px',
              border: '2px solid rgba(253, 55, 55, 0.4)',
              marginBottom: '32px',
            }}
          >
            <span
              style={{
                color: '#FD3737',
                fontSize: '20px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              Brand Strategy
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '16px',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h1>

          {/* Red divider */}
          <div
            style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#FD3737',
              borderRadius: '2px',
              marginBottom: '24px',
            }}
          />

          {/* Subtitle */}
          <p
            style={{
              fontSize: '24px',
              color: '#B8B8C0',
              fontWeight: 500,
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span
            style={{
              color: '#FD3737',
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            CROWD CONTROL DIGITAL
          </span>
          <span style={{ color: '#333', fontSize: '16px' }}>|</span>
          <span style={{ color: '#B8B8C0', fontSize: '16px' }}>
            strategy.crowdcontroldigital.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
