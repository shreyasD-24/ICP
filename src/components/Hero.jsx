// import React, { useEffect, useRef, useState } from "react";

// function Hero() {
//   const canvasRef = useRef(null);
//   const [counters, setCounters] = useState([0, 0, 0]);
//   const targetCounts = [350, 120, 500]; // Projects, Clients, Freelancers

//   // Counter animation effect
//   useEffect(() => {
//     const duration = 2000;
//     const startTime = Date.now();

//     const updateCounters = () => {
//       const elapsed = Date.now() - startTime;
//       const progress = Math.min(elapsed / duration, 1);

//       const nextCounters = targetCounts.map((target, i) => {
//         return Math.floor(target * progress);
//       });

//       setCounters(nextCounters);

//       if (progress < 1) {
//         requestAnimationFrame(updateCounters);
//       }
//     };

//     const timer = setTimeout(() => {
//       requestAnimationFrame(updateCounters);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, []);

//   // Globe animation effect
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;

//     const setCanvasDimensions = () => {
//       const dpr = window.devicePixelRatio || 1;
//       canvas.width = window.innerWidth * dpr;
//       canvas.height = window.innerHeight * dpr;
//       canvas.style.width = `${window.innerWidth}px`;
//       canvas.style.height = `${window.innerHeight}px`;
//       ctx.scale(dpr, dpr);
//     };

//     setCanvasDimensions();

//     const getResponsiveValues = () => {
//       const viewportWidth = window.innerWidth;
//       const viewportHeight = window.innerHeight;
//       const minDimension = Math.min(viewportWidth, viewportHeight);

//       // Calculate radius based on viewport dimensions
//       const radius = Math.max(150, minDimension * 0.35);

//       // Calculate focal length relative to radius
//       const focalLength = Math.max(300, radius * 1.5);

//       // Adjust dot count based on screen size
//       let numDots;
//       if (viewportWidth < 768) {
//         numDots = 3000;
//       } else if (viewportWidth < 1200) {
//         numDots = 5000;
//       } else {
//         numDots = 7000;
//       }

//       return { radius, focalLength, numDots };
//     };

//     let { radius, focalLength, numDots } = getResponsiveValues();
//     const dots = [];
//     let angleY = 0;

//     const generateDots = () => {
//       dots.length = 0;
//       for (let i = 0; i < numDots; i++) {
//         const theta = Math.random() * 2 * Math.PI;
//         const phi = Math.acos(2 * Math.random() - 1);
//         const x = radius * Math.sin(phi) * Math.cos(theta);
//         const y = radius * Math.sin(phi) * Math.sin(theta);
//         const z = radius * Math.cos(phi);
//         dots.push({ x, y, z });
//       }
//     };

//     generateDots();

//     const draw = () => {
//       const dpr = window.devicePixelRatio || 1;
//       ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

//       const viewportWidth = window.innerWidth;
//       const viewportHeight = window.innerHeight;

//       // Calculate center position with padding to prevent clipping
//       const centerX = viewportWidth / 2;
//       const centerY = viewportHeight / 2 - (viewportHeight * 0.05);

//       const cosAngle = Math.cos(angleY);
//       const sinAngle = Math.sin(angleY);

//       for (const dot of dots) {
//         const rotatedX = dot.x * cosAngle - dot.z * sinAngle;
//         const rotatedZ = dot.x * sinAngle + dot.z * cosAngle;

//         // Use responsive focal length
//         const scale = focalLength / (focalLength + rotatedZ);
//         const x2d = centerX + rotatedX * scale;
//         const y2d = centerY + dot.y * scale;

//         // Dynamic effects based on current radius
//         const distanceFromCenter = Math.sqrt(rotatedX * rotatedX + dot.y * dot.y);
//         const hollowEffect = Math.min(1, Math.max(0.02, distanceFromCenter / (radius * 0.8)));
//         const edgeDarkening = Math.max(0.3, (Math.abs(rotatedX) / radius) * 1.5);
//         const finalOpacity = hollowEffect * edgeDarkening * Math.max(0.04, scale * 0.4);

//         const size = Math.max(0.15, 1.2 * scale);

