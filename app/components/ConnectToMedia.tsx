"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ConnectToMedia() {
  const [mediaType, setMediaType] = useState("image");

  return (
    <section className="bg-purple-300 p-16">
      {mediaType == "image" && <ImageTab />}
    </section>
  );
}

export function ImageTab() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      // Read the file and save it to local storage
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          // Assuming the file is an image, you can save it as a base64 string
          localStorage.setItem(file.name, e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="space-y-4">
      <h2 className="text-2xl">Connect to media</h2>
      <h3>File location</h3>
      <div className="flex justify-between">
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html">Local (upload files)</label>
          <input type="radio" id="css" name="fav_language" value="CSS" />
        <label htmlFor="css">URL Link</label>
      </div>

      <input type="file" onChange={handleFileChange} />

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => router.push("/image")}
          className="bg-purple-600 rounded-full px-4 py-2"
        >
          Start Stream Slide
        </button>
      </div>
    </form>
  );
}
