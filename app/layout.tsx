import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import PageNav from "@/components/PageNav";
import OnThisPage from "@/components/OnThisPage";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instacart Product Design Guidelines",
  description: "How the Instacart brand applies across our product surfaces.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <Sidebar />
          <main className="main">
            <div className="page-layout">
              <div className="page-wrap">
                {children}
                <PageNav />
              </div>
              <OnThisPage />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
