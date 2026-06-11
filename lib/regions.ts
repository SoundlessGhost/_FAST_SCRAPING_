// Shopee region code -> display name + chart color.
export const REGIONS: Record<string, { name: string; color: string }> = {
  id: { name: "Indonesia", color: "#0e5d44" },
  my: { name: "Malaysia", color: "#1d9e75" },
  th: { name: "Thailand", color: "#ba7517" },
  sg: { name: "Singapore", color: "#378add" },
  ph: { name: "Philippines", color: "#7e2e8a" },
  vn: { name: "Vietnam", color: "#d4537e" },
  tw: { name: "Taiwan", color: "#0f6e56" },
  br: { name: "Brazil", color: "#d85a30" },
  mx: { name: "Mexico", color: "#c79b3a" },
};

// Stable display order for region lists / chart stacks.
export const REGION_ORDER = ["id", "my", "th", "sg", "ph", "vn", "tw", "br", "mx"];

export const regionName = (code: string) => REGIONS[code]?.name ?? code.toUpperCase();
export const regionColor = (code: string) => REGIONS[code]?.color ?? "#888780";
