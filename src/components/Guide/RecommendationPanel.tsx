import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { SCENARIOS, RECOMMENDATION_MAP, GuideMode } from "@/constants/guide";

interface RecommendationPanelProps {
  selectedId: string | null;
}

export function RecommendationPanel({ selectedId }: RecommendationPanelProps) {
  const scenario = SCENARIOS.find((s) => s.id === selectedId) ?? null;
  const active: GuideMode = scenario ? scenario.match : null;

  if (!active) {
    return (
      <div className="flex h-full w-full items-center justify-start rounded-2xl border-2 border-dashed border-gray-200 bg-gray-100 p-7 text-start shadow backdrop-blur">
        <div className="">
          <h4 className="mb-2 text-xl font-bold">상황에 맞는 방식을 골라보세요</h4>
          <p className="text-sm leading-relaxed text-neutral-700">
            위 카드 중 본인 상황과 가까운 항목을 선택하면
            <br />
            가장 적합한 승계 방식을 추천해드려요.
          </p>

          <div className="mt-5 flex items-center gap-2">
            <Link
              href="/vehicle"
              className="bg-main rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:scale-95"
            >
              승계 차량 둘러보기
            </Link>
            <Link
              href="/inquiry"
              className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold transition hover:scale-95"
            >
              상담 신청
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const cfg = RECOMMENDATION_MAP[active];
  const Icon = cfg.icon;

  return (
    <div
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-linear-to-br ${cfg.color} shadow`}
    >
      {/* 상단 콘텐츠 */}
      <div className="relative z-10 p-6">
        {/* 아이콘 강조 */}
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-xl bg-white/60 p-3 shadow backdrop-blur">
            <Icon className="text-main size-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold">{cfg.title}</h4>
            <p className="text-sm text-neutral-700">{cfg.desc}</p>
          </div>
        </div>

        {/* 리스트 */}
        <ul className="mt-4 space-y-2">
          {cfg.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-base text-neutral-800">
              <Check className="text-main size-4" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {/* CTA 영역 */}
        <div className="mt-4 flex items-center justify-start gap-2">
          <Link
            href={cfg.cta.href}
            className="bg-main max-w-fit rounded-lg px-4 py-2 text-center text-sm font-semibold text-white shadow transition hover:scale-95"
          >
            {cfg.cta.label}
          </Link>
          <Link
            href="/inquiry"
            className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold transition hover:scale-95"
          >
            상담 신청
          </Link>
        </div>
      </div>

      {/* 배경 이미지 (연한 overlay) */}
      <Image
        src={cfg.img}
        alt={cfg.title}
        fill
        className="pointer-events-none object-cover opacity-20"
      />
    </div>
  );
}
