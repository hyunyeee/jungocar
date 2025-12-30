import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ReviewSummary } from "@/types/review";

interface ReviewCardProps {
  review: ReviewSummary;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const thumbnail = review.thumbnail ?? "/images/default-reviews.webp";

  return (
    <Link href={`/reviews/${review.id}`} className="h-full">
      <Card className="flex h-full flex-col overflow-hidden transition hover:shadow-md">
        {/* 이미지 영역: 높이 고정 */}
        <div className="relative h-[150px] w-full bg-neutral-100">
          <Image src={thumbnail} alt={review.title} fill className="object-cover" />
        </div>

        {/* 텍스트 영역 */}
        <CardContent className="flex flex-1 flex-col p-4">
          <h4 className="line-clamp-1 text-sm font-semibold">{review.title.replaceAll('"', "")}</h4>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">
            {review.content ?? "상담을 통해 만족스러운 승계가 진행되었습니다."}
          </p>

          {/* spacer → 카드 하단 맞춤 */}
          <div className="flex-1" />
        </CardContent>
      </Card>
    </Link>
  );
}
