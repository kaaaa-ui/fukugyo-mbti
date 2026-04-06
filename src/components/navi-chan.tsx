import Image from "next/image";

interface NaviChanProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "hero";
  className?: string;
  rounded?: boolean;
}

const pxSizes = {
  sm: 32,
  md: 40,
  lg: 64,
  xl: 120,
  "2xl": 180,
  hero: 280,
};

const cssSizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-16 w-16",
  xl: "h-[120px] w-[120px]",
  "2xl": "h-[180px] w-[180px]",
  hero: "h-[280px] w-[280px]",
};

export function NaviChan({
  size = "md",
  className = "",
  rounded = true,
}: NaviChanProps) {
  const isLarge = size === "xl" || size === "2xl" || size === "hero";
  return (
    <div
      className={`inline-block shrink-0 overflow-hidden ${
        rounded ? "rounded-full" : ""
      } ${isLarge ? "" : "shadow-lg shadow-pink-200"} ${cssSizes[size]} ${className}`}
    >
      <Image
        src="/navi-chan.png"
        alt="ナビちゃん"
        width={pxSizes[size]}
        height={pxSizes[size]}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
