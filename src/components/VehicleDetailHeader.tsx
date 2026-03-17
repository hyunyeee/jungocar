import { formatNumber } from "@/utils/formatNumber";
import { VehicleDetail } from "@/types/vehiclePreview";

export function VehicleDetailHeader(props: VehicleDetail) {
  const {
    title,
    model,
    year,
    mileage,
    price,
    monthFee,
    supportFee,
    color,
    fuelType,
    gearType,
    accidentHistory,
  } = props;

  return (
    <header className="bg-white">
      <div className="container mx-auto flex flex-col gap-5 px-4 pt-12 pb-4 md:flex-row md:items-end md:justify-between">
        <div>
          {accidentHistory === 0 && (
            <span className="bg-main mb-3 inline-block rounded-full px-2 py-0.5 text-xs font-medium text-white">
              무사고
            </span>
          )}

          <h1 className="mb-2 text-2xl font-semibold">
            {title} · {model}
          </h1>

          <p className="text-base font-semibold text-neutral-600">
            {year}년 · {formatNumber(mileage)}km · {fuelType ?? "-"} · {gearType ?? "-"} · {color}
          </p>
        </div>

        {/* 가격 정보 */}
        <div className="w-full rounded-2xl bg-gray-100 p-4 shadow md:max-w-[360px]">
          <div className="grid grid-cols-3 gap-5">
            {/* 차량 가격 */}
            <div className="text-center">
              <p className="text-sm leading-tight text-neutral-500">차량 가격</p>
              <p className="mt-1.5 text-lg leading-none font-semibold">{formatNumber(price)}만원</p>
            </div>

            {/* 승계 지원금 */}
            <div className="text-center">
              <p className="text-sm leading-tight text-neutral-500">승계지원금</p>
              <p className="text-main mt-1.5 text-lg leading-none font-semibold">
                {formatNumber(supportFee)}만원
              </p>
            </div>

            {/* 월 렌트료 */}
            <div className="text-center">
              <p className="text-sm leading-tight text-neutral-500">월 렌트료</p>
              <p className="text-main mt-1.5 text-lg leading-none font-semibold">
                {formatNumber(monthFee)}만원
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
