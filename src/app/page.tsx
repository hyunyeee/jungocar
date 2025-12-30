import { ImageSpace } from "@/components/ImageSpace";
import { Check } from "lucide-react";
import { Suspense } from "react";
import {
  MainGuideSection,
  TimeLineSection,
  VehiclesPreviewSection,
  CarouselBanner,
  ExplainGrid,
  FeatureGridSection,
  StackedCardsSection,
  ImageTripleSection,
} from "@/components/MainClients";
import { benefits } from "@/constants/home";
import { ReviewSection } from "@/components/review/ReviewSection";
import { DUMMY_REVIEWS } from "@/constants/dummyReviews";

export default function Home() {
  return (
    <main>
      <CarouselBanner />
      {/* 타이틀 */}
      <ExplainGrid
        type="white"
        leftChildren={<ImageSpace desc="상단 배너에 들어갈 이미지" className="aspect-video" />}
        rightChildren={
          <div className="w-full">
            <h2 className="mb-5 text-3xl font-semibold md:text-4xl">
              <span className="text-main text-3xl font-bold">승계랜드</span>
              <p className="mt-2 mb-1">자동차 리스, 렌트 차량</p>
              <p>큰 손해 없이 판매하는 방법!</p>
            </h2>
            {benefits.map((text, idx) => (
              <p
                key={idx}
                className="mb-0.5 flex items-start gap-2 text-base leading-relaxed md:text-xl"
              >
                <Check className="text-main mt-1 size-5 shrink-0" />
                {text}
              </p>
            ))}
          </div>
        }
      />

      {/* 리스가이드 이동 섹션 */}
      <MainGuideSection />

      {/* 후기 */}
      <ReviewSection reviews={DUMMY_REVIEWS.slice(0, 4)} />;

        {/* 승계 리스트 */}
      <Suspense fallback={null}>
        <VehiclesPreviewSection />
      </Suspense>

      <FeatureGridSection />

      <StackedCardsSection />

      <ImageTripleSection />

      <TimeLineSection />
    </main>
  );
}
