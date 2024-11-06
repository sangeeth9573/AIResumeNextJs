"use client"
import { PlusSquare } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { MouseEventHandler, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function () {
    const [openDailog,setOpenDailog]=useState(false);
    return (
        <div>
            <div className="p-7 py-24 border flex items-center 
            justify-center bg-stone-100 rounded-lg h-[280px] 
            hover:scale-105 cursor-pointer shadow" onClick={()=>setOpenDailog(true)}>              
                <PlusSquare />
            </div>
            <Dialog open={openDailog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogDescription>
                            Add Title for your resume
                            <Input className="mt-2" placeholder="ex: Dot net developer"/>
                        </DialogDescription>
                        <div className="flex justify-end gap-1 ">
                            <Button variant="destructive" onClick={()=>setOpenDailog(false)}>Cancel</Button>
                            <Button >Submit</Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}