//         ctx.fillStyle = `rgba(0, 0, 0, ${finalOpacity})`;
//         ctx.fillRect(x2d, y2d, size, size);
//       }

//       angleY += 0.0025;
//       animationFrameId = requestAnimationFrame(draw);
//     };

//     draw();

//     const handleResize = () => {
//       setCanvasDimensions();
//       const newValues = getResponsiveValues();
//       radius = newValues.radius;
//       focalLength = newValues.focalLength;
//       numDots = newValues.numDots;
//       generateDots();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div className="relative pb-2 w-full min-h-screen bg-white overflow-hidden">
//       <canvas
//         ref={canvasRef}
//         className="absolute top-0 left-0 w-full h-full"
//         style={{
//           background: "white",
//           zIndex: 1,
//         }}
//       />

//       <div className="relative z-50 flex flex-col items-center justify-center min-h-screen px-4 py-2">
//         <div className="text-center max-w-4xl mx-auto w-full">
//           <p className="text-slate-400 text-2xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 tracking-wide font-medium">
//             ICP Work
//           </p>
//           <h1 className="text-4xl md:text-2xl lg:text-5xl text-slate-900 mb-4 sm:mb-6 font-medium">
//             Unleashing Potential, <br />
//             <span>Delivering Excellence</span>
//           </h1>
//           <p className="text-slate-800 text-base leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto font-medium">
//             Your Gateway to the Elite Freelance Revolution.
//           </p>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
//             <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
//               Join ICP Work
//             </button>
//             <button className="w-full sm:w-auto bg-gray-200 text-slate-700 hover:text-slate-900 font-semibold text-sm transition-colors duration-300 px-6 py-3.5 rounded-full hover:bg-gray-300">
//               Learn more →
//             </button>
//           </div>

//           {/* Data Insights Counters */}
//           <div className="flex flex-wrap justify-center gap-8 mt-8 sm:mt-12">
//             <div className="text-center min-w-[100px]">
//               <div className="text-3xl md:text-4xl font-bold text-indigo-700">{counters[0]}+</div>
//               <div className="text-sm md:text-base text-slate-700 mt-1">Projects Completed</div>
//             </div>
//             <div className="text-center min-w-[100px]">
//               <div className="text-3xl md:text-4xl font-bold text-indigo-700">{counters[1]}+</div>
//               <div className="text-sm md:text-base text-slate-700 mt-1">Happy Clients</div>
//             </div>
//             <div className="text-center min-w-[100px]">
//               <div className="text-3xl md:text-4xl font-bold text-indigo-700">{counters[2]}+</div>
//               <div className="text-sm md:text-base text-slate-700 mt-1">Expert Freelancers</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
import React, { useEffect, useRef, useState } from "react";

