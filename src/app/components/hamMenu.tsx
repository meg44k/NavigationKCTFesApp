import ClassList from "./Classlist";

function hamMenu() {
  return (
    <div className="absolute border-l-2 border-white right-0 md:w-1/4 w-1/3 h-screen backdrop-blur-sm bg-black/20 z-40">
      <div className="pt-20">
          <ClassList grade={1}/>
          <ClassList grade={2}/>
          <ClassList grade={3}/>
          <ClassList grade={4}/>
          <ClassList grade={5}/>
      </div>
      <div className="m-2 bottom-0">
        <a href="/credit" className="text-white">クレジット</a>
      </div>
  </div>
  );
}

export default hamMenu;