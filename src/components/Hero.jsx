import React, { useEffect, useRef } from "react";

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots = [];
    const radius = 230;
    const numDots = 12000;
    let angleY = 0;

    // Generate random dots on a sphere
    for (let i = 0; i < numDots; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      dots.push({ x, y, z, originalZ: z });
    }

    const rotateY = (point, angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x = point.x * cos - point.z * sin;
      const z = point.x * sin + point.z * cos;
      return { ...point, x, z };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2 - 50; // Shift sphere up

      for (let dot of dots) {
        const rotated = rotateY(dot, angleY);
        const scale = 400 / (400 + rotated.z);
        const x2d = centerX + rotated.x * scale;
        const y2d = centerY + rotated.y * scale;

        // Calculate distance from center for hollow effect
        const distanceFromCenter = Math.sqrt(
          Math.pow(rotated.x, 2) + Math.pow(rotated.y, 2)
        );

        // Hollow center effect - particles are more transparent in center
        const hollowEffect = Math.min(
          1,
          Math.max(0.02, distanceFromCenter / 180)
        );

        // Edge darkening effect based on X position (left/right edges)
        const edgeDistance = Math.abs(rotated.x) / radius;
        const edgeDarkening = Math.max(0.3, edgeDistance * 1.5);

        // Combine effects
        const finalOpacity =
          hollowEffect * edgeDarkening * Math.max(0.04, scale * 0.4);

        ctx.beginPath();
        // Much smaller particles
        ctx.arc(x2d, y2d, Math.max(0.15, 0.5 * scale), 0, Math.PI * 2);

        // All black particles with calculated opacity
        ctx.fillStyle = `rgba(0, 0, 0, ${finalOpacity})`;
        ctx.fill();
      }

      angleY += 0.006;
      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative mt-4 w-full min-h-screen bg-white overflow-hidden">
      {/* Enhanced Canvas Animation */}
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

          {/* Main Heading */}
          <h1 className="text-4xl  md:text-4xl lg:text-5xl xl:text-5xl text-slate-900 mb-4 sm:mb-6 font-medium">
            Unleashing Potential, <br />
            <span>Delivering Excellence</span>
          </h1>

          {/* Description */}
          <p className="text-slate-800 text-base sm:text-lg md:text-lg leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto font-medium">
            Your Gateway to the Elite Freelance Revolution.
          </p>

          {/* CTA Buttons */}

          {/* CTA Buttons */}
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
