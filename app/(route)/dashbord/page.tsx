import AddResume from "@/app/components/AddResume";

export default function DashBord() {
    return (
        <div className="p-10 md:px-20 lg:px-32 m-5">
            <div className="grid grid-cols-2
        md:grid-cols-3 lg:grid-cols-4 mt-10 ">
                <AddResume />
            </div>
        </div>
    )
}