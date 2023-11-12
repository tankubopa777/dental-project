import Image from "next/image";
import { Inter } from "next/font/google";
import UploadFile from "@/components/uploadFile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // Full screen background
    <div className="bg-gradient-background h-screen">
      {/* make center uploadfile  */}
      <div className="flex flex-row justify-center items-center">
        <UploadFile />
      </div>
    </div>
  );
}
