import NavBar from "./components/NavBar";
import { Inter, Roboto, Poppins, Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mr Jiks Blog",
  description:
    "This is my personal blog where showcase my projects and write about things that interest me.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={poppins.className}>
      <body className='container items-center justify-between w-full min-h-screen mx-auto'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
