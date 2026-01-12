"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import gsap from "gsap";

import { DimmedImageBanner } from "@/components/DimmedImageBanner";
import { SectionWrapper } from "@/components/SectionWrapper";
import { LeaseCompareSection } from "@/components/Guide/LeaseCompareSection";
import { ScenarioCard } from "@/components/Guide/ScenarioCard";
import { RecommendationPanel } from "@/components/Guide/RecommendationPanel";
import { GuideFAQ } from "@/components/Guide/GuideFAQ";
import { SCENARIOS, type GuideMode } from "@/constants/guide";

export default function LeaseGuidePage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeMatch: GuideMode =
    (SCENARIOS.find((s) => s.id === selectedId) || null)?.match ?? null;

  const panelRef = useRef<HTMLDivElement | null>(null);

  // 패널 슬라이드 인 (activeMatch 변경에 따라)
  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = panelRef.current;
    if (!el) return;

    gsap.killTweensOf(el);

    if (!activeMatch) {
      if (prefersReduced) {
        el.style.opacity = "1";
        el.style.transform = "none";
      } else {
        gsap.set(el, { autoAlpha: 1, x: 0, clearProps: "all" });
      }
      return;
    }

    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    gsap.fromTo(
      el,
      { x: 40, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.36, ease: "power3.out", overwrite: true },
    );
  }, [activeMatch]);

  return (
    <main className="min-h-screen text-neutral-800">
      <DimmedImageBanner
        title="승계 가이드"
        descriptions={["리스가 처음이라 어려우신가요?", "상황에 맞춰 빠르게 추천받아보세요"]}
        imageSrc="/images/holding.webp"
        imageClassName="object-center"
      />

      <SectionWrapper type="white" className="text-start">
        <div className="mb-2 flex items-center gap-3">
          <ArrowRightLeft className="size-6" />
          <h2 className="text-2xl font-bold">어떤 승계가 내게 적합할까요?</h2>
        </div>
        <p className="mb-5 text-sm text-neutral-600">내 상황에 맞는 카드를 골라보세요.</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {SCENARIOS.map((s, i) => (
            <ScenarioCard
              key={s.id}
              index={i}
              id={s.id}
              title={s.title}
              subtitle={s.subtitle}
              hint={s.hint}
              icon={s.icon}
              active={selectedId === s.id}
              onClick={() => setSelectedId((cur) => (cur === s.id ? null : s.id))}
            />
          ))}
        </div>
        <div className="mt-4">
          <div
            ref={panelRef}
            className="relative h-full overflow-hidden rounded-2xl"
            style={{ opacity: 1, transform: "translateX(0px)" }}
          >
            <RecommendationPanel selectedId={selectedId} />
          </div>
        </div>
        <LeaseCompareSection />
      </SectionWrapper>

      {/* FAQ / CTA */}
      <GuideFAQ />
    </main>
  );
}
