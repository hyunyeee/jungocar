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
import Image from "next/image";
import { benefits } from "@/constants/home";
import { ReviewSection } from "@/components/review/ReviewSection";
import FloatingCustomerForm from "@/components/form/contact/FloatingCustomerForm";
import { getReviews } from "@/lib/api/reviews";

export default async function Home() {
  const reviewData = await getReviews(0);

  const reviews = reviewData.content.slice(0, 4);

  return (
    <main>
      <CarouselBanner />

      {/* 타이틀 */}
      <ExplainGrid
        type="white"
        leftChildren={
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src="https://images.pexels.com/photos/7144207/pexels-photo-7144207.jpeg"
              alt="안전한 차량 절차"
              fill
              className="object-cover"
            />
          </div>
        }
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
      <ReviewSection reviews={reviews} />

      {/* 승계 리스트 */}
      <Suspense fallback={null}>
        <VehiclesPreviewSection />
      </Suspense>

      <FeatureGridSection />
      <StackedCardsSection />
      <ImageTripleSection />
      <TimeLineSection />
      <FloatingCustomerForm />
    </main>
  );
}
