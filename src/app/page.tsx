import {Train_One} from "next/font/google"
import {BIZ_UDMincho} from "next/font/google" 

const TrainOneFont = Train_One({
    weight: "400",
    subsets: ["latin"],
  });;

const BIZUDMinchoFont = BIZ_UDMincho({
    weight: "400",
    subsets: ["latin"],
  });;

export default function Home() {
  return (
    <>
      <a href="./main">
        <div className="grid w-screen h-screen bg-kct-black place-content-center ">
          <div className="w-80 h-44 border-y-2 border-white py-4 m-10">
            <div className="flex flex-col justify-between items-center w-full h-full">
              <div className={`${BIZUDMinchoFont.className} flex justify-between text-white w-full`}><span>北</span><span>九</span><span>州</span><span>高</span><span>専</span></div>
              <div className={`${TrainOneFont.className} flex justify-between text-white w-full text-8xl`}>
                <span className="text-kct-yellow">高</span>
                <span className="text-kct-red">専</span>
                <span className="text-kct-blue">祭</span></div>
            </div>
          </div>
        {/* <span className="text-white flex justify-center text-xl"> &gt;&gt; 画面をタップ &lt;&lt;</span> */}
        </div>
      </a>
    </>
  );
}