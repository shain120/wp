import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(
  scopeRef,
  {
    selector = "[data-animate]",
    y = 32,
    opacity = 0,
    duration = 0.9,
    stagger = 0.12,
    ease = "power3.out",
    start = "top 80%",
  } = {}
) {
  useLayoutEffect(() => {
    if (!scopeRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(selector);

      if (!targets.length) {
        return;
      }

      gsap.from(targets, {
        y,
        opacity,
        duration,
        stagger,
        ease,
        scrollTrigger: {
          trigger: scopeRef.current,
          start,
        },
      });
    }, scopeRef);

    return () => ctx.revert();
  }, [scopeRef, selector, y, opacity, duration, stagger, ease, start]);
}
