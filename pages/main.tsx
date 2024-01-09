import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Transition from "@/components/Transitions";

// import HoverCard from "@/components/HoverCard";
// import Modal from "@/components/Modal";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // Full screen background
    <div className="bg-gradient-background h-full ">
      <Transition />
      {/* Navbar  */}
      <div>
        <Navbar />
      </div>
      <div className=" lg:grid lg:grid-cols-2">
        <div className=" flex flex-col ml-20">
          <motion.h1
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-white text-5xl font-normal leading-normal ">
            Convolution  Neural Network for Dental Caries Classification
          </motion.h1>

          <motion.div 
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="">
            <div className="text-white text-xl font-normal leading-normal">
              Convolutional Neural Network (CNN) technology designed to
              revolutionize the way dental caries (tooth decay) is detected and
              classified. Our system is engineered to provide rapid, accurate,
              and user-friendly detection and categorization of dental caries,
              from early onset to advanced decay, aiding you and your dentist to
              make the best-informed decisions for your dental treatments.
            </div>

            <div className=" flex flex-row space-x-10 justify-center mt-5">
              <Link href="/predict/predict1">
                <button className="bg-white w-[300px] h-[51px] rounded-full shadow-white shadow-sm ">
                  <div className="text-black text-custom font-bold leading-normal text-shadow">
                    START PREDICT
                  </div>
                </button>
              </Link>

              <Link href="/tutorial/tutorial1">
                <button className="bg-white w-[300px] h-[51px] rounded-full shadow-white shadow-sm">
                  <div className="text-black text-custom font-bold leading-normal text-shadow">
                    TUTORIAL
                  </div>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            className=" rounded-2xl items-center justify-center hidden lg:flex "
            src="/image/dentistDoJob.png"
            alt="Picture of the author"
            width={500}
            height={500}

          />
        </div>
      </div>
      <div className=" grid-cols-10 ">
      <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className=" col-span-9 md:grid md:grid-cols-2 xl:flex xl:flex-rows space-x-28 justify-center mt-10 ml-20 mr-20 ">
        {/* box1 */}
        <div className="bg-white w-[350px] h-[280px] rounded-3xl shadow-white shadow-lg bg-opacity-70 mb-10">
          <h1 className="text-black text-2xl text-center mt-5 opacity-100">
            Privacy-Centric
          </h1>
          <p className="text-black text-base font-light leading-normal text-shadow m-5">
            Your privacy is paramount. All uploads are handled with the highest
            level of security and confidentiality.
          </p>
          <div className="flex justify-center items-center">
            <Image
              className=" rounded-2xl items-center justify-center"
              src="/image/cyberImage.png"
              alt="Picture of the author"
              width={130}
              height={130}
            />
          </div>
        </div>
        {/* box2 */}
        <div className="bg-white w-[350px] h-[280px] rounded-3xl shadow-white shadow-lg bg-opacity-70">
          <h1 className="text-black text-2xl text-center mt-5">
            Easy Accessibility
          </h1>
          <p className="text-black text-base font-light leading-normal text-shadow m-5">
            Access our services from anywhere, anytime, with just an internet
            connection.
          </p>
          <div className="flex justify-center items-center">
            <Image
              className=" rounded-2xl items-center justify-center mt-5"
              src="/image/easyUse.png"
              alt="Picture of the author"
              width={90}
              height={90}
            />
          </div>
        </div>
        {/* box3 */}
        <div className="bg-white w-[350px] h-[280px] rounded-3xl shadow-white shadow-lg bg-opacity-70">
          <h1 className="text-black text-2xl text-center mt-5">
            Support for Dental 
          </h1>
          <p className="text-black text-base font-light leading-normal text-shadow mt-5 ml-5 mr-5 mb-7">
            This website can serve as an adjunct tool for dentists, aiding in
            their diagnostic processes and ensuring a comprehensive approach to
            oral health care.
          </p>
          <div className="flex justify-center items-center">
            <Image
              className=" rounded-2xl items-center justify-center -mt-6"
              src="/image/dentistImage.png"
              alt="Picture of the author"
              width={90}
              height={90}
            />
          </div>
        </div>

        <div className=" flex justify-end items-end right-24">
          <Image
              className=" "
              src="/image/tooth.png"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
          </motion.div>
        {/* <div>
          <HoverCard
            title={"Support for Dental Professionals"}
            message={
              "This website can serve as an adjunct tool for dentists, aiding in their diagnostic processes and ensuring a comprehensive approach to oral health care."
            }
          />
        </div> */}
        {/* <Modal /> */}
      </div>
    </div>
  );
}