function Hero() {
  const canvasRef = useRef(null);
  const [counters, setCounters] = useState([0, 0, 0]);
  const targetCounts = [5, 120, 500]; // Projects, Clients, Freelancers

  // Counter animation effect
  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const updateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const nextCounters = targetCounts.map((target, i) => {
        return Math.floor(target * progress);
      });

      setCounters(nextCounters);

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(updateCounters);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Globe animation effect
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    setCanvasDimensions();

    const getResponsiveValues = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const minDimension = Math.min(viewportWidth, viewportHeight);

      // Calculate radius based on viewport dimensions
      const radius = Math.max(150, minDimension * 0.35);

      // Calculate focal length relative to radius
      const focalLength = Math.max(300, radius * 1.5);

      // Adjust dot count based on screen size
      let numDots;
      if (viewportWidth < 768) {
        numDots = 2800;
      } else if (viewportWidth < 1200) {
        numDots = 5000;
      } else {
        numDots = 7000;
      }

      return { radius, focalLength, numDots };
    };

    let { radius, focalLength, numDots } = getResponsiveValues();
    const dots = [];
    let angleY = 0;

    const generateDots = () => {
      dots.length = 0;
      for (let i = 0; i < numDots; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        dots.push({ x, y, z });
      }
    };

    generateDots();

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Calculate center position with padding to prevent clipping
      const centerX = viewportWidth / 2;
      const centerY = viewportHeight / 2;

      const cosAngle = Math.cos(angleY);
      const sinAngle = Math.sin(angleY);

      for (const dot of dots) {
        const rotatedX = dot.x * cosAngle - dot.z * sinAngle;
        const rotatedZ = dot.x * sinAngle + dot.z * cosAngle;

        // Use responsive focal length
        const scale = focalLength / (focalLength + rotatedZ);
        const x2d = centerX + rotatedX * scale;
        const y2d = centerY + dot.y * scale;

        // Dynamic effects based on current radius
        const distanceFromCenter = Math.sqrt(
          rotatedX * rotatedX + dot.y * dot.y
        );
        const hollowEffect = Math.min(
          1,
          Math.max(0.02, distanceFromCenter / (radius * 0.8))
        );
        const edgeDarkening = Math.max(
          0.3,
          (Math.abs(rotatedX) / radius) * 1.5
        );
        const finalOpacity =
          hollowEffect * edgeDarkening * Math.max(0.04, scale * 0.4);

        const size = Math.max(0.15, 1.2 * scale);

        ctx.fillStyle = `rgba(0, 0, 0, ${finalOpacity})`;
        ctx.fillRect(x2d, y2d, size, size);
      }

      angleY += 0.0025;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      setCanvasDimensions();
      const newValues = getResponsiveValues();
      radius = newValues.radius;
      focalLength = newValues.focalLength;
      numDots = newValues.numDots;
      generateDots();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative  w-full min-h-screen bg-white overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "white",
          zIndex: 1,
        }}
      />

      <div className="relative z-50 flex flex-col items-center justify-center min-h-screen px-4 pt-2">
        <div className="text-center max-w-4xl mx-auto w-full">
          {/* Enhanced text sizing with better responsiveness for smaller screens */}
          <p className="text-slate-400 tracking-wide font-medium"
             style={{ fontSize: "clamp(1.8rem, 4.5vw, 5.2rem)" }}>
            The Future of Work
          </p>
          
          <h1 className="text-slate-900 mb-4 sm:mb-6 font-medium"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 5.2rem)" }}>
            is Decentralized. <br className="hidden sm:block" />
            <span>Welcome to ICPWork.</span>
          </h1>
          
          <p className="text-slate-800 leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto font-medium"
             style={{ fontSize: "clamp(1rem, 2vw, 2rem)" }}>
            Your Gateway to the Elite Freelance Revolution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button className="w-full sm:w-auto bg-black hover:bg-gray-700 text-white px-8 lg:px-10 xl:px-12 2xl:px-14 3xl:px-16 4xl:px-20 5xl:px-24 py-3 lg:py-4 xl:py-5 2xl:py-6 3xl:py-7 4xl:py-8 5xl:py-10 rounded-full font-semibold text-sm lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Join ICP Work
            </button>
            <button className="w-full sm:w-auto bg-gray-200 text-slate-700 hover:text-slate-900 font-semibold transition-colors duration-300 px-6 lg:px-8 xl:px-10 2xl:px-12 3xl:px-14 4xl:px-18 5xl:px-22 py-3 lg:py-4 xl:py-5 2xl:py-6 3xl:py-7 4xl:py-8 5xl:py-10 rounded-full hover:bg-gray-300 text-sm lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl">
              Learn more →
            </button>
          </div>
          
          {/* Enhanced Data Insights Counters with better mobile responsiveness */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 sm:mt-16 font-semibold">
            <div className="text-center min-w-[120px]">
              <div className="font-bold text-black"
                   style={{ fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)" }}>
                0-{counters[0]}%
              </div>
              <div className="text-slate-700 mt-1 font-semibold"
                   style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.5rem)" }}>
                Platform Fees
              </div>
            </div>
            <div className="text-center min-w-[120px] font">
              <div className="font-bold text-black"
                   style={{ fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)" }}>
                1-2s
              </div>
              <div className="text-slate-700 mt-1"
                   style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.5rem)" }}>
                Transaction Fees
              </div>
            </div>
            <div className="text-center min-w-[120px]">
              <div className="font-bold text-black"
                   style={{ fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)" }}>
                $0
              </div>
              <div className="text-slate-700 mt-1"
                   style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.5rem)" }}>
                Gas Speed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
