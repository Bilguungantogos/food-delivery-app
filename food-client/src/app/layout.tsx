import "./scss/globals.scss";
import { ThemeProvider } from "../theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "@/context/UserProvider";
import { FoodProvider } from "@/context/FoodProvider";
import { BasketProvider } from "@/context/BasketProvider";
import { CategoryProvider } from "@/context/CategoryProvider";

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
                <CategoryProvider>
                  <Header />
                  <ThemeProvider>{children}</ThemeProvider>
                  <Footer />
                </CategoryProvider>
              </FoodProvider>
            </BasketProvider>
          </UserProvider>
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
