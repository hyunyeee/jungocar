"use client";

import Carousel from "../Carousel";
import Image from "next/image";

const BANNERS = [
  {
    src: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "자동차 승계 · 중고차 거래",
    desc: "불필요한 손해 없이, 합리적인 선택을 도와드립니다",
  },
  {
    src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "안전한 절차로 진행되는 거래",
    desc: "조건·상태·과정을 투명하게 확인하세요",
  },
  {
    src: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "리스·렌트 차량도 걱정 없이",
    desc: "승계에 필요한 과정만 깔끔하게 정리했습니다",
  },
  {
    src: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "실사용 기준으로 보는 차량",
    desc: "광고용 사진이 아닌 실제 기준으로 안내합니다",
  },
  {
    src: "https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "처음 이용해도 어렵지 않게",
    desc: "복잡한 과정은 줄이고, 필요한 정보만 제공합니다",
  },
];

export function CarouselBanner() {
  return (
    <Carousel
      data={BANNERS}
      indicator
      height={500}
      autoInterval={8000}
      renderBlock={(item) => (
        <div className="relative h-full w-full">
          <Image src={item.src} alt={item.title} fill priority className="object-cover" />

          {/* 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* 문구 영역 */}
          <div className="absolute right-6 bottom-20 left-6 text-white md:right-auto md:left-12 md:max-w-xl">
            <h2 className="text-2xl leading-tight font-bold md:text-3xl">{item.title}</h2>
            <p className="mt-2 text-sm text-white/90 md:text-base">{item.desc}</p>
          </div>
        </div>
      )}
    />
  );
}
