

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
        {/* Blue Grid Lines */}
        <defs>
          <pattern id="grid-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#3B82F6" strokeWidth="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        {/* Add your floating dots and lines here */}
      </svg>
    </div>
  );
};

export default AnimatedBackground;