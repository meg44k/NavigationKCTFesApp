import Reakt from "react";

export default function BackSquare5(props){
    return(
    <>
            <div className="backarea w-[170px] h-[170px] p-[10px] rounded-[15px] m-[10px] inline-block bg-red-100 ">
                <div className="classname text-2xl pb-[4px]">
                    {props.Class}
                </div>
                <div className='intro text-base break-normal'>
                    {props.Intro}
                </div>
            </div>
    </>
    );
}