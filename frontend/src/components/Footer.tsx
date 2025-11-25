import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white border-t border-gray-100 py-10 overflow-hidden">
      {/* playful floating glow */}
      <div className="absolute -top-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 animate-slide-up">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-primary tracking-tight hover:opacity-90 transition-opacity cursor-pointer">
            Kesume
          </span>
          <span className="text-gray-300">|</span>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Open Source Project.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex gap-6">
          {[
            { name: "Privacy", href: "#" },
            { name: "Terms", href: "#" },
            {
              name: "GitHub",
              href: "https://github.com/Munnoi/resume-builder",
              external: true,
            },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item?.external ? "_blank" : undefined}
              rel={item?.external ? "noopener noreferrer" : undefined}
              className="relative text-sm text-gray-500 hover:text-primary transition-all group"
            >
              {item.name}

              {/* animated underline */}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
