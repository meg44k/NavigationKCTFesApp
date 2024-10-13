"use client";

import React, { useState } from "react";

import {Train_One} from "next/font/google"
import { Noto_Sans_JP } from "next/font/google";

import ClassList from "./Classlist";

const TrainOneFont = Train_One({
    weight: "400",
    subsets: ["latin"],
  });;

  const NotoSansJPFont = Noto_Sans_JP({
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
            <header className="absolute flex items-center justify-between top-0 left-0 right-0 z-10 border-b-2 border-white text-white p-4 bg-kct-black">
                <div className={`${TrainOneFont.className} text-2xl font-bold`}>
                    <a href="./main">
                        <span className="text-kct-yellow">高</span>
                        <span className="text-kct-red">専</span>
                        <span className="text-kct-blue">祭</span>
                    </a>
                </div>
                <div className="flex justify-stretch lg:w-1/2 iPhoneSE:w-3/5 w-56">
                    <div className="mr-4">
                        <a className={`${NotoSansJPFont.className} mr-2`} href="./">出し物一覧</a>
                        <a className={`${NotoSansJPFont.className} mx-2`} href="./">ライブナビ</a>
                    </div>
                    <div>
                        <button
                        id="button"
                        type="button"
                        className="fixed right-6 z-10 ml-4"
                        onClick={hamClicked}
                        >
                        {clicked ? (
                            <img className="w-6 h-6" src="./HamburgerBar.svg" alt="" />

                        ) : (
                            <img className="w-6 h-6" src="./cross.svg" alt="" />

                        )}
                        </button>
                    </div>
                </div>
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