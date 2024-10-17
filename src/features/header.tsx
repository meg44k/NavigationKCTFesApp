"use client";

import React, { useState } from "react";

import {Train_One} from "next/font/google"

const TrainOneFont = Train_One({
    weight: "400",
    subsets: ["latin"],
  });;

export default function Header() {
    const [clicked, setClicked] = useState(false);
    const hamClicked = () => {
    setClicked(!clicked);
    }
    return(
        <>
            <header className="fixed flex top-0 left-0 right-0 z-10 border-b-2 border-white text-white p-4 bg-kct-black">
                <div className={`${TrainOneFont.className} text-2xl font-bold`}>
                    <span className="text-kct-yellow">高</span>
                    <span className="text-kct-red">専</span>
                    <span className="text-kct-blue">祭</span>
                </div>
                <button
                id="button"
                type="button"
                className="fixed right-6 z-10"
                onClick={hamClicked}
                >
                {clicked ? (
                    <h1 className="text-2xl font-bold">A</h1>

                ) : (
                    <h1 className="text-2xl font-bold">B</h1>

                )}

                </button>
            </header>
        </>
    );
}