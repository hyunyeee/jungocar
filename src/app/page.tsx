import { Card } from "@/components/Card";
import { CarouselBanner } from "@/components/CarouselBanner";
import { ImageSpace } from "@/components/ImageSpace";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <CarouselBanner />
      {/* 타이틀 */}
      <SectionWrapper type="white" className="flex flex-col gap-4 text-start md:flex-row md:gap-10">
        <ImageSpace width={300} height={300} desc="상단 배너에 들어갈 이미지" />
        <div>
          <h1 className="text-main mb-3 text-base font-semibold md:text-xl">승계랜드</h1>
          <p className="mb-0.5 text-3xl font-semibold md:text-4xl">타이틀에 들어갈 설명1</p>
          <p className="mb-5 text-3xl font-semibold md:text-4xl">타이틀에 들어갈 설명2</p>
          <p className="mb-0.5 flex items-center gap-1 text-base md:text-xl">
            <Check className="text-main size-5 shrink-0" /> 부가 설명 1.
          </p>
          <p className="mb-0.5 flex items-center gap-1 text-base md:text-xl">
            <Check className="text-main size-5 shrink-0" /> 부가 설명 2.
          </p>
          <p className="mb-0.5 flex items-center gap-1 text-base md:text-xl">
            <Check className="text-main size-5 shrink-0" /> 부가 설명 3.
          </p>
        </div>
      </SectionWrapper>
      {/* 소개? */}
      <SectionWrapper type="gray">
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">메인 페이지 주요 내용에 대한 제목</h2>
        <p className="text-neutral-70 mb-0.5 text-base md:text-lg">
          메인 페이지 주요 내용에 대한 설명 1
        </p>
        <p className="text-neutral-70 mb-8 text-base md:text-lg">
          메인 페이지 주요 내용에 대한 설명 2
        </p>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="aspect-square w-full">
              <ImageSpace desc={`이미지에 관한 내용 ${idx + 1}`} />
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="bg-main mx-auto mt-12 block max-w-fit rounded px-5 py-3 text-lg font-semibold text-white transition hover:scale-95"
        >
          다른 페이지로 이동
        </Link>
      </SectionWrapper>
      <SectionWrapper type="white" className="text-start">
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">승계 리스트</h2>
        <p className="mb-8 text-base text-neutral-700 md:text-lg">승계 리스트에 관한 간단한 설명</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Card key={idx} />
          ))}
        </div>
        <Link
          href="/"
          className="mx-auto mt-12 block max-w-fit rounded bg-gray-200 px-5 py-3 text-lg font-semibold transition hover:scale-95"
        >
          승계차량 더보기
        </Link>
      </SectionWrapper>
    </main>
  );
}
