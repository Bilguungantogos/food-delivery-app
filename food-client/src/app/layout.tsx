import "./scss/globals.scss";
import { ThemeProvider } from "../theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "@/context/UserProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <UserProvider>
            <Header />
            <ThemeProvider>{children}</ThemeProvider>
            <Footer />
          </UserProvider>
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
