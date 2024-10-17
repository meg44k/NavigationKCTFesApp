import React from "react";

export default function BackSquare(props: {Class: string, Title:string ,Intro: string, BGColor: string}){
    return(
    <>
            <div className={`backarea w-[170px] h-[170px] p-[10px] rounded-[15px] m-[10px] inline-block bg-kct-black border-2 ${props.BGColor}`}>
                <div className="classname text-sm pb-[4px] text-white">
                    {props.Class}
                </div>
                <div className="text-base pb-[4px] font-bold text-white">
                    {props.Title}
                </div>
                <div className='intro text-[12px] break-normal text-white'>
                    {props.Intro}
                </div>
            </div>
    </>
    );
} 