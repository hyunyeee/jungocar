import Image from "next/image";
import { notFound } from "next/navigation";
import { ReviewSummary } from "@/types/review";
import { DUMMY_REVIEWS } from "@/constants/dummyReviews";

interface ReviewDetailPageProps {
  params: {
    id: string;
  };
}

const DEFAULT_THUMBNAIL = "/images/default-review.webp";

export default function ReviewDetailPage({ params }: ReviewDetailPageProps) {
  const reviewId = Number(params.id);

  const review: ReviewSummary | undefined = DUMMY_REVIEWS.find((r) => r.id === reviewId);

  if (!review) {
    notFound();
  }

  const { title, content, imageUrls, thumbnail } = review;

  const resolvedThumbnail = thumbnail ?? DEFAULT_THUMBNAIL;

  return (
    <main>
      {/* 상단 히어로 */}
      <section className="relative h-[360px] w-full">
        <Image src={resolvedThumbnail} alt={title} fill className="object-cover" priority />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-3xl px-4 text-center text-white">
            <h1 className="text-2xl font-bold md:text-3xl">{title.replaceAll('"', "")}</h1>

            {content && <p className="mt-4 text-sm leading-relaxed md:text-base">{content}</p>}
          </div>
        </div>
      </section>

      {/* 이미지 리스트 */}
      {imageUrls && imageUrls.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-12">
          <div className="space-y-6">
            {imageUrls.map((url, idx) => (
              <div
                key={`${url}-${idx}`}
                className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-100"
              >
                <Image src={url} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
