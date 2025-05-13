// hooks/useGsapScrollAnimation.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapScrollAnimation = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(".animate-on-scroll");

    const triggers = [];

    const animationMap = {
      "fade-up": {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0, duration: 1 },
      },
      "fade-left": {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0, duration: 1 },
      },
      "fade-right": {
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0, duration: 1 },
      },
      "fade-scale": {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1, duration: 1 },
      },
    };

    elements.forEach((el) => {
      const classList = el.classList;
      const animationType = Object.keys(animationMap).find((type) =>
        classList.contains(type)
      );

      const { from, to } = animationMap[animationType] || {
        from: { opacity: 0 },
        to: { opacity: 1, duration: 1 },
      };

      gsap.set(el, from);

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        onEnter: () => gsap.to(el, to),
        onLeaveBack: () => gsap.set(el, from), // только при скролле назад
        once: false,
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);
};
