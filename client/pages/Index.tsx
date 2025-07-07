import { useState, useEffect } from "react";

export default function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Animated background gradient that follows mouse */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(147, 51, 234, 0.15),
            rgba(79, 70, 229, 0.1),
            transparent 70%)`,
        }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main "hy" text */}
          <div
            className={`transition-all duration-2000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-none tracking-tight">
              hy
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`transition-all duration-2000 delay-500 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mt-8 mb-12 font-light tracking-wide">
              Simple. Beautiful. Connected.
            </p>
          </div>

          {/* Action buttons */}
          <div
            className={`transition-all duration-2000 delay-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95">
                <span className="relative z-10">Say Hy</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white font-medium transition-all duration-300 hover:from-purple-500 hover:to-blue-500 hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/25">
                <span className="relative z-10">Get Started</span>
              </button>
            </div>
          </div>

          {/* Bottom features */}
          <div
            className={`transition-all duration-2000 delay-1500 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
              <div className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  H
                </div>
                <h3 className="text-white font-semibold mb-2">Human</h3>
                <p className="text-slate-400 text-sm">
                  Authentic connections that matter
                </p>
              </div>

              <div className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  Y
                </div>
                <h3 className="text-white font-semibold mb-2">Yourself</h3>
                <p className="text-slate-400 text-sm">
                  Be genuine, be real, be you
                </p>
              </div>

              <div className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  ∞
                </div>
                <h3 className="text-white font-semibold mb-2">Unlimited</h3>
                <p className="text-slate-400 text-sm">
                  Endless possibilities to connect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-bounce" />
        </div>
      </div>
    </div>
  );
}
