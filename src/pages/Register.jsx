import Inputfield from "../components/Inputfield";
import registerBg from "../assets/registerBg.jpg";
import LogoChill from "../assets/LogoChill.png";
import Button from "../components/Button";

export default function Register() {
  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${registerBg})` }}
    >
      <div className="flex flex-col  justify-center bg-[#181A1CD6] max-w-md w-full h-fit border-solid rounded-md p-8 gap-4">
        <div className="flex flex-col items-center justify-center mb-4">
          <img src={LogoChill} alt="" className="w-auto h-[34px] mb-6" />
          <h3 className="font-bold text-white text-xl">Daftar</h3>
          <p className="text-white ">Selamat Datang !</p>
        </div>
        <Inputfield
          label="Username"
          name="Username"
          type="text"
          placeholder="Masukkan Username"
        />
        <Inputfield
          label="Password"
          name="password"
          type="password"
          placeholder="Masukkan Password"
        />
        <Inputfield
          label="Confirm Password"
          name="confirmpassword"
          type="password"
          placeholder="Masukkan Password"
        />
        <p className="text-[#C1C2C4] ">
          Sudah punya akun ?
          <a href="/login" className="text-[#ffffff]">
            Login
          </a>
        </p>
        <Button text="Daftar" variant="primary" />
        <p className="text-white text-center">Atau</p>
        <Button text="Daftar dengan Google" variant="google" />
      </div>
    </div>
  );
}
