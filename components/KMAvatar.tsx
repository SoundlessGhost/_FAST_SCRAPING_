import Image from "next/image";

type Variant = "small" | "large";

const SIZE: Record<Variant, number> = {
  small: 34,
  large: 50,
};

type Props = {
  variant?: Variant;
  /** Override class for layout context (e.g. flex item shrink). */
  className?: string;
};

/**
 * Circular avatar of Md Khalid Mahmud Shawon (founder).
 * Drop-in replacement for "KM" initials circles across the site.
 */
export default function KMAvatar({ variant = "small", className }: Props) {
  const size = SIZE[variant];
  return (
    <span
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        overflow: "hidden",
        position: "relative",
        display: "inline-block",
        flexShrink: 0,
        border: variant === "small" ? "2px solid var(--paper)" : "none",
        boxShadow:
          variant === "small" ? "0 0 0 1px var(--hairline)" : "none",
        verticalAlign: "middle",
      }}
    >
      <Image
        src="/team/shawon.jpg"
        alt="Md Khalid Mahmud Shawon"
        fill
        sizes={`${size}px`}
        style={{ objectFit: "cover" }}
      />
    </span>
  );
}
