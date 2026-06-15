import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Inputfield({ label, name, type, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword && type === "password" ? "text" : type;
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-white font-medium text-[16px]/[140%] tracking-[0.2px ] mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType}
          name={name}
          placeholder={placeholder}
          id={label}
          className="w-full border border-[#E7E3FC] rounded-[24px] h-[42px] px-[20px] py-[14px] text-[#C1C2C4]"
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}
