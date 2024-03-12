import logo from "@/assets/images/logo.png";
import { Image } from "@mantine/core";
import { useEffect, useState } from "react";
export default function Loading({ isLoading }: { isLoading: boolean }) {
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    let timer:number;
    if (!isLoading) {
      timer = setTimeout(() => setIsVisible(false), 1000); 
    } else {
      setIsVisible(true);
    }
    return () => clearTimeout(timer);
  }, [isLoading]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-20 flex justify-center items-center bg-white transition-opacity duration-1000 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image src={logo} alt="logo" width={300} className="animate-bounce" />
    </div>
  );
}
