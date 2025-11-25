import React from "react";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-surface-alt relative overflow-hidden">
      {/* Floating playful blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-20 w-52 h-52 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slower"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 animate-slide-up">
          Simple, Transparent Pricing
        </h2>

        <p className="text-lg text-text-muted max-w-2xl mx-auto mb-16 animate-slide-up animation-delay-150">
          No hidden fees. No paywalls. Everything you need, completely free and
          open source.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Free Plan */}
          <div className="relative bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-2 hover:rotate-[0.5deg]">
            {/* Highlight shimmer */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

            <h3 className="text-xl font-semibold text-text-main mb-4">Free</h3>

            <p className="text-5xl font-bold text-primary mb-2">0$</p>
            <p className="text-text-muted mb-8">Forever free. No limits.</p>

            <ul className="space-y-3 text-left mb-10">
              <li className="flex items-center gap-2 text-text-main">
                ✔️ Unlimited resumes
              </li>
              <li className="flex items-center gap-2 text-text-main">
                ✔️ All templates included
              </li>
              <li className="flex items-center gap-2 text-text-main">
                ✔️ Instant PDF export
              </li>
              <li className="flex items-center gap-2 text-text-main">
                ✔️ Full ATS compatibility
              </li>
            </ul>

            <button className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-hover transition-all shadow-primary/20 shadow-lg hover:shadow-primary/40">
              Get Started
            </button>
          </div>

          {/* Open Source Plan */}
          <div className="relative bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-2 hover:rotate-[0.5deg]">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <h3 className="text-xl font-semibold text-text-main mb-4">
              Open Source
            </h3>

            <p className="text-5xl font-bold text-primary mb-2">Free</p>
            <p className="text-text-muted mb-8">Clone, modify, contribute.</p>

            <ul className="space-y-3 text-left mb-10">
              <li className="flex items-center gap-2 text-text-main">
                ✔️ MIT License
              </li>
              <li className="flex items-center gap-2 text-text-main">
                ✔️ Custom template creation
              </li>
              <li className="flex items-center gap-2 text-text-main">
                ✔️ Full code access
              </li>
              <li className="flex items-center gap-2 text-text-main">
                ✔️ Community-driven
              </li>
            </ul>

            <a
              href="https://github.com/Munnoi/resume-builder"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block py-3 border border-primary text-primary rounded-xl font-medium hover:bg-primary/10 transition-all"
            >
              View on GitHub
            </a>
          </div>

          {/* Premium-looking Free Plan (for fun) */}
          <div className="relative bg-gradient-to-br from-primary to-blue-600 p-10 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all group hover:-translate-y-2 hover:rotate-[0.5deg]">
            {/* Glow */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition duration-500 rounded-2xl" />

            <span className="absolute top-4 right-4 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md">
              Popular
            </span>

            <h3 className="text-xl font-semibold mb-4">AI Assisted</h3>
            <p className="text-5xl font-bold mb-2">Free</p>
            <p className="opacity-90 mb-8">AI features included.</p>

            <ul className="space-y-3 text-left mb-10 opacity-95">
              <li>✨ Bullet point generator</li>
              <li>✨ Resume enhancer</li>
              <li>✨ Skills extractor</li>
              <li>✨ Tailored ATS improvements</li>
            </ul>

            <a
              href="/builder"
              className="w-full block py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all"
            >
              Use AI Tools
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
