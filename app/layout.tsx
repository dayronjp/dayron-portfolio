import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "Dayron Anjos — Software Engineering",
  description: "Backend, automation and maintainable systems.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ]
  }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
