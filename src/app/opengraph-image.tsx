import { ImageResponse } from "next/og";
import { NAVI_OGP_BASE64 } from "@/lib/navi-ogp-base64";

export const runtime = "edge";
export const alt = "副業MBTI診断｜あなたにぴったりの高収入副業がわかる！";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #fff0f5 0%, #fce7f3 40%, #fbcfe8 100%)",
        padding: "40px",
      }}
    >
      {/* ナビちゃん */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "white",
          border: "4px solid #f9a8d4",
          boxShadow: "0 8px 32px rgba(236, 72, 153, 0.2)",
          marginRight: 48,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src={NAVI_OGP_BASE64}
          width={260}
          height={260}
          style={{ borderRadius: "50%" }}
        />
      </div>

      {/* テキスト */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#db2777",
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          副業MBTI診断
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#9d174d",
            lineHeight: 1.4,
            marginBottom: 24,
          }}
        >
          あなたにぴったりの
          <br />
          高収入副業がわかる！
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: "#ec4899",
              color: "white",
              fontSize: 22,
              fontWeight: 700,
              padding: "8px 24px",
              borderRadius: "999px",
            }}
          >
            全10問・約1分
          </div>
          <div
            style={{
              background: "white",
              color: "#db2777",
              fontSize: 22,
              fontWeight: 700,
              padding: "8px 24px",
              borderRadius: "999px",
              border: "2px solid #f9a8d4",
            }}
          >
            16タイプ診断
          </div>
        </div>
      </div>
    </div>,
    { ...size }
  );
}
