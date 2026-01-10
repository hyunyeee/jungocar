"use client";

import { useEffect, useRef } from "react";
import { SectionWrapper } from "../SectionWrapper";
import gsap from "gsap";

interface ExplainGridProps {
  type: "white" | "main" | "gray";
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
}

export function ExplainGrid({ type, leftChildren, rightChildren }: ExplainGridProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(rootRef);
      const left = q(".ex-left");
      const right = q(".ex-right");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(left, {
        opacity: 0,
        x: -40,
        duration: 0.7,
        ease: "power2.out",
      }).from(
        right,
        {
          opacity: 0,
          x: 40,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.55",
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper
      ref={rootRef}
      type={type}
      className="grid grid-cols-1 gap-6 text-start sm:gap-8 md:grid-cols-[5fr_7fr] md:gap-10 lg:grid-cols-[4fr_8fr]"
    >
      {/* LEFT */}
      <div className="ex-left w-full min-w-0 break-words">{leftChildren}</div>

      {/* RIGHT */}
      <div className="ex-right w-full min-w-0 overflow-hidden break-words">{rightChildren}</div>
    </SectionWrapper>
  );
}
