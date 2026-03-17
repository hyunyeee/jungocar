import { GalleryCarousel } from "@/components/GalleryCarousel";
import { VehicleOptions } from "@/components/VehicleOptions";
import Image from "next/image";
import { getVehicleById } from "@/lib/api/vehicles";
import { VehicleDetailHeader } from "@/components/VehicleDetailHeader";
import { FinanceTabs } from "@/components/finance/FinanceTabs";

interface Params {
  params: {
    id: string;
  };
}

export default async function VehicleDetail({ params }: Params) {
  const id = Number(params.id);

  const vehicle = await getVehicleById(id);

  const images =
    vehicle.images && vehicle.images.length > 0 ? vehicle.images : ["/images/car-placeholder.webp"];

  return (
    <main key={vehicle.id} className="bg-page-blue">
      {/* 헤더 */}
      <VehicleDetailHeader {...vehicle} />

      {/* 갤러리 */}
      <GalleryCarousel images={images} />

      {/* 설명 */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-end justify-start gap-3">
            <div className="bg-main relative size-13 shrink-0 overflow-hidden rounded-full shadow-md">
              <Image
                src="/images/seller.webp"
                alt="판매자"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>

            <div className="chat chat-start w-full">
              <div className="chat-bubble w-fit max-w-[90%] rounded-tl-2xl rounded-r-2xl bg-gray-200 whitespace-nowrap text-neutral-900">
                <p className="text-lg">
                  {vehicle.description ?? "차량 설명이 등록되지 않았습니다."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 차량 옵션 */}
      <VehicleOptions options={vehicle.options ?? []} />

      {/* 렌트 정보 */}
      <section className="mt-8 bg-white">
        <div className="container mx-auto px-4 py-10">
          <FinanceTabs vehicle={vehicle} />
        </div>
      </section>
    </main>
  );
}
