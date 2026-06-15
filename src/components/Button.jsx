import googleIcon from "../assets/google.png";

export default function Button({ text, type = "button", variant = "primary" }) {
  const buttonStyles = {
    primary:
      "cursor-pointer w-full text-white border border-[#E7E3FC] hover:bg-[#3D4142] rounded-full h-[42px] ",
    google:
      "cursor-pointer w-full bg-[#ffffff] text-black rounded-full flex item-center justify-center h-[42px] p-2 gap-2",
  };

  return (
    <button type={type} className={buttonStyles[variant]}>
      <div className="flex items-center justify-center">
        {variant === "google" && <img src={googleIcon} className="h-5" />}
      </div>
      {text}
    </button>
  );
}
