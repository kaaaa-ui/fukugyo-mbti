"use client";

import { useState, useCallback } from "react";
import { QuizStart } from "@/components/quiz/QuizStart";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizResult } from "@/components/quiz/QuizResult";
import {
  questions,
  mbtiTypes,
  calculateMbtiType,
  type Axis,
  type Choice,
} from "@/lib/mbti-data";

type Phase = "start" | "quiz" | "result";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("start");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<Axis, number>>({
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0,
  });
  const [resultCode, setResultCode] = useState<string>("");

  const handleStart = useCallback(() => {
    setPhase("quiz");
    setQuestionIndex(0);
    setScores({ EI: 0, SN: 0, TF: 0, JP: 0 });
  }, []);

  const handleAnswer = useCallback(
    (choice: Choice) => {
      const newScores = { ...scores };
      for (const [axis, value] of Object.entries(choice.scores)) {
        newScores[axis as Axis] += value;
      }
      setScores(newScores);

      if (questionIndex < questions.length - 1) {
        setQuestionIndex(questionIndex + 1);
      } else {
        const code = calculateMbtiType(newScores);
        setResultCode(code);
        setPhase("result");
      }
    },
    [scores, questionIndex]
  );

  const handleRetry = useCallback(() => {
    setPhase("start");
    setQuestionIndex(0);
    setScores({ EI: 0, SN: 0, TF: 0, JP: 0 });
    setResultCode("");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {phase === "start" && <QuizStart onStart={handleStart} />}
      {phase === "quiz" && (
        <QuizQuestion
          question={questions[questionIndex]}
          currentIndex={questionIndex}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      {phase === "result" && resultCode && mbtiTypes[resultCode] && (
        <QuizResult result={mbtiTypes[resultCode]} onRetry={handleRetry} />
      )}
    </main>
  );
}
