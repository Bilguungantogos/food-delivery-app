import "./scss/globals.scss";
import { ThemeProvider } from "../theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          <ThemeProvider>{children}</ThemeProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
