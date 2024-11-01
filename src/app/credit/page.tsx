import React from 'react';
import Header from "@/app/components/header";
import Creator from '@/app/components/ui/creator';
import { TrainOneFont } from '@/../utils/fonts';

export default function Credit(){
    return(
        <>
        <div className='main bg-kct-black flex flex-wrap pt-[70px] pb-[40px] px-4'>
        <Header />
        <div className={` Name text-4xl  w-full p-[2%] text-white`}>
            <span className={`${TrainOneFont.className} text-kct-yellow`}>
                Creator
            </span>
            <Creator
                creatorname="山田 優吾"
                position='リーダー / デザイン / 3Dモデル /　　　 サイト作成全般'
            />
            <Creator
                creatorname="木谷 佑摩"
                position='3Dマップ上の教室等の位置表示機能の組み込み ドロップダウンメニューの作成'
            />
            <Creator
                creatorname="吉本 佳祐"
                position='出し物一覧・クレジットページ作成'
            />
            <Creator
                creatorname="渡邊 空登"
                position='ライブナビ作成 アニメーションの作成'
            />
        </div>
        <div className='${TrainOneFont.className} Name text-4xl  w-full p-[2%] text-white'>
            <span className={`${TrainOneFont.className} text-kct-red`}>
                Special thanks!
            </span>
        <Creator
            creatorname="Haruto Yoshino"
            position='Project Consultant & Creative Contributor & Special Contributor'
        />
        <Creator
            creatorname="いりえ きみと"
            position='アドバイザー兼サポートスタッフ兼リサーチャー 作成なし'
        />
        </div>
        {/* <div className='${TrainOneFont.className} Name text-4xl  w-full p-[2%] text-white'>
        <span className={`${TrainOneFont.className} text-kct-blue`}>Sponsor</span>
        <ul className='sponser list-disc text-white text-base pt-[10px] pl-[5%]'>
            <li>株式会社城島高原オペレーションズ城島高原パーク</li>
            <li>株式会社ロッテホールディングス</li>
            <li>北九州市いのちのたび博物館</li>
            <li>T.ジョイリバーウォーク北九州</li>
            <li>BOSS E・ZO FU-KUOKA</li>
            <li>株式会社ザザホラヤ</li>
            <li>本庄天然温泉 おとぎの杜</li>
            <li>グリーンランドリゾート株式会社</li>
            <li>到津の森公園</li>
            <li>株式会社コロナワールド小倉</li>
            <li>株式会社名門大津フェリー</li>
            <li>シャボン玉石けん株式会社</li>
            <li>株式会社サンリオエンターテイメント</li>
            <li>桃園シティボウル</li>
            <li>バイオパーク株式会社</li>
            <li>NEJI CHOCO LABORATORY</li>
            <li>株式会社 千鳥饅頭総本舗</li>
            <li>株式会社 ローソン.ユナイテッドシネマCINEPLEX小倉</li>
            <li>照葉スパリゾート門司</li>
            <li>大塚製薬株式会社</li>
            <li>株式会社しんこう</li>
            <li>阪九フェリー株式会社</li>
            <li>北九州市立美術館</li>
        </ul>
        </div> */}
        <div className='${TrainOneFont.className} Name text-3xl  w-full p-[2%] text-white'>
        <span className={`${TrainOneFont.className} text-kct-blue`}>
             Notes
        </span>
        </div>
        <div className='"text-lg pl-[5%] text-white'>3DマップにはMinecraftを使用しました </div>
        </div>
        </>
    );
}