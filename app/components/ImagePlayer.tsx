"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ImagePlayer({
  currentImage,
}: {
  currentImage: string;
}) {
  // be able to toggle between object-cover and object-contain
  const [fillScreen, setFillScreen] = useState(false);
  const router = useRouter();

  // const handleMouseEnter = (e) => {
  //   e.persist();
  //   e.target.style.opacity = 1;
  // };

  // const handleMouseLeave = (e) => {
  //   setTimeout(() => {
  //     e.target.style.opacity = 0;
  //   }, 1000);
  // };

  return (
    <div>
      <section
        id="settings"
        className="fixed w-full z-10 hover:bg-slate-500 opacity-0 hover:opacity-100 hover:cursor-auto text-white"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between items-center px-8 py-16">
          <h2 className="">Image settings</h2>
          <div className="flex space-x-4">
            <button
              className="hover:bg-slate-800 rounded-full py-2 px-4"
              onClick={() => setFillScreen(!fillScreen)}
            >
              Fill screen
            </button>
            <button className="hover:bg-slate-800 rounded-full py-2 px-4">
              Setting2
            </button>
            <button
              className="hover:bg-red-800 bg-red-600 rounded-full py-2 px-4"
              onClick={() => router.push("/")}
            >
              End
            </button>
          </div>
        </div>
      </section>

      <section className="h-auto w-screen pointer-events-none">
        <Image
          src={currentImage}
          // width={500}
          // height={500}
          fill
          alt="image slideshow"
          className={`${fillScreen ? "object-cover" : "object-contain"}`}
        />
      </section>
    </div>
  );
}
