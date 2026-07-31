"use client";

import { useEffect } from "react";

/* Scroll-reveal: fades .rv elements in as they enter the viewport.
   Ported verbatim from the original inline script on each page. */
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (en) => {
        en.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("in"), i * 80);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return null;
}
