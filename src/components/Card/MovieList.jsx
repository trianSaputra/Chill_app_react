export default function MovieList({ title, image }) {
  return (
    <div className="relative h-[145px] md:h-[365px] w-[95px] md:w-[235px] flex-shrink-0 mb-[20px] ">
      <div className="relative w-full h-full rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          srcset=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
