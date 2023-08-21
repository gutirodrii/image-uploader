"use client"
import Image from "next/image";
import { fonts } from "./layout";
import { useState } from "react";
import Uploader from "@/components/Uploader";
import Uploading from "@/components/Uploading";
import Uploaded from "@/components/Uploaded";

export default function Home() {
  const [view, setView] = useState<number>(0)

  const changeView = () => {
    setView(view === 2 ? 0 : view + 1)
  }
  return (
    <main className="min-h-screen">
      <div className="absolute top-3 inset-x-0 flex justify-center">
        <button className="items-center blue-1 p-2 rounded-md" onClick={changeView}>
          <p className="text-white">Change view</p>
        </button>
      </div>
      {view === 0 && <Uploader />}
      {view === 1 && <Uploading />}
      {view === 2 && <Uploaded />}
      <footer className="fixed inset-x-0 bottom-10 montserrat font-medium text-footer">
        <div className="flex justify-center">
          created by &nbsp;
          <a
            href="https://github.com/gutirodrii"
            className="montserrat font-bold underline"
          >
            gutirodrii
          </a>
          &nbsp;- devChallenges.io
        </div>
      </footer>
    </main>
  );
}
