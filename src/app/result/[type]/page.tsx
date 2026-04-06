import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { mbtiTypes } from "@/lib/mbti-data";
import { ResultClient } from "./result-client";

const validTypes = Object.keys(mbtiTypes);

export function generateStaticParams() {
  return validTypes.map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const upper = type.toUpperCase();
  const data = mbtiTypes[upper];
  if (!data) return {};

  const title = `【${data.code}】${data.name}｜副業MBTI診断`;
  const description = `あなたの副業タイプは${data.name}！おすすめ: ${data.job}（月収${data.salary}円）。${data.description.slice(0, 60)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ja_JP",
      siteName: "副業MBTI診断",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ResultPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const upper = type.toUpperCase();
  const data = mbtiTypes[upper];
  if (!data) notFound();

  return <ResultClient result={data} />;
}
