import logo from "@/assets/images/logo.png";
import { Image } from "@mantine/core";
export default function Footer() {
  return (
    <div
      className="w-full h-48 text-white
   bg-[#f7f7f7] flex justify-center items-center"
    >
      <div className="w-1/2 flex justify-between items-center">
        <div className="w-[200px] text-black">
          <Image
            src={logo}
            alt="logo"
            width={200}
          />
        </div>
        <div>
          <ul className="text-[#888888]">
            <li>Hotline: 0334146207</li>
            <li>Liên hệ: 17130094@st.hcmuef.edu.vn</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
