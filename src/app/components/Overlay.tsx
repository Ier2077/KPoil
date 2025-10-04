// components/Overlay.tsx
export default function Overlay() {
  return (
    // anchored to the footer wrapper: absolute + bottom-full + right-0
    <div
      className="pointer-events-none absolute right-0 bottom-full z-0"
      style={{
        width: '105vw',
        height: '80vh',     // <- not 'vh' by itself
        // remove blending so the color looks identical on every page
        // mixBlendMode: 'soft-light',
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 1000 700" preserveAspectRatio="none">
        <defs>
          <radialGradient id="goldGlow" cx="100%" cy="120%" r="120%">
              {/* Strong core */}
                <stop offset="0%" stopColor="#FFD740" stopOpacity="0.55" />
                {/* Smooth transition */}
                <stop offset="40%" stopColor="#FFD740" stopOpacity="0.35" />
                <stop offset="70%" stopColor="#FFD740" stopOpacity="0.15" />
                {/* Fully fades out */}
                <stop offset="100%" stopColor="#FFD740" stopOpacity="0" />
          </radialGradient>

        </defs>
        <rect x="0" y="0" width="1000" height="700" fill="url(#goldGlow)" />
      </svg>
    </div>
  );
}
