import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group hover:scale-[1.03] transition-transform"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all">
            K
          </div>
          <span className="text-xl font-bold text-text-main tracking-tight group-hover:text-primary transition-colors">
            Kesume
          </span>
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-1 bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
            {[
              { name: "Home", path: "/" },
              { name: "Templates", path: "/templates" },
              { name: "Features", path: "/#features" },
              { name: "Pricing", path: "/#pricing" },
              { name: "FAQ", path: "/#faq" },
              { name: "Builder", path: "/builder" },
            ].map((item) => (
              <li key={item.name} className="relative group">
                {item.path.startsWith("/#") ? (
                  <a
                    href={item.path}
                    className="px-4 py-2 text-sm font-medium text-text-muted transition-all duration-300 rounded-full hover:bg-white/80 hover:text-primary relative"
                  >
                    {item.name}

                    {/* Animated underline */}
                    <span className="absolute left-1/2 -bottom-0.5 w-0 group-hover:w-2/3 h-[2px] bg-primary rounded-full transition-all duration-300 -translate-x-1/2"></span>
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="px-4 py-2 text-sm font-medium text-text-muted transition-all duration-300 rounded-full hover:bg-white/80 hover:text-primary relative"
                  >
                    {item.name}
                    <span className="absolute left-1/2 -bottom-0.5 w-0 group-hover:w-2/3 h-[2px] bg-primary rounded-full transition-all duration-300 -translate-x-1/2"></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/Munnoi/resume-builder"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors hover:scale-[1.05] active:scale-[0.97]"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="
      M12 2C6.477 2 2 6.484 2 12.017
      c0 4.425 2.865 8.18 6.839 9.504
      .5.092.682-.217.682-.483
      0-.237-.008-.868-.013-1.703
      -2.782.605-3.369-1.343-3.369-1.343
      -.454-1.158-1.11-1.466-1.11-1.466
      -.908-.62.069-.608.069-.608
      1.003.07 1.531 1.032 1.531 1.032
      .892 1.53 2.341 1.088 2.91.832
      .092-.647.35-1.088.636-1.338
      -2.22-.253-4.555-1.113-4.555-4.951
      0-1.093.39-1.988 1.029-2.688
      -.103-.253-.446-1.272.098-2.65
      0 0 .84-.27 2.75 1.026
      A9.564 9.564 0 0112 6.844
      c.85.004 1.705.115 2.504.337
      1.909-1.296 2.747-1.027 2.747-1.027
      .546 1.379.202 2.398.1 2.651
      .64.7 1.028 1.595 1.028 2.688
      0 3.848-2.339 4.695-4.566 4.943
      .359.309.678.92.678 1.855
      0 1.338-.012 2.419-.012 2.747
      0 .268.18.58.688.482
      A10.019 10.019 0 0022 12.017
      C22 6.484 17.522 2 12 2z
    "
              />
            </svg>

            <span>Star</span>
          </a>

          <div className="h-6 w-px bg-gray-200 hidden lg:block"></div>

          {/* Login */}
          <button className="hidden md:block text-sm font-medium text-text-muted hover:text-primary transition-all hover:scale-[1.05] active:scale-[0.97]">
            Log in
          </button>

          {/* CTA */}
          <Link
            to="/builder"
            className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium 
            hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 
            hover:-translate-y-0.5 active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
