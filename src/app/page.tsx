// import Image from "next/image";
// import Livenav from "@/features/Livenav";
import {useState} from 'react';

const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();

export function Schedule(props) {
  return (
    <div className="bg-white text-xl rounded-2xl mx-7 mb-5 p-2">
      <div className="mx-7">{props.time}</div>
      <div className="text-center">{props.name}</div>     
    </div>
  );
}

export function LiveDetail(props) {
  return(
    <div className="bg-yellow-300 border border-black mx-10 rounded-2xl">
      <ul className="flex border-b border-black ml-5 mr-5">
        <li className="py-2 pr-20 text-xl">{props.name}</li>
        <li className="text-xl"></li>
      </ul>
      <div className="py-2 pl-5 text-xl">バンドメンバー</div>
      <div className="py-2 pl-5 text-xl">コメント</div>
    </div>
  );
}

export default function Home() {
  return (
      <div className="bg-yellow-400 min-h-screen">
        <div className="pt-40"> 
          <LiveDetail name='豚汁’s'/>
        </div>
        <div className="text-2xl px-5 py-5"> 
          今行われているライブ
        </div>
        <Schedule time = '時間0' name = 'ライブ名0'/>
        <div className="text-2xl mx-5 my-5">
          スケジュール
        </div>
        <Schedule time = '時間1' name = 'ライブ名1'/>
        <Schedule time = '時間2' name = 'ライブ名2'/>
        <Schedule time = '時間3' name = 'ライブ名3'/>
        <Schedule time = '時間4' name = 'ライブ名4'/>
        <Schedule time = '時間5' name = 'ライブ名5'/>
      </div>
  );
}
