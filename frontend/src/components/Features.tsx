import React from "react";

type FeatureItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: FeatureItem[] = [
  {
    title: "Real-time Preview",
    description:
      "Watch your resume transform instantly as you edit. No more guessing how the final PDF will look.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "ATS-Friendly Design",
    description:
      "Templates optimized for Applicant Tracking Systems to ensure your resume gets seen by human eyes.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    title: "Open Source & Free",
    description:
      "Built by the community, for the community. Completely free to use with no hidden paywalls.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "Privacy Focused",
    description:
      "Your data stays with you. We don't store your personal information on our servers.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-24 bg-surface-alt relative overflow-hidden"
    >
      {/* playful background blobs */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-20 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slower"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 animate-slide-up">
            Everything you need to stand out
          </h2>
          <p className="text-lg text-text-muted animate-slide-up animation-delay-150">
            Powerful features designed to help you create a compelling narrative
            for your career journey.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm 
              hover:shadow-xl transition-all duration-300 group 
              hover:-translate-y-2 hover:rotate-[0.8deg] 
              cursor-pointer"
            >
              {/* shimmer highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

              {/* Icon */}
              <div
                className="w-12 h-12 bg-primary-light text-primary rounded-xl flex items-center justify-center mb-6
                group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-text-main mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
