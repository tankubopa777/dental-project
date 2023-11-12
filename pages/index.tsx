import Image from "next/image";
import Link from "next/link";
import UploadFile from "@/components/uploadFile";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // Full screen background
    <div className="bg-gradient-background h-screen">
      <div className=" grid grid-cols-2">
        <div className=" flex flex-col">
          <h1 className="text-white text-5xl font-normal leading-normal">
            Convolution  Neural Network for Dental Caries Classification
          </h1>
          <div className="text-white text-lg font-normal leading-normal">
            Convolutional Neural Network (CNN) technology designed to
            revolutionize the way dental caries (tooth decay) is detected and
            classified. Our system is engineered to provide rapid, accurate, and
            user-friendly detection and categorization of dental caries, from
            early onset to advanced decay, aiding you and your dentist to make
            the best-informed decisions for your dental treatments.
          </div>

          <div className="flex flex-row justify-between items-center mr-52 ml-52 space-x-20">
            <Link href="/predict/predict1">
              <button className="bg-white w-[351px] h-[51px] rounded-full">
                <div className="text-black text-custom font-bold leading-normal text-shadow">
                  START PREDICT
                </div>
              </button>
            </Link>

            <Link href="/tutorial/tutorial1">
              <button className="bg-white w-[351px] h-[51px] rounded-full">
                <div className="text-black text-custom font-bold leading-normal text-shadow">
                  TUTORIAL
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div>
          <Image
            src="/images/teeth.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex flex-row space-x-40 justify-center">
        {/* box1 */}
        <div className="bg-white w-[400px]">
          <h1 className="text-black">Privacy-Centric</h1>
          <p className="text-black text-custom font-light leading-normal text-shadow">
            Your privacy is paramount. All uploads are handled with the highest
            level of security and confidentiality.
          </p>
        </div>
        {/* box2 */}
        <div className="bg-white w-[400px]">
          <h1 className="text-black">Privacy-Centric</h1>
          <p className="text-black text-custom font-light leading-normal text-shadow">
            Your privacy is paramount. All uploads are handled with the highest
            level of security and confidentiality.
          </p>
        </div>
        {/* box3 */}
        <div className="bg-white w-[400px]">
          <h1 className="text-black">Privacy-Centric</h1>
          <p className="text-black text-custom font-light leading-normal text-shadow">
            Your privacy is paramount. All uploads are handled with the highest
            level of security and confidentiality.
          </p>
        </div>
      </div>
    </div>
  );
}
