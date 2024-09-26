"use client"

import { useState } from "react";
import Modelcanvas from "../features/3dmodel";

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const hamClicked = () => {
    setClicked(!clicked);
  }

  return (
    <>
      <header className="absolute flex top-0 left-0 right-0 z-10 border-b-2 border-white text-white p-4">
        <h1 className="text-2xl font-bold">高専祭</h1>
        <button
          id="button"
          type="button"
          className="fixed top-6 right-6 z-10"
          onClick={hamClicked}
        >
          {clicked ? (
            <h1 className="text-2xl font-bold">A</h1>
            // <svg
            //   xmlns="http://www.w3.org/2000/svg"
            //   viewBox="0 0 24 24"
            //   fill="white"
            //   width="24px"
            //   height="24px"
            // >
            //   <path d="M0 0h24v24H0z" fill="none" />
            //   <path d="M6 18L18 6M6 6l12 12" />
            // </svg>
          ) : (
            <h1 className="text-2xl font-bold">B</h1>

            // <svg
            //   xmlns="http://www.w3.org/2000/svg"
            //   viewBox="0 0 24 24"
            //   fill="white"
            //   width="24px"
            //   height="24px"
            // >
            //   <path d="M0 0h24v24H0z" fill="none" />
            //   <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            // </svg>
          )}

        </button>
      </header>
      <Modelcanvas></Modelcanvas>
    </>
  );
}