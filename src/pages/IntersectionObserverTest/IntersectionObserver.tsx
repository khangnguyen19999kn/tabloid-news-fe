import { Button } from "@mantine/core";
import { useEffect, useMemo, useRef, useState } from "react";

export default function IntersectionObserverTest() {
  const sections = useMemo(() => ["Section1", "Section2", "Section3"], []);
  const refSectionArr = useRef<HTMLDivElement[]>([]);
  const [sectionActive, setSectionActive] = useState<number>();
  const showListSectionRef = sections.map((section, index) => {
    return (
      <div
        className="bg-red-400 h-[1500px] flex justify-center items-center text-white mt-10"
        ref={(el) => el && (refSectionArr.current[index] = el)}
        key={index}
      >
        <Button className="mt-4">
          <h1 className="text-white">{section}</h1>
        </Button>
      </div>
    );
  });
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index =
            entry.target && sections.indexOf(entry.target.textContent || "");
          setSectionActive(index);
        }
      });
    }, option);
    if (refSectionArr.current.length > 0) {
      refSectionArr.current.forEach((section) => {
        observer.observe(section);
      });
    }
    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return (
    <div>
      <div className="sticky z-10 top-0 right-0 h-[200px] bg-black flex flex-col ">
        {sections.map((section, index) => {
          return (
            <Button
              key={index}
              onClick={() => {
                refSectionArr.current[index].scrollIntoView({
                  behavior: "smooth",
                });
                setSectionActive(index);
              }}
              className={`${
                sectionActive === index ? "bg-red-700" : "bg-black"
              } text-white`}
            >
              {section}
            </Button>
          );
        })}
      </div>
      {showListSectionRef}
    </div>
  );
}
