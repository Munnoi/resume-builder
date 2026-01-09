
"use client"

import { useState, useEffect } from 'react';

const CowsayLoader = () => {
  const [eyes, setEyes] = useState("oo");
  const [dots, setDots] = useState(".");

  // 1. Blink Animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setEyes("--"); // Close eyes
      setTimeout(() => setEyes("oo"), 200);
    }, 5000); 

    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "." : prev + ".");
    }, 600);
    return () => clearInterval(dotInterval);
  }, []);

  const message = `Loading Page${dots}`.padEnd(16, " ");

  const cow = `
 __________________
< ${message} >
 ------------------
        \\   ^__^
         \\  (${eyes})\\_______
            (__)\\       )==>
                ||----w |
                ||     ||
                w       w
        ----------------------------
`;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <pre className="font-mono text-sm leading-tight dark:text-accent sm:text-base whitespace-pre text-gray-500">
        {cow}
      </pre>
    </div>
  );
};

export default CowsayLoader;