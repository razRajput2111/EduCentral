"use client";

import { useState } from "react";
import { summarizeReviews, type SummarizeReviewsOutput } from "@/ai/flows/summarize-reviews";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Loader2, Wand2, ThumbsUp, ThumbsDown, Meh } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function ReviewSummarizer() {
  const [reviewsText, setReviewsText] = useState<string>("");
  const [summaryResult, setSummaryResult] = useState<SummarizeReviewsOutput | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!reviewsText.trim()) {
      setError("Please enter some reviews to summarize.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setSummaryResult(null);
    try {
      const result = await summarizeReviews({ reviews: reviewsText });
      setSummaryResult(result);
    } catch (e) {
      console.error(e);
      setError("Failed to summarize reviews. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const SentimentIcon = ({ sentiment }: { sentiment: string }) => {
    const lowerSentiment = sentiment.toLowerCase();
    if (lowerSentiment.includes("positive")) return <ThumbsUp className="h-5 w-5 text-green-500" />;
    if (lowerSentiment.includes("negative")) return <ThumbsDown className="h-5 w-5 text-red-500" />;
    if (lowerSentiment.includes("mixed") || lowerSentiment.includes("neutral")) return <Meh className="h-5 w-5 text-yellow-500" />;
    return null;
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <Wand2 className="h-8 w-8 text-primary" />
          <CardTitle className="text-3xl font-headline">AI Review Analyzer</CardTitle>
        </div>
        <CardDescription>
          Paste in student or course reviews to get an AI-powered summary and sentiment analysis.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label htmlFor="reviewsText" className="block text-lg font-medium text-foreground mb-2">
            Enter Reviews
          </label>
          <Textarea
            id="reviewsText"
            value={reviewsText}
            onChange={(e) => setReviewsText(e.target.value)}
            placeholder="Paste reviews here, one review per line or separated by paragraphs..."
            className="min-h-[200px] text-base"
            disabled={isLoading}
          />
        </div>
        <Button onClick={handleSubmit} disabled={isLoading || !reviewsText.trim()} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3 px-6">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-5 w-5" />
              Summarize Reviews
            </>
          )}
        </Button>
        
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {summaryResult && (
          <div className="space-y-4 pt-4 border-t border-border">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2 font-headline">Summary</h3>
              <p className="text-foreground/90 whitespace-pre-wrap">{summaryResult.summary}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2 font-headline">Overall Sentiment</h3>
              <div className="flex items-center gap-2">
                <SentimentIcon sentiment={summaryResult.sentiment} />
                <p className="text-lg font-medium text-foreground/90">{summaryResult.sentiment}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
            Powered by Genkit AI. Results are generated and may require verification.
        </p>
      </CardFooter>
    </Card>
  );
}
