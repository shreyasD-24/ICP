import React, { useEffect, useRef } from "react";

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Ensure canvas element is available before proceeding
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size considering device pixel ratio for sharpness on retina screens
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    setCanvasDimensions(); // Initial setup

    const dots = [];
    const radius = 230;
    // OPTIMIZATION 1: Reduce particle count.
    const numDots = 6500;
    let angleY = 0;

    // Generate random dots on a sphere
    for (let i = 0; i < numDots; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      dots.push({ x, y, z });
    }

    const draw = () => {
      // Use device-pixel-ratio-aware dimensions for clearing
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2 - 50;
      
      // Pre-calculate rotation values once per frame
      const cosAngle = Math.cos(angleY);
      const sinAngle = Math.sin(angleY);

      for (const dot of dots) {
        // Inlined rotation is slightly faster than a function call in a tight loop
        const rotatedX = dot.x * cosAngle - dot.z * sinAngle;
        const rotatedZ = dot.x * sinAngle + dot.z * cosAngle;

        const scale = 400 / (400 + rotatedZ);
        const x2d = centerX + rotatedX * scale;
        const y2d = centerY + dot.y * scale;

        // OPTIMIZATION 2: Use `x * x` which is generally faster than `Math.pow`
        const distanceFromCenter = Math.sqrt(rotatedX * rotatedX + dot.y * dot.y);
        const hollowEffect = Math.min(1, Math.max(0.02, distanceFromCenter / 180));
        const edgeDarkening = Math.max(0.3, (Math.abs(rotatedX) / radius) * 1.5);
        const finalOpacity = hollowEffect * edgeDarkening * Math.max(0.04, scale * 0.4);
        
        const size = Math.max(0.15, 1.2 * scale);

        ctx.fillStyle = `rgba(0, 0, 0, ${finalOpacity})`;
        
        // OPTIMIZATION 3: Use `fillRect` instead of `arc` for performance.
        ctx.fillRect(x2d, y2d, size, size);
      }

      angleY += 0.0025;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", setCanvasDimensions);

    // OPTIMIZATION 4: Cleanup function to prevent memory leaks.
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="relative mt-4 w-full min-h-screen bg-white overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 20%, rgba(248,250,252,0.95) 60%, rgba(241,245,249,1) 100%)",
          zIndex: 1,
        }}
      />

      {/* Hero Content - Centered */}
      <div className="relative z-50 flex items-center justify-center min-h-screen px-4 py-4">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-slate-400 text-4xl  md:text-5xl lg:text-6xl xl:text-6xl mb-3 sm:mb-4 tracking-wide font-medium">
            ICP Work
          </p>
          <h1 className="text-4xl  md:text-4xl lg:text-5xl xl:text-5xl text-slate-900 mb-4 sm:mb-6 font-medium">
            Unleashing Potential, <br />
            <span>Delivering Excellence</span>
          </h1>
          <p className="text-slate-800 text-base sm:text-lg md:text-lg leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto font-medium">
            Your Gateway to the Elite Freelance Revolution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-12">
            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Join ICP Work
            </button>
            <button className="w-full sm:w-auto bg-gray-200 text-slate-700 hover:text-slate-900 font-semibold text-sm transition-colors duration-300 px-6 py-3.5 rounded-full hover:bg-gray-300">
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;