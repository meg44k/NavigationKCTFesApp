import ClassList from "@/features/classList";
import ClubList from "@/features/clubList";

export default function Home(){
    return(
        <div>
            <ClassList grade={1}/>
            <ClassList grade={2}/>
            <ClassList grade={3}/>
            <ClassList grade={4}/>
            <ClassList grade={5}/>
            <ClubList/>
        </div>
    );
}