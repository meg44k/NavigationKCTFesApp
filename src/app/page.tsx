// import Image from "next/image";
import Modelcanvas from "../features/3dmodel";

export default function Home() {
  return (
    <>
      <header className="absolute flex top-0 left-0 right-0 z-10 border-b-2 border-white	 text-white p-4">
          <h1 className="text-2xl font-bold">高専祭</h1>
      </header>
      <Modelcanvas></Modelcanvas>
    </>
      );
}
