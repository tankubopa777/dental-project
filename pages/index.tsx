import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // Full screen background
    <div className="bg-gradient-background h-screen">
      {/* Navbar  */}
      <div>
        <Navbar />
      </div>
      <div className=" grid grid-cols-2">
        <div className=" flex flex-col">
          <h1 className="text-white text-5xl font-normal leading-normal">
            Convolution  Neural Network for Dental Caries Classification
          </h1>

          <div className="">
            <div className="text-white text-xl font-normal leading-normal">
              Convolutional Neural Network (CNN) technology designed to
              revolutionize the way dental caries (tooth decay) is detected and
              classified. Our system is engineered to provide rapid, accurate,
              and user-friendly detection and categorization of dental caries,
              from early onset to advanced decay, aiding you and your dentist to
              make the best-informed decisions for your dental treatments.
            </div>

            <div className=" flex flex-row space-x-2.5 justify-center">
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
        </div>

        <div className="flex items-center justify-center">
          <Image
            className=" flex rounded-2xl items-center justify-center"
            src="/image/dentistDoJob.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="flex flex-rows space-x-40 justify-center mt-10 ">
        {/* box1 */}
        <div className="bg-white w-[400px] h-[350px] rounded-xl">
          <h1 className="text-black text-2xl text-center mt-5">
            Privacy-Centric
          </h1>
          <p className="text-black text-xl font-light leading-normal text-shadow m-5">
            Your privacy is paramount. All uploads are handled with the highest
            level of security and confidentiality.
          </p>
          <div className="flex justify-center items-center">
            <Image
              className=" rounded-2xl items-center justify-center"
              src="/image/securityImage.png"
              alt="Picture of the author"
              width={200}
              height={200}
            />
          </div>
        </div>
        {/* box2 */}
        <div className="bg-white w-[400px] h-[350px] rounded-xl">
          <h1 className="text-black text-2xl text-center mt-5">
            Easy Accessibility
          </h1>
          <p className="text-black text-xl font-light leading-normal text-shadow m-5">
            Access our services from anywhere, anytime, with just an internet
            connection.
          </p>
          <div className="flex justify-center items-center">
            <Image
              className=" rounded-2xl items-center justify-center mt-5"
              src="/image/easyUse.png"
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </div>
        </div>
        {/* box3 */}
        <div className="bg-white w-[400px] h-[350px] rounded-xl">
          <h1 className="text-black text-2xl text-center mt-5">
            Support for Dental Professionals
          </h1>
          <p className="text-black text-xl font-light leading-normal text-shadow m-5">
            This website can serve as an adjunct tool for dentists, aiding in
            their diagnostic processes and ensuring a comprehensive approach to
            oral health care.
          </p>
          <div className="flex justify-center items-center">
            <Image
              className=" rounded-2xl items-center justify-center -mt-6"
              src="/image/dentistImage.png"
              alt="Picture of the author"
              width={160}
              height={160}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
