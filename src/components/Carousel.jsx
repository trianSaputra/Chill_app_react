import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function Carousel({ title, children }) {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    console.log(children),
    (
      <div className="relative px-4 md:px-14 py-6">
        <h2 className="text-white text-xl md:text-3xl font-bold mb-4">
          {title}
        </h2>
        <button
          onClick={scrollLeft}
          className="
          absolute
          left-0
          md:left-8
          top-[50%]
          z-10
          bg-black/60
          text-white
          p-2
          rounded-full
          hover:bg-black
        "
        >
          <ChevronLeft />
        </button>
        <div
          ref={carouselRef}
          className="
          flex
          gap-4
          overflow-x-scroll
          scroll-smooth
          scrollbar-hide
        "
          style={{ scrollbarWidth: "none" }}
        >
          {children}
        </div>
        <button
          onClick={scrollRight}
          className="
          absolute
          right-0
          md:right-8
          top-[50%]
          z-10
          bg-black/60
          text-white
          p-2
          rounded-full
          hover:bg-black
        "
        >
          <ChevronRight />
        </button>
      </div>
    )
  );
}
