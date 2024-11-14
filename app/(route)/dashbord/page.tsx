import AddResume from "@/components/custom/AddResume";
import ResumeCardItem from "@/components/custom/ResumeCardItem";
import resumeData from "@/data/dummy";
export default function DashBord() {
    const data = resumeData;
    return (
        <div className="p-10 md:px-20 lg:px-32 m-5">
            <div className="grid grid-cols-2 
        md:grid-cols-3 lg:grid-cols-4 mt-10 gap-2">
                <AddResume />
            <ResumeCardItem data ={data}/>
            </div>
        </div>
    )
}