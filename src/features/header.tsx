"use client";

import React, { useState } from "react";

import {Train_One} from "next/font/google"

import ClassList from "./Classlist";

const TrainOneFont = Train_One({
    weight: "400",
    subsets: ["latin"],
  });;

export default function Header() {
    const [clicked, setClicked] = useState(true);
    const hamClicked = () => {
    setClicked(!clicked);
    }
    return(
        <>
            <header className="absolute flex items-center top-0 left-0 right-0 z-10 border-b-2 border-white text-white p-4 bg-kct-black">
                <div className={`${TrainOneFont.className} text-2xl font-bold`}>
                    <a href="https://kitakyushu-kosen-fes.vercel.app/main">
                        <span className="text-kct-yellow">高</span>
                        <span className="text-kct-red">専</span>
                        <span className="text-kct-blue">祭</span>
                    </a>
                </div>
                {/* TODO ここにライブナビ、 */}
                <div></div> 
                <button
                id="button"
                type="button"
                className="fixed right-6 z-10"
                onClick={hamClicked}
                >
                {clicked ? (
                    <img className="w-6 h-6" src="./HamburgerBar.svg" alt="" />

                ) : (
                    <img className="w-6 h-6" src="./cross.svg" alt="" />

                )}
                </button>
            </header>
            {clicked ? (
                    <div></div>
                ) : (
                    <>
                        <div className="absolute border-l-2 border-white right-0 md:w-1/4 w-1/3 h-screen backdrop-blur-sm bg-black/20">
                            <div className="pt-20">
                                <ClassList grade={1}/>
                                <ClassList grade={2}/>
                                <ClassList grade={3}/>
                                <ClassList grade={4}/>
                                <ClassList grade={5}/>
                            </div>
                        </div>
                    </>
                )}

        </>
    );
}