"use client";

import { QuizResult } from "@/components/quiz/QuizResult";
import type { MbtiType } from "@/lib/mbti-data";
import { useRouter } from "next/navigation";

export function ResultClient({ result }: { result: MbtiType }) {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <QuizResult result={result} onRetry={() => router.push("/")} />
    </main>
  );
}
