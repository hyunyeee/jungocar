import Link from "next/link";
import { SectionWrapper } from "@/components/SectionWrapper";

export function GuideFAQ() {
  return (
    <SectionWrapper type="white" className="pt-0! text-start">
      <h3 className="mb-6 text-xl font-bold">자주 묻는 질문</h3>
      <div className="space-y-4">
        <details>
          <summary className="cursor-pointer font-medium">
            완납 승계하면 차량 명의는 어떻게 되나요?
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            완납 후 리스사의 절차를 통해 명의 또는 인도권이 이전됩니다.
          </p>
        </details>

        <details>
          <summary className="cursor-pointer font-medium">
            위탁 승계 수수료는 보통 얼마인가요?
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            업체마다 다르며, 고정 또는 비율 형태의 수수료가 적용될 수 있습니다.
          </p>
        </details>

        <details>
          <summary className="cursor-pointer font-medium">
            승계 시 보험·세금은 어떻게 처리하나요?
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            보험 및 세금은 리스 조건 및 업체 도움 여부에 따라 달라질 수 있습니다.
          </p>
        </details>
      </div>
      <div className="mt-4 rounded-2xl border border-dashed border-gray-200 bg-white p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-700">
            더 상세한 절차나 비용은 상담을 통해 확인해보세요.
          </p>
          <Link href="/inquiry" className="text-main mt-2 text-sm font-medium sm:mt-0">
            상담 신청하기 →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
