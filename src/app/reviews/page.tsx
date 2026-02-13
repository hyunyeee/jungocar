import { DimmedImageBanner } from "@/components/DimmedImageBanner";
import { ReviewCard } from "@/components/review/ReviewCard";
import ReviewPagination from "@/components/review/ReviewPagination";
import { ReviewSummary } from "@/types/review";
import { getReviews } from "@/lib/api/reviews";

interface ReviewPageProps {
  searchParams: { page?: string };
}

export default async function Review({ searchParams }: ReviewPageProps) {
  const currentPage = Number(searchParams.page ?? 0);

  const data = await getReviews(currentPage);

  const reviews: ReviewSummary[] = data.content;
  const totalPages = data.totalPages;

  return (
    <main>
      <DimmedImageBanner
        title="고객 후기"
        descriptions={["승계랜드를 이용한 고객들의 생생한 후기입니다."]}
        imageSrc="/images/review.webp"
        imageClassName="object-center"
      />

      <section className="mx-auto max-w-6xl px-4 py-20">
        {/* 후기 리스트 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* 페이지네이션 */}
        <ReviewPagination currentPage={currentPage} totalPages={totalPages} />
      </section>
    </main>
  );
}
