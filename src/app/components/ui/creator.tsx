import React from "react";

export default function Creator(props: {creatorname?: string, position:string}){
    return(
        <>
        <div className="w-full pt-[20px] flex flex-row">
            <div className="pl-[10px] text-3xl">
                <span className="underline">{props.creatorname}</span><br/><span className="text-lg pl-[20px]">{props.position}</span>
            </div>
            {/* <div className="text-lg mt-1 ">
                {props.position}
            </div> */}
        </div>
        </>
    );}