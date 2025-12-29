export interface ReviewSummary {
  id: number;
  title: string;
  content: string | null;
  imageUrls: string[] | null;
  thumbnail: string | null;
}

export interface ReviewPageResponse {
  content: ReviewSummary[];
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
  first: boolean;
  last: boolean;
}
