import "./scss/globals.scss";
import { ThemeProvider } from "../theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "@/context/UserProvider";
import { FoodProvider } from "@/context/FoodProvider";
import { BasketProvider } from "@/context/BasketProvider";

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
            <BasketProvider>
              <FoodProvider>
                <Header />
                <ThemeProvider>{children}</ThemeProvider>
                <Footer />
              </FoodProvider>
            </BasketProvider>
          </UserProvider>
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
