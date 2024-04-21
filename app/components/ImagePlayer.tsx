import Image from "next/image";

export default function ImagePlayer() {
  let currentImage = "/pexels-joshsorenson-127513.jpg";

  // be able to toggle between object-cover and object-contain

  return (
    <section className="h-auto w-screen">
      <Image
        src={currentImage}
        // width={500}
        // height={500}
        fill
        alt="image slideshow"
        className="object-contain bg-black"
      />
    </section>
  );
}
