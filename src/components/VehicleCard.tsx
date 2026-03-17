import Link from "next/link";
import { ImageSpace } from "./ImageSpace";
import { formatNumber } from "@/utils/formatNumber";
import { VehicleSummary } from "@/types/vehiclePreview";

export function VehicleCard(props: VehicleSummary) {
  const { id, title, thumbnail, year, price, mileage, fuelType, gearType, color } = props;

  return (
    <Link
      href={`/vehicle/${id}`}
      className="flex items-center gap-3 transition hover:scale-95 sm:flex-col sm:items-start sm:gap-2"
    >
      {/* 이미지 */}
      <div className="size-32 shrink-0 overflow-hidden rounded-lg sm:h-60 sm:w-full">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="h-full w-full object-cover" />
        ) : (
          <ImageSpace />
        )}
      </div>

      {/* 텍스트 */}
      <div className="w-full sm:px-1 sm:pt-2">
        <p className="text-lg font-semibold">{title}</p>

        <p className="text-sm text-neutral-600 sm:text-base">
          {year}년 · {formatNumber(mileage)}km · {fuelType} · {gearType} · {color}
        </p>

        <p className="mt-3 text-xl font-bold">{formatNumber(price)}만원</p>
      </div>
    </Link>
  );
}
