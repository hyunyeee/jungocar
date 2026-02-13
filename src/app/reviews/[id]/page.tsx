import Image from "next/image";
import { notFound } from "next/navigation";
import { getReviewById } from "@/lib/api/reviews";

interface ReviewDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const DEFAULT_THUMBNAIL =
  "https://i.pinimg.com/1200x/80/05/4e/80054e1184ec8625d6a82d87f8007095.jpg";

function isValidImageUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  return /\.(jpg|jpeg|png|webp|avif)$/i.test(url);
}

export default async function ReviewDetailPage({ params }: ReviewDetailPageProps) {
  const { id } = await params;

  const reviewId = Number(id);
  if (Number.isNaN(reviewId)) {
    notFound();
  }

  let review;
  try {
    review = await getReviewById(reviewId);
  } catch {
    notFound();
  }

  if (!review) {
    notFound();
  }

  const { title, content, imageUrls, thumbnail } = review;

  const resolvedThumbnail = isValidImageUrl(thumbnail) ? thumbnail! : DEFAULT_THUMBNAIL;

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
            {imageUrls.map((url, idx) => {
              const safeUrl = isValidImageUrl(url) ? url : DEFAULT_THUMBNAIL;

              return (
                <div
                  key={`${url}-${idx}`}
                  className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-100"
                >
                  <Image src={safeUrl} alt={`review-image-${idx}`} fill className="object-cover" />
                </div>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
