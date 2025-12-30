import { ReviewCard } from "./ReviewCard";
import { ReviewSummary } from "@/types/review";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ReviewSectionProps {
  reviews: ReviewSummary[];
}

export function ReviewSection({ reviews }: ReviewSectionProps) {
  if (!reviews.length) return null;

  return (
    <section className="mt-24">
      {/* 타이틀 영역 */}
      <div className="mb-10 text-center">
        <h3 className="text-2xl font-bold md:text-3xl">실제 고객 후기</h3>
        <p className="mt-2 text-sm text-neutral-600 md:text-base">
          승계랜드를 이용한 고객들의 생생한 후기입니다.
        </p>
      </div>

      {/* 가운데 정렬된 후기 카드 */}
      <div className="flex justify-center">
        <div className="grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.slice(0, 4).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>

      {/* 하단 CTA */}
      <div className="mt-10 flex justify-center">
        <Link href="/reviews">
          <Button variant="outline" size="lg">
            후기 더보기
          </Button>
        </Link>
      </div>
    </section>
  );
}
