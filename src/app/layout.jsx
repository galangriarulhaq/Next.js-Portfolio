import { Merienda } from "next/font/google";
import "./globals.css";

const merienda = Merienda({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Website Portfolio Galang Riarulhaq",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merienda.className}>{children}</body>
    </html>
  );
}
