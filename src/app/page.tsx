"use-client"
import Image from "next/image";
const Page: React.FC = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <video className="w-screen h-screen  absolute top-0 left-0 -z-10" preload="auto" muted={false}  autoPlay loop playsInline>
        <source src="/assets/intense.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image
      className="w-[100px] h-[60px] sm:w-[200px] sm:h-[133px] absolute z-50 top-0 left-0"
      src="/assets/pakistan.png"
      width={200}
      height={132}
      alt="Pakistan"
      /><Image
      className="w-[100px] h-[60px] sm:w-[200px] sm:h-[133px] absolute z-50 top-0 right-0"
      src="/assets/palestine.jpeg"
      width={200}
      height={132}
      alt="Palestine"
      />
      <div className="w-full h-full absolute z-40 top-0 left-0 bg-myWhite"></div>
      <Image
      className="w-full h-full absolute z-30 top-0 left-0"
      src="/assets/paper.jpg"
      width={250}
      height={140}
      alt="Pakistanify"
      />
      <div className="relative w-screen h-screen flex z-50 items-center justify-center flex-col gap-10"
      >
        <Image
      className="w-[200px] h-[80px]  sm:w-[240px] sm:h-[100px] md:w-[260px] md:h-[120px]  "
      src="/assets/logo.png"
      width={250}
      height={140}
      alt="Pakistanify"
      />
      <p className="myshadow w-10/12 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-widest text-center text-primary font-bold">
      SUPPORTING OUR PALESTINIAN BROTHERS AND SISTERS BY EMPOWERING LOCAL AND BOYCOTTING ISRAELI PRODUCTS.</p>
<p className="w-fit text-sm sm:text-lg md:text-xl lg:text-2xl text-center bg-primary text-white px-6 py-3 rounded-md font-bold">COMING SOON</p>
      </div>
    </div>
  );
};

export default Page;
