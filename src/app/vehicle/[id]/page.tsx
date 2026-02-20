import { GalleryCarousel } from "@/components/GalleryCarousel";
import { ImageSpace } from "@/components/ImageSpace";
import { SectionWrapper } from "@/components/SectionWrapper";
import { VehicleOptions } from "@/components/VehicleOptions";
import { formatNumber } from "@/utils/formatNumber";
import { Car, RectangleEllipsis } from "lucide-react";
import Image from "next/image";
import { FinanceTabs } from "@/components/finance/FinanceTabs";

interface Vehicle {
  id: number;
  title: string;
  model: string;
  year: string;
  mileage: number;
  price: number;
  description: string;
  monthFee: number;
  supportFee: number;
  color: string;
  fuelType: string;
  gearType: string;
  accidentHistory: number;
  images: string[];
  options: string[];
}

export default async function VehicleDetail() {
  // mock
  const vehicle: Vehicle = {
    id: 4,
    title: "소나타 뉴라이즈",
    model: "LF ",
    year: "2019",
    mileage: 45000,
    price: 1500,
    description: "이 차에 대한 설명을 여기에 기재합니다.",
    monthFee: 52,
    supportFee: 0,
    color: "흰색",
    fuelType: "가솔린",
    gearType: "오토",
    accidentHistory: 0,
    images: Array.from({ length: 13 }).map(() => "/images/bmw.webp"),
    options: ["후방카메라", "스마트키", "알류미늄휠", "하이패스 내장"],
  };

  return (
    <main key={vehicle.id} className="bg-page-blue">
      {/* 헤더 */}
      <VehicleDetailHeader {...vehicle} />
      {/* 갤러리 */}
      <GalleryCarousel images={vehicle.images} />
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-end justify-start gap-3">
            <div className="bg-main relative size-13 shrink-0 overflow-hidden rounded-full shadow-md">
              <Image
                src="/images/seller.webp"
                alt="승계랜드"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            {/* 밀풍선 코멘트 */}
            <div className="chat chat-start">
              <div className="chat-bubble wrap-break-words rounded-tl-2xl rounded-r-2xl bg-gray-200 whitespace-pre-wrap text-neutral-900">
                <p className="mb-2 text-lg">{vehicle.description}</p>
                <p className="mb-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea id, enim reiciendis
                  officiis distinctio quae, amet voluptatem natus doloremque, ducimus libero
                  consectetur quaerat. Blanditiis repudiandae dolorem ducimus itaque impedit ad.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea id, enim reiciendis
                  officiis distinctio quae, amet voluptatem natus doloremque, ducimus libero
                  consectetur quaerat. Blanditiis repudiandae dolorem ducimus itaque impedit ad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 차량 옵션 */}
      <VehicleOptions options={vehicle.options} />

      {/* 렌트 정보 */}
      <section className="mt-8 bg-white">
        <div className="container mx-auto px-4 py-10">
          <FinanceTabs vehicle={vehicle} />
        </div>
      </section>
    </main>
  );
}

function VehicleDetailHeader(props: Vehicle) {
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
            {year}년 · {formatNumber(mileage)}km · {fuelType} · {gearType} · {color}
          </p>
        </div>
        {/* price field */}
        <div className="w-full rounded-2xl bg-gray-100 p-4 shadow md:max-w-[360px]">
          <div className="grid grid-cols-3 gap-5">
            {/* 차량 가격 */}
            <div className="text-center">
              <p className="text-sm leading-tight text-neutral-500">차량 가격</p>
              <p className="mt-1.5 text-lg leading-none font-semibold">{formatNumber(price)}만원</p>
            </div>

            {/* 승계지원금 */}
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
