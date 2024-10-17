"use client";
// import Image from "next/image";

import {useState, useEffect} from 'react';
import { defTeam, band, team2} from '@/features/Teams';
import {day1, day2} from '@/features/Lives';

export function CurrentLive({live,setTeam,showDetail}:{live:{name:string,startTime:string},setTeam: () => void,showDetail: () => void}) {
    const setDetail = () => {
        setTeam();
        showDetail();
    };
    return (
        <div className="flex justify-center">
            <button type="button" onClick={setDetail} className="shadow-inner bg-white text-xl rounded-2xl w-11/12 mb-5 p-2 z-2">
                <div className="ml-2 text-left">{live.startTime}~</div>
                <div className="text-center">{live.name}</div>     
            </button>
        </div>
    );
}

export function Schedule({live,setTeam,showDetail}:{live:{name:string,startTime:string},setTeam: () => void,showDetail: () => void}) {
    const setDetail = () => {
        setTeam();
        showDetail();
    };
    return (
        <div className="flex justify-center">
            <button type="button" onClick={setDetail} className="shadow-inner bg-white text-xl rounded-2xl w-11/12 mb-5 p-2 z-2">
                <div className="ml-2 text-left">{live.startTime}~</div>
                <div className="text-center">{live.name}</div>     
            </button>
        </div>
    );
}

export function LiveDetail({team,hideDetail}:{team:{name:string,startTime:string,teams:string[]}, hideDetail: () => void}) {
    return(
            <div className="fixed inset-0 flex items-center justify-center bg-slate-50/70 backdrop-blur-md z-10">
                <div className="bg-yellow-300/70 backdrop-blur-md shadow-2xl w-11/12 max-w-md border border-black absolute rounded-2xl">
                    <div className="flex border-b border-black justify-between mx-3">
                        <div className="font-semibold py-2 text-2xl inline">{team.name}</div>
                        <button  type="button" onClick={hideDetail} className="w-6 h-6 pt-3">
                            <img src="/BlackCross.svg" alt="Icon"/>
                        </button>
                    </div>
                    <div className="font-semibold py-2 pl-3 pr-28 text-2xl">出場チーム</div>
                    <ul className="mb-3">
                        {team.teams.map((team , index) => (
                            <li key={index} className="pl-8 text-xl mb-2">
                                <button type="button">{team}</button>   
                            </li>
                        ))}
                    </ul>
                    {/* <div className=" font-semibold py-2 pl-5 text-2xl">コメント</div>
                    <div className="pb-2 pl-8 text-xl">{team.comment}</div> */}
                </div>
            </div>
    );
}

