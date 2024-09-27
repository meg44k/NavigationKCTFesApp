"use client"

import { useState } from "react";
import Modelcanvas from "@/features/3dmodel";

import {Train_One} from "next/font/google"

const TrainOneFont = Train_One({
  weight: "400",
  subsets: ["latin"],
});;

export default function Main() {
  const [clicked, setClicked] = useState(false);
  const hamClicked = () => {
    setClicked(!clicked);
  }

  return (
    <>
      <header className="absolute flex top-0 left-0 right-0 z-10 border-b-2 border-white text-white p-4">
        <div className={`${TrainOneFont.className} text-2xl font-bold`}>
          <span className="text-kct-yellow">高</span>
          <span className="text-kct-red">専</span>
          <span className="text-kct-blue">祭</span>
        </div>
        <button
          id="button"
          type="button"
          className="fixed top-6 right-6 z-10"
          onClick={hamClicked}
        >
          {clicked ? (
            <h1 className="text-2xl font-bold">A</h1>

          ) : (
            <h1 className="text-2xl font-bold">B</h1>

          )}

        </button>
      </header>
      <Modelcanvas></Modelcanvas>
    </>
  );
}