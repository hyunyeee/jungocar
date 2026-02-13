import { ReviewSummary } from "@/types/review";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getReviewById(id: number): Promise<ReviewSummary> {
  const res = await fetch(`${BASE_URL}/reviews/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch review");
  }

  return res.json();
}

interface ReviewPageResponse {
  content: ReviewSummary[];
  totalElements: number;
  totalPages: number;
  number: number;
}

export async function getReviews(page = 0): Promise<ReviewPageResponse> {
  const res = await fetch(`${BASE_URL}/reviews?page=${page}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return res.json();
}
