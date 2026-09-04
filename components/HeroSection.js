"use client";

import { useState } from "react";
import Avatar from "./Avatar";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("manikurmi14@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = "manikurmi14@gmail.com";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-top fade-in-up fade-in-up-delay-1">
        <Avatar />
        <SocialLinks />
      </div>

      <h1 className="hero-name fade-in-up fade-in-up-delay-2">
        Monikanto Kurmi
        <span className="cursor-blink animate-blink">|</span>
      </h1>

      <p className="hero-handle fade-in-up fade-in-up-delay-3">
        [ Pointdexter37 ]
      </p>

      <p className="hero-bio fade-in-up fade-in-up-delay-4">
        A guy who programs things for fun, makes mistakes, and learns from them in backend infrastructure and AI. I also love physics and space, 
        and enjoy reading books.
        
      </p>

      <p className="hero-status fade-in-up fade-in-up-delay-5">
        Currently <strong>obsessing over</strong>  How Time Works
      </p>

      <div className="cta-row fade-in-up fade-in-up-delay-6">
        <a
          href="mailto:manikurmi14@gmail.com"
          className="btn btn-outline"
        >
          Book a quick call
        </a>

        <button className="btn btn-ghost" onClick={copyEmail}>
          {copied ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy email
            </>
          )}
        </button>
      </div>
    </section>
  );
}
