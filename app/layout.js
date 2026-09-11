import "./globals.css";

export const metadata = {
  title: "Jaya Narasimha | Frontend Developer & UI/UX Designer",
  description:
    "Creating modern digital experiences with thoughtful design and development.",
  openGraph: {
    title: "Jaya Narasimha | Frontend Developer & UI/UX Designer",
    description:
      "Creating modern digital experiences with thoughtful design and development.",
    images: ["/me.jpeg"],
    url: "https://your-domain.com",
    siteName: "Jaya Narasimha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaya Narasimha | Frontend Developer & UI/UX Designer",
    images: ["/me.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
