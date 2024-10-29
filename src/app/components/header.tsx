"use client";

import React, { useState } from "react";

import {Train_One} from "next/font/google"
import { Noto_Sans_JP } from "next/font/google";

import HamMenu from "./hamMenu";

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
    const [hamFirst, setHamFirst] = useState(true);
    const doNotFirst = () => {
        if (hamFirst == true){
            setHamFirst(!hamFirst)
        }
    }
    const hamMenuFanc = () => {
        hamClicked()
        doNotFirst()
    }

    return(
        <>
            <div className="fixed top-0 left-0 w-full z-50 ">
                <header className="absolute flex items-center justify-between top-0 left-0 right-0 border-b-2 border-white text-white p-4 bg-kct-black">
                    <div className={`${TrainOneFont.className} text-2xl font-bold`}>
                        <a href="./main">
                            <span className="text-kct-yellow">高</span>
                            <span className="text-kct-red">専</span>
                            <span className="text-kct-blue">祭</span>
                        </a>
                    </div>
                    <div className="flex justify-stretch lg:w-1/2 iPhoneSE:w-3/5 w-56">
                        <div className="mr-4">
                            <a className={`${NotoSansJPFont.className} mr-2`} href="./intro">出し物一覧</a>
                            <a className={`${NotoSansJPFont.className} mx-2`} href="./livenav">ライブナビ</a>
                        </div>
                        <div>
                            <button
                            id="button"
                            type="button"
                            className="fixed right-6 z-10 ml-4"
                            onClick={hamMenuFanc}
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
            </div>
            {clicked ? (
                hamFirst ? (
                    <></>
                    ):(
                        <>
                            <div className="animate-scale-down-hor-right">
                                <HamMenu/>
                            </div>
                        </>
                    )
                        
                ) : (
                    <>
                        <div className="animate-scale-up-hor-right">
                            <HamMenu/>
                        </div>
                    </>
                )}
                
        </>
    );
}