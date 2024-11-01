"use client"

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useState } from 'react';

import { TrainOneFont } from '@/../utils/fonts';
import Header from "@/app/components/headerMain";
import Modelcanvas from "@/app/components/3dmodel";

export default function Main() {
  const [clicked, setClicked] = useState(false);
  const mapSwitchClicked = () => {
  setClicked(!clicked);
  }
  return (
    <>
      <Analytics />
      <SpeedInsights />

      <label className="absolute right-0 top-20 mr-2 inline-flex items-center cursor-pointer z-25">
          <span className="ms-3 m-2 text-md font-medium text-white">3D</span>
          <input type="checkbox" value="" className="sr-only peer" onClick={mapSwitchClicked}/>
          <div className="relative w-11 h-6 bg-kct-black rounded-full peer ring-2 ring-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-kct-black"></div>
          <span className="ms-3 text-md font-medium text-white dark:text-gray-300">2D</span>
      </label>
      <Header></Header>
      {clicked ? (
          <div className='flex flex-col bg-kct-black w-screen h-[2000px] p-2'>
            <span className={`${ TrainOneFont.className } text-4xl mt-20 m-2 text-white`}>校内マップ</span>
            <img src="KCTFesMap.png" alt="KCTFesMap" className='mt-2'/>
            <span className={`${ TrainOneFont.className } text-4xl mt-2 m-2 text-white`}>バザーマップ</span>
            <img src="KCTFesBazaarMap.png" alt="KCTFesBazaarMap" className='mt-2'/>
          </div>
        ) : (
          <div></div>
        )}
        <Modelcanvas></Modelcanvas>
    </>
  );
}