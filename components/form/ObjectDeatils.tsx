import React, { ChangeEvent, useContext } from 'react';
import { Textarea } from '../ui/textarea';
import { ResumeInfoContext } from '../context/ResumeInfoCntext';
import { Button } from '../ui/button';

function ObjectDeatils() {
    const context = useContext(ResumeInfoContext);
    const resumeInfo = context?.resumeInfo; // Default to empty object if undefined
    const setResumeInfo = context?.setResumeInfo;
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log("Updating field:", name, "Value:", value); // Debugging log
        if (setResumeInfo) {
            setResumeInfo({
                ...resumeInfo!,
                summery: value
            });
        }
    };
    return (
        <div>
            <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
                <h2 className="font-bold text-lg">Objective </h2>
                <p>Add objective to the your resume </p>
            </div>
            <form className='mt-7'>
                <label>Add Objective</label>
                <Textarea className='mt-5' defaultValue={resumeInfo?.summery} onChange={handleChange} />
                <div className="mt-3 flex justify-end">
                    <Button>Save</Button>
                </div>
            </form>
        </div>
    )
}

export default ObjectDeatils