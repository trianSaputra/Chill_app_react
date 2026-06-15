import LogoChill from "../assets/LogoChill.png";

export default function Footer() {
  return (
    <div className="border-t border-[#E7E3FC3B] mt-[40px] mb-[20px] flex md:flex-row flex-col justify-between p-[20px] md:p-[40px] text-white gap-4">
      <div>
        <img src={LogoChill} alt="" />
        <p>@2023 Chill All Rights Reserved.</p>
      </div>
      <div>
        <div className="">
          <h4 className="font-bold text-[16px] leading-[140%] tracking-[0.2px] text-white">
            Genre
          </h4>
        </div>
        <div className="flex gap-3 font-light text-[14px] md:text-[16px] leading-[140%] tracking-[0.2px] text-[#C1C2C4]">
          <div>
            <ul>
              <li>Aksi</li>
              <li>Anak-anak</li>
              <li>Anime</li>
              <li>Britania</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Drama</li>
              <li>Fantasi Ilmiah & Fantasi</li>
              <li>Kejahatan</li>
              <li>Kdrama</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Komedi</li>
              <li>Petualangan</li>
              <li>Perang</li>
              <li>Romantis</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h4 className="font-bold text-[16px] leading-[140%] tracking-[0.2px] text-white">
            Bantuan
          </h4>
        </div>
        <div className="flex gap-4 font-light text-[14px] md:text-[16px] leading-[140%] tracking-[0.2px] text-[#C1C2C4]">
          <ul>
            <li>FAQ</li>
            <li>Kontak Kami</li>
            <li>Privasi</li>
            <li>Syarat& dan Ketentuan</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
