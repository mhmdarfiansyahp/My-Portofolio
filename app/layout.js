import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

// const outfit = Outfit({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-outfit",
// });

// const ovo = Ovo({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-ovo",
// });

export const metadata = {
  title: "Arfiansyah Putra | Fullstack Web Developer Portfolio",
  description:
    "A passionate Fullstack Web Developer specializing in building scalable and user-friendly web applications with modern technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`antialiased leading-8 overflow-x-hidden bg-white text-black dark:bg-darkTheme dark:text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}

