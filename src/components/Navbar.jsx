import { useState } from "react";
import chill from "../assets/chill.png";
import chillIcon from "../assets/chillIcon.png";
import profileIcon from "../assets/profileIcon.png";
import { ChevronDown, User, Star, LogOut } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between h-[94px] px-4 md:px-20">
      {/* Logo + Menu */}
      <div className="flex items-center gap-4 md:gap-20">
        <div className="flex items-end gap-1">
          <img src={chillIcon} alt="" className="h-[18px] md:h-[22px]" />
          <img src={chill} alt="" className="hidden md:block h-[28px]" />
        </div>

        <div className="flex gap-4 md:gap-20 text-white text-sm md:text-base">
          <div>Series</div>
          <div>Films</div>
          <div>Daftar Saya</div>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 cursor-pointer"
        >
          <img
            src={profileIcon}
            alt=""
            className="h-[30px] md:h-[40px] rounded-full"
          />

          <ChevronDown
            size={20}
            color="white"
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div
            className="
              absolute
              right-0
              top-12
              md:top-14
              w-52
              bg-[#181A1C]
              border
              border-[#3E434A4F]
              rounded-lg
              shadow-xl
              overflow-hidden
              z-50
            "
          >
            <button className="w-full flex items-center gap-3 px-4 py-3 text-blue-500 hover:bg-[#22282A] transition">
              <User size={18} />
              Profil Saya
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-[#22282A] transition">
              <Star size={18} />
              Ubah Premium
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-[#22282A] transition">
              <LogOut size={18} />
              Keluar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