export default function Home(){
    const [detailIsVisible, setDetailIsVisible] = useState(false);
    // const [liveIsVisible,setLiveIsVisible] = useState(false);
    const [team,setTeam] = useState(day1.brassBand);
    const [currentTime,setCurrentTime] = useState(new Date());

    useEffect (() => {
        const timer = setInterval(() => setCurrentTime(new Date()),60000);
        return () => clearInterval(timer);
    },[]);

    const isCurrentLiveVisible = (startTimeInt: number,endTimeInt: number, date: string): boolean => {
        const now = new Date();
        const currentDate = now.getDate();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentTimeInt = currentHour*100+currentMinute
    
        return String(currentDate) === date && (startTimeInt <= currentTimeInt && currentTimeInt<= endTimeInt);
    };
    
    const isScheduleVisible = (startTimeInt: number, date: string): boolean => {
        const now = new Date();
        const currentDate = now.getDate();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentTimeInt = currentHour*100+currentMinute
    
        return String(currentDate) === date && (currentTimeInt < startTimeInt);
    };

    return (
        <>
            <div className="bg-yellow-400 absolute w-full min-h-full overflow-hidden z-5">
                <div> 
                    {detailIsVisible && <LiveDetail team={team} hideDetail={() => setDetailIsVisible(false)}/>}
                </div>
                <div className='ml-2 mt-16'>※当日の時間変更には対応していません</div>
                <div className='ml-2'>※表示の切り替えが少し遅れる場合があります</div>
                <div className="font-semibold text-2xl px-5 py-5"> 
                    今行われているライブ
                </div>
                {/* 1日目 */}
                {isCurrentLiveVisible(day1.brassBand.startTimeInt,day1.brassBand.endTimeInt,day1.brassBand.date) && (
                    <CurrentLive live = {day1.brassBand} setTeam={() => setTeam(day1.brassBand)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isCurrentLiveVisible(day1.live1.startTimeInt,day1.live1.endTimeInt,day1.live1.date) && (
                    <CurrentLive live = {day1.live1} setTeam={() => setTeam(day1.live1)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isCurrentLiveVisible(day1.nOne.startTimeInt,day1.nOne.endTimeInt,day1.nOne.date) && (
                    <CurrentLive live = {day1.nOne} setTeam={() => setTeam(day1.nOne)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isCurrentLiveVisible(day1.calm1.startTimeInt,day1.calm1.endTimeInt,day1.calm1.date) && (
                    <CurrentLive live = {day1.calm1} setTeam={() => setTeam(day1.calm1)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isCurrentLiveVisible(day1.calm2.startTimeInt,day1.calm2.endTimeInt,day1.calm2.date) && (
                    <CurrentLive live = {day1.calm2} setTeam={() => setTeam(day1.calm2)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isCurrentLiveVisible(day1.calm3.startTimeInt,day1.calm3.endTimeInt,day1.calm3.date) && (
                    <CurrentLive live = {day1.calm3} setTeam={() => setTeam(day1.calm3)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isCurrentLiveVisible(day1.marioKart.startTimeInt,day1.marioKart.endTimeInt,day1.marioKart.date) && (
                    <CurrentLive live = {day1.marioKart} setTeam={() => setTeam(day1.marioKart)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isCurrentLiveVisible(day1.live2.startTimeInt,day1.live2.endTimeInt,day1.live2.date) && (
                    <CurrentLive live = {day1.live2} setTeam={() => setTeam(day1.live2)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isCurrentLiveVisible(day1.lottery.startTimeInt,day1.lottery.endTimeInt,day1.lottery.date) && (
                    <CurrentLive live = {day1.lottery} setTeam={() => setTeam(day1.lottery)} showDetail={() => setDetailIsVisible(true)} />
                )}

                {/* 2日目 */}
                {isCurrentLiveVisible(day2.live3.startTimeInt,day2.live3.endTimeInt,day2.live3.date) && (
                    <CurrentLive live = {day2.live3} setTeam={() => setTeam(day2.live3)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isCurrentLiveVisible(day2.calmFinal.startTimeInt,day2.calmFinal.endTimeInt,day2.calmFinal.date) && (
                    <CurrentLive live = {day2.calmFinal} setTeam={() => setTeam(day2.calmFinal)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isCurrentLiveVisible(day2.quiz.startTimeInt,day2.quiz.endTimeInt,day2.quiz.date) && (
                    <CurrentLive live = {day2.quiz} setTeam={() => setTeam(day2.quiz)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isCurrentLiveVisible(day2.live4.startTimeInt,day2.live4.endTimeInt,day2.live4.date) && (
                    <CurrentLive live = {day2.live4} setTeam={() => setTeam(day2.live4)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isCurrentLiveVisible(day2.result.startTimeInt,day2.result.endTimeInt,day2.result.date) && (
                    <CurrentLive live = {day2.result} setTeam={() => setTeam(day2.result)} showDetail={() => setDetailIsVisible(true)} />
                )}
                <div className="font-semibold text-2xl mx-5 my-5">
                    スケジュール
                </div>
                {/* 1日目 */}
                {isScheduleVisible(day1.brassBand.startTimeInt,day1.brassBand.date) && (
                    <Schedule live = {day1.brassBand} setTeam={() => setTeam(day1.brassBand)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isScheduleVisible(day1.live1.startTimeInt,day1.live1.date) && (
                    <Schedule live = {day1.live1} setTeam={() => setTeam(day1.live1)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isScheduleVisible(day1.nOne.startTimeInt,day1.nOne.date) && (
                    <Schedule live = {day1.nOne} setTeam={() => setTeam(day1.nOne)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isScheduleVisible(day1.calm1.startTimeInt,day1.calm1.date) && (
                    <Schedule live = {day1.calm1} setTeam={() => setTeam(day1.calm1)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isScheduleVisible(day1.calm2.startTimeInt,day1.calm2.date) && (
                    <Schedule live = {day1.calm2} setTeam={() => setTeam(day1.calm2)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isScheduleVisible(day1.calm3.startTimeInt,day1.calm3.date) && (
                    <Schedule live = {day1.calm3} setTeam={() => setTeam(day1.calm3)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isScheduleVisible(day1.marioKart.startTimeInt,day1.marioKart.date) && (
                    <Schedule live = {day1.marioKart} setTeam={() => setTeam(day1.marioKart)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isScheduleVisible(day1.live2.startTimeInt,day1.live2.date) && (
                    <Schedule live = {day1.live2} setTeam={() => setTeam(day1.live2)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isScheduleVisible(day1.lottery.startTimeInt,day1.lottery.date) && (
                    <Schedule live = {day1.lottery} setTeam={() => setTeam(day1.lottery)} showDetail={() => setDetailIsVisible(true)} />
                )}

                {/* 2日目 */}
                {isScheduleVisible(day2.live3.startTimeInt,day2.live3.date) && (
                    <Schedule live = {day2.live3} setTeam={() => setTeam(day2.live3)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isScheduleVisible(day2.calmFinal.startTimeInt,day2.calmFinal.date) && (
                    <Schedule live = {day2.calmFinal} setTeam={() => setTeam(day2.calmFinal)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isScheduleVisible(day2.quiz.startTimeInt,day2.quiz.date) && (
                    <Schedule live = {day2.quiz} setTeam={() => setTeam(day2.quiz)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isScheduleVisible(day2.live4.startTimeInt,day2.live4.date) && (
                    <Schedule live = {day2.live4} setTeam={() => setTeam(day2.live4)} showDetail={() => setDetailIsVisible(true)} />
                )}
                {isScheduleVisible(day2.result.startTimeInt,day2.result.date) && (
                    <Schedule live = {day2.result} setTeam={() => setTeam(day2.result)} showDetail={() => setDetailIsVisible(true)} />
                )}
            </div>
        </>
    );
}