// import Image from "next/image";
// import Livenav from "@/features/Livenav";
import Teams from "@/features/Teams";
import {useState} from 'react';
import Image from 'next/image';

const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();

const team1 = {
  name : '豚汁’s',
  member : ['木谷佑磨','藤本陽向','占部千馬','冨崎和音']
}


export function Schedule(props) {
  return (
    <div className="bg-white text-xl rounded-2xl mx-7 mb-5 p-2">
      <div className="mx-2">{props.time}</div>
      <div className="text-center">{props.name}</div>     
    </div>
  );
}

export function LiveDetail(props) {
  return(
    <div className="bg-yellow-300 border border-black mx-10 rounded-2xl">
      <ul className="flex border-b border-black justify-between mx-5">
        <li className="py-2 text-xl">{props.team.name}</li>
        <li className="w-6 h-6 pt-3"><img src="/BlackCross.svg" alt="Icon"/></li>
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
          <LiveDetail team={team1}/>
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
