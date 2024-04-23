"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ImagePlayer() {
  // be able to toggle between object-cover and object-contain
  const [fillScreen, setFillScreen] = useState(false);
  const [transitionTime, setTransitionTime] = useState(4000);
  const [imageIndex, setImageIndex] = useState(0);
  const router = useRouter();

  // initialize empty array for local storage images
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Function to get all images from local storage
    const getImagesFromLocalStorage = () => {
      const localStorageImages: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if ((key && key.endsWith(".jpg")) || key.endsWith(".png")) {
          const image = localStorage.getItem(key);
          if (image) {
            localStorageImages.push(image);
          }
        }
      }
      return localStorageImages;
    };

    // Set images array from local storage
    setImages(getImagesFromLocalStorage());
  }, []);

  // demo placeholder images
  // const images = [
  //   "/pexels-joshsorenson-127513.jpg",
  //   "/pexels-pixabay-33109.jpg",
  //   "/pexels-pixabay-268966.jpg",
  //   "/pexels-steve-1269968.jpg",
  // ];

  let currentImage = images[imageIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, transitionTime);

    return () => clearInterval(interval);
  }, [transitionTime, images.length]);

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
          <div className="flex space-x-16">
            {/* fill screen option */}
            <button
              className="hover:underline"
              onClick={() => setFillScreen(!fillScreen)}
            >
              Fill screen
            </button>
            {/* manual change image */}

            {/* try using bootstrap in the below form > input group > for makign cleaner looking buttons */}
            {/* <form>
              <label htmlFor="text" className="form-label">
                Interval image
              </label>
              <div className="input-group">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setImageIndex(imageIndex - 1);
                  }}
                >
                  -
                </button>
                <div className="input-group-text">
                  {imageIndex + 1} of {images.length}
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setImageIndex(imageIndex + 1);
                  }}
                >
                  +
                </button>
              </div>
            </form> */}

            <div>
              <p>Interval image</p>
              <div className="flex justify-center space-x-4">
                <button
                  className="text-2xl hover:bg-slate-800 rounded-full px-2.5"
                  onClick={() => {
                    setImageIndex(imageIndex - 1);
                  }}
                >
                  -
                </button>
                <p className="pt-1">
                  {imageIndex + 1} of {images.length}
                </p>
                <button
                  className="text-2xl hover:bg-slate-800 rounded-full px-2"
                  onClick={() => {
                    setImageIndex(imageIndex + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            {/* interval speed setting */}
            <div className="">
              <p className="">Interval Speed</p>
              <div className="flex justify-center space-x-4">
                <button
                  className="text-2xl hover:bg-slate-800 rounded-full px-2.5"
                  onClick={() => {
                    setTransitionTime(transitionTime - 1000);
                  }}
                >
                  -
                </button>
                <p className="pt-1">{transitionTime / 1000}s</p>
                <button
                  className="text-2xl hover:bg-slate-800 rounded-full px-2"
                  onClick={() => {
                    setTransitionTime(transitionTime + +1000);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            {/* end slideshow */}
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
