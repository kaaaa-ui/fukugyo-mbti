import { ImageResponse } from "next/og";
import { mbtiTypes } from "@/lib/mbti-data";

export const runtime = "edge";
export const alt = "副業MBTI診断 結果";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const upper = type.toUpperCase();
  const data = mbtiTypes[upper];

  if (!data) {
    return new ImageResponse(
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#fff0f5",
          fontSize: 48,
          color: "#4a2040",
        }}
      >
        副業MBTI診断
      </div>,
      { ...size }
    );
  }

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #fce7f3 0%, #fff0f5 50%, #fef9c3 100%)",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          borderRadius: "32px",
          padding: "48px 64px",
          border: "3px solid #fbcfe8",
          boxShadow: "0 8px 32px rgba(236, 72, 153, 0.15)",
          maxWidth: "1000px",
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#ec4899",
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          私の副業タイプは...
        </div>
        <div style={{ fontSize: 64, marginBottom: 8 }}>{data.emoji}</div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: "#ec4899",
            marginBottom: 8,
          }}
        >
          {data.code}
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#4a2040",
            marginBottom: 24,
          }}
        >
          {data.name}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            background: "linear-gradient(135deg, #fce7f3, #fef9c3)",
            borderRadius: "16px",
            padding: "16px 32px",
          }}
        >
          <div style={{ fontSize: 22, color: "#9d174d", fontWeight: 600 }}>
            おすすめ: {data.job}
          </div>
          <div style={{ fontSize: 22, color: "#d4a017", fontWeight: 700 }}>
            月収 {data.salary}円
          </div>
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#a06080",
            marginTop: 24,
          }}
        >
          副業MBTI診断 by 高収入ナビ
        </div>
      </div>
    </div>,
    { ...size }
  );
}
