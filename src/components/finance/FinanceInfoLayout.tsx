import { formatNumber } from "@/utils/formatNumber";
import { Car } from "lucide-react";
import { FinanceType, VehicleDetail } from "@/types/vehiclePreview";

interface FinanceInfoLayoutProps {
  vehicle: VehicleDetail;
  type: FinanceType;
}

export function FinanceInfoLayout({ vehicle, type }: FinanceInfoLayoutProps) {
  const { supportFee, monthFee, price } = vehicle;

  const totalCost = monthFee * 12 + price;

  return (
    <div className="space-y-8">
      {/* 제목 */}
      <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-900">
        <Car className="size-5 shrink-0" />
        {type === "rent" ? "렌트 정보" : "리스 정보"}
      </h3>

      {/* 카드 영역 */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-6">
        <div className="space-y-7">
          {/* 계약 시 비용 */}
          <div>
            <p className="mb-3 text-sm font-semibold text-neutral-800">차량 계약 시 비용</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">인수금 (판매자에게 지급)</span>
              <span className="font-medium text-neutral-900">{formatNumber(supportFee)}만원</span>
            </div>
          </div>

          {/* 운행기간 비용 */}
          <div>
            <p className="mb-3 text-sm font-semibold text-neutral-800">운행기간 동안 비용</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">
                월 {type === "rent" ? "렌트료" : "리스료"} {monthFee}만원 × 12개월
              </span>
              <span className="text-main font-medium">{formatNumber(monthFee * 12)}만원</span>
            </div>
          </div>

          {/* 만기 후 비용 */}
          <div>
            <p className="mb-3 text-sm font-semibold text-neutral-800">만기 후 인수 비용</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">인수 비용</span>
              <span className="text-main font-medium">{formatNumber(price)}만원</span>
            </div>
          </div>
        </div>

        {/* 총비용 */}
        <div className="bg-main mt-8 rounded-xl px-5 py-3 text-white">
          <div className="flex items-center justify-between text-base font-semibold">
            <span>총 예상 비용</span>
            <span>{formatNumber(totalCost)}만원</span>
          </div>
        </div>
      </div>
    </div>
  );
}
