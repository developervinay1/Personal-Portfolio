import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio: Vinaypartap Singh",
  description: "Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="z-[-1] bg-red-200 dark:bg-red-900 absolute top-[6rem] dark:top-[24rem] right-[4rem] h-[14.25rem] w-[14.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
          <div className="z-[-1] bg-blue-200 dark:bg-blue-900 absolute top-[6rem] left-[3rem] h-[14.25rem] w-[14.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
