import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from 'next/head';

export const metadata = {
  title: "The Chess Classes",
  description:
    "Join our online chess coaching platform and master the game with expert trainers. Perfect for beginners to advanced players.",
  keywords: [
    "online chess coaching",
    "learn chess online",
    "chess lessons",
    "chess trainers",
    "chess classes",
    "chess practice",
    "chess tutorial",
    "chess strategy",
  ],
  authors: [{ name: "Chess Trainer" }],
  creator: "Chess Trainer",
  metadataBase: new URL("https://thechessclasses.com"),
  openGraph: {
    title: "Online Chess Coaching | Learn Chess with Experts",
    description:
      "Master the game of chess with online coaching from experienced trainers. Start learning today!",
    url: "https://thechessclasses.com",
    siteName: "Chess Coaching",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"/>
      </Head>
      <body className="font-sans bg-white text-black antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
