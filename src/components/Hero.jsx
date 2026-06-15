import imageHero from "../assets/imageHero.png";
import { Info, VolumeOff } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex items-center justify-center w-full h-[40vh] lg:h-[75vh] relative overflow-hidden">
      <img
        src={imageHero}
        alt="Hero"
        className=" absolute inset-0 w-full h-full overflow-hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
      <div className="absolute w-[90%] top-[40%] lg:top-[40%] left-[5%] text-white">
        <div className="w-full md:max-w-4xl">
          <h1 className="md:text-[48px] text-[22px] font-bold">
            Duty After School
          </h1>
          <p className=" text-[12px] md:text-[20px] tracking-[0.2px] leading-[140%] line-clamp-2 md:line-clamp-none">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
        </div>
        <div className=" flex items-center justify-between mt-[20px] md:mt-[40px] px-[5px]">
          <div className="flex items-center gap-1 md:gap-2">
            <button className="bg-[#0F1E93] rounded-full p-[10px] w-[83px] md:w-[103px] font-bold text[18px] tracking-[0.2px] leading-[140%]">
              Mulai
            </button>
            <button className=" bg-[#22282A] rounded-full px-[26px] py-[10px] w-[165px] md:w-[185px] font-bold tracking-[0.2px] leading-[140%]">
              <div className="flex items-center gap-1 text-[12px] md:text-[16px]">
                <Info className="h-[16px] md:h-[24px]" /> Selengkapnya
              </div>
            </button>
            <span className="text-[12px] md:text-[16px] tracking-[0.2px] leading-[140%] border rounded-full p-[10px]">
              18+
            </span>
          </div>
          <button className="border rounded-full p-[10px] left-[20px]">
            <VolumeOff className="h-[16px] md:h-[24px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
