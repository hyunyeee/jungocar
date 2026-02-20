"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../SectionWrapper";
import { User, Settings2, Megaphone, Car, CreditCard } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function TimeLineSection() {
  return (
    <SectionWrapper type="gray" className="text-start">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">🚗 승계 진행 절차</h2>
        <p className="mb-12 text-center text-base text-neutral-700 md:text-lg">
          고객님의 상황에 맞는 최적의 승계 방식을 제안해 드립니다.
        </p>
        <Timeline />
      </div>
    </SectionWrapper>
  );
}

export function Timeline() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");

      items.forEach((el) => {
        const circle = el.querySelector<HTMLElement>(".timeline-circle");
        const content = el.querySelector<HTMLElement>(".timeline-content");

        if (circle) {
          gsap.fromTo(
            circle,
            { scale: 0.8, autoAlpha: 0 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        if (content) {
          gsap.fromTo(
            content,
            { autoAlpha: 0, y: 30 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative space-y-12">
      {/* --- STEP 1 & 2 (공통) --- */}
      <div className="mb-16 flex flex-col items-center space-y-12">
        <StepItem
          step="01"
          title="승계 신청 및 상담"
          icon={<User className="h-8 w-8 text-blue-600" />}
          desc={["승계 신청 접수", "1:1 전담 담당자 배정", "필요 서류 및 절차 안내"]}
          footer="고객님의 상황을 정확히 파악한 뒤, 맞춤형 상담을 진행합니다."
        />
        <StepItem
          step="02"
          title="승계 방식 결정"
          icon={<Settings2 className="h-8 w-8 text-blue-600" />}
          footer="전담 담당자와 충분한 상담 후, 고객님의 니즈와 차량 상태에 맞는 방식을 결정합니다."
        />
      </div>

      {/* --- 분기점 (위탁 vs 완납) --- */}
      <div className="grid grid-cols-1 gap-8 border-t border-neutral-200 pt-8 md:grid-cols-2">
        {/* 좌측: 위탁승계 */}
        <div className="space-y-8">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500" />
            <h3 className="text-xl font-bold text-blue-600">위탁승계 진행</h3>
          </div>
          <StepItem
            step="03"
            title="상품화 및 광고 등록"
            icon={<Megaphone className="h-6 w-6 text-blue-500" />}
            desc={[
              "지정 사업소 상품화 진행",
              "자체/프리미엄 광고 동시 진행",
              "잠재 구매자 적극 노출",
            ]}
          />
          <StepItem
            step="04"
            title="차량 출고"
            icon={<Car className="h-6 w-6 text-blue-500" />}
            desc={["승계 전 과정 대행", "서류 처리 및 일정 지원", "차량 출고 전담 관리"]}
          />
        </div>

        {/* 우측: 완납승계 */}
        <div className="space-y-8">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <h3 className="text-xl font-bold text-green-600">완납승계 진행</h3>
          </div>
          <StepItem
            step="03"
            title="승계 진행 및 차량 출고"
            isGreen
            icon={<CreditCard className="h-6 w-6 text-green-500" />}
            desc={["완납승계 계약 즉시 진행", "차량 인도금 즉시 송금", "신속한 차량 출고 지원"]}
            footer="빠르고 간편한 승계를 원하는 고객님께 적합합니다."
          />
        </div>
      </div>
    </div>
  );
}

// 개별 스텝 컴포넌트
function StepItem({ step, title, desc, footer, icon, isGreen = false }: any) {
  return (
    <div className="timeline-item flex w-full max-w-2xl items-start gap-6">
      <div
        className={`timeline-circle flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border shadow-sm ${isGreen ? "border-green-100 bg-green-50" : "border-blue-100 bg-blue-50"}`}
      >
        {icon}
      </div>
      <div className="timeline-content flex-1 pt-1">
        <span
          className={`text-sm font-black tracking-widest ${isGreen ? "text-green-500" : "text-blue-500"}`}
        >
          STEP {step}
        </span>
        <h4 className="mb-3 text-xl font-bold">{title}</h4>
        {desc && (
          <ul className="mb-3 space-y-1">
            {desc.map((item: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                <span className="h-1 w-1 rounded-full bg-neutral-400" /> {item}
              </li>
            ))}
          </ul>
        )}
        {footer && <p className="text-sm font-medium text-neutral-500">{footer}</p>}
      </div>
    </div>
  );
}
