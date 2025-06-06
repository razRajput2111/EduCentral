import { ReviewSummarizer } from "@/components/reviews/ReviewSummarizer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Review Analyzer - EduCentral',
  description: 'Use AI to summarize and analyze course or teacher reviews on EduCentral.',
};

export default function ReviewsPage() {
  return (
    <div className="container mx-auto py-8">
      <ReviewSummarizer />
    </div>
  );
}
