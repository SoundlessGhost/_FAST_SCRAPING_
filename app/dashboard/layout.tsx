import type { Metadata } from "next";
import "../styles/dashboard.css";

export const metadata: Metadata = {
  title: "Usage dashboard",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="dash">{children}</div>;
}
