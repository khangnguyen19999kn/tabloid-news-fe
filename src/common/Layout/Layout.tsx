import { ReactNode, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="flex justify-center mt-5">
        <div className="p-10 w-[80%] desktop-sm:w-[80%] desktop-lg:w-1/2 desktop-lg:p-0 laptop:w-11/12">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
