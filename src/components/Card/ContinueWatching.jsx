import { Star } from "lucide-react";

export default function ContinueWatchingCard({ image, title, rating }) {
  return (
    <div className="relative min-w-[200px] md:min-w-[240px] h-[152px] md:h-[162px] flex-shrink-0 ">
      <div className="relative w-full h-full rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-full
            object-cover
            "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
        <div className="absolute flex justify-between items-center mt-3 text-white bottom-0 left-0 right-0 p-4">
          <h3 className="font-semibold">{title}</h3>

          <div className="flex items-center gap-1">
            <Star size={16} fill="currentColor" />
            <span>{rating}/5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
