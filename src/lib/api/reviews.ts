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

export async function getReviews(page = 0, size = 6) {
  const res = await fetch(`${BASE_URL}/reviews?page=${page}&size=${size}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return res.json();
}
