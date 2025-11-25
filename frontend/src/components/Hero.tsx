import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Parallax tilt effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      card.style.transform = `rotateX(${-y / 40}deg) rotateY(${
        x / 40
      }deg) scale(1.02)`;
    };

    const reset = () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", reset);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-surface">
      {/* Floating playful shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-10 h-10 bg-primary/20 rounded-xl animate-bounce-slow opacity-80"></div>
        <div className="absolute bottom-32 right-20 w-8 h-8 bg-blue-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-bounce-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-text-main tracking-tight mb-6 leading-tight animate-slide-up">
          Get dream jobs with our <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 animate-gradient-flow">
            AI Powered
          </span>{" "}
          resume builder
        </h1>

        <p className="text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up animation-delay-150">
          Build a professional and outstanding resume with our free builder and
          templates.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-300">
          <Link
            to="/builder"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg relative overflow-hidden
            hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 group"
          >
            <span className="relative z-10">Create my resume</span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>

          <Link
            to="/builder"
            className="w-full sm:w-auto px-8 py-4 bg-white text-primary border border-gray-200 rounded-xl font-semibold text-lg 
            hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all"
          >
            Improve resume
          </Link>
        </div>

        {/* Resume Preview Card */}
        <div className="mt-20 max-w-4xl mx-auto perspective-1000 animate-slide-up animation-delay-450">
          <div
            ref={cardRef}
            className="relative rounded-2xl bg-white/90 backdrop-blur-lg shadow-2xl border border-gray-200 overflow-hidden 
            transition-all duration-300 group"
          >
            {/* Shimmer overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
              opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none"
            ></div>

            {/* Fake Browser Header */}
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5 opacity-70">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              <div className="mx-auto bg-white px-3 py-1 rounded-md text-xs text-gray-400 border border-gray-200 w-1/2 text-center">
                kesume.com/builder
              </div>
            </div>

            {/* Resume Content */}
            <div className="p-8 md:p-12 text-left bg-white min-h-[400px] flex flex-col gap-6 opacity-95 transition-opacity">
              {/* Header */}
              <div className="border-b border-gray-100 pb-6">
                <div className="h-8 w-1/3 bg-gray-800 rounded"></div>
                <div className="h-4 w-1/4 bg-primary/60 rounded mt-3"></div>
              </div>

              {/* Body */}
              <div className="grid grid-cols-3 gap-8 h-full">
                <div className="col-span-2 space-y-6">
                  <div className="space-y-3">
                    <div className="h-5 w-1/4 bg-gray-200 rounded"></div>
                    <div className="h-3 w-full bg-gray-100 rounded"></div>
                    <div className="h-3 w-5/6 bg-gray-100 rounded"></div>
                    <div className="h-3 w-4/5 bg-gray-100 rounded"></div>
                  </div>

                  <div className="space-y-3">
                    <div className="h-5 w-1/4 bg-gray-200 rounded"></div>
                    <div className="h-3 w-full bg-gray-100 rounded"></div>
                    <div className="h-3 w-5/6 bg-gray-100 rounded"></div>
                  </div>
                </div>

                <div className="col-span-1 space-y-6">
                  <div className="h-32 w-full bg-blue-50 rounded-lg border border-blue-100"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                    <div className="h-2 w-full bg-gray-100 rounded"></div>
                    <div className="h-2 w-full bg-gray-100 rounded"></div>
                    <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
