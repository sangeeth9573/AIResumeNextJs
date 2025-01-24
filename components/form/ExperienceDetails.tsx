import React, { useContext, useState, useEffect, ChangeEvent } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ResumeInfoContext } from '../context/ResumeInfoCntext';
import { Textarea } from '../ui/textarea';
import CustomEditor from '../ui/richtextarea.js';

interface Experience {
    id: number;
    title: string;
    companyName: string;
    city: string;
    state: string;
    startDate: string;
    endDate: string;
    currentlyWorking: boolean;
    workSummery: string;
}
let flag : boolean= true;
function ExperienceDetails() {
    const context = useContext(ResumeInfoContext);
    const resumeInfo = context?.resumeInfo; // Fallback to empty object if undefined
    const setResumeInfo = context?.setResumeInfo;

    const newExperience: Experience = {
        id: 0,
        title: '',
        companyName: '',
        city: '',
        state: '',
        startDate: '',
        endDate: '',
        currentlyWorking: false,
        workSummery: '',
    };

    const [experienceList, setExperienceList] = useState<Experience[]>([]);
    useEffect(() => {
        
        if (resumeInfo?.experience && experienceList.length === 0 && flag) {
            console.log('updated for entry')
            setExperienceList(resumeInfo.experience);
        }
    }, [resumeInfo, experienceList.length]);
    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = e.target;
        // Create a new array with a shallow copy of the experienceList
        const newEntries = [...experienceList];
        // Copy the experience object at the index and update the field
        newEntries[index] = {
            ...newEntries[index],
            [name]: value, // Update the specific field
        };
        // Update the experience list state
        setExperienceList(newEntries);
    };
    const handleChangeTextarea =(e: ChangeEvent<HTMLTextAreaElement>, index: number ,nameactual :string) =>{
        const { name, value } = e.target;
        // Create a new array with a shallow copy of the experienceList
        const newEntries = [...experienceList];
        // Copy the experience object at the index and update the field
        newEntries[index] = {
            ...newEntries[index],
            [nameactual]: value, // Update the specific field
        };
        // Update the experience list state
        setExperienceList(newEntries);
    }
    const addMoreExperience = () => {
        setExperienceList([...experienceList, { ...newExperience }]); // Create a new object each time
    };

    const removeExperience = () => {
        if (experienceList.length !== 1) {
            setExperienceList(experienceList.slice(0, -1));
        }
        else{
            console.log('evntr');
            flag=false;
            setExperienceList([])
        } // Remove the last item
    };
    // Update resumeInfo with new experience list whenever experienceList changes
    useEffect(() => {
        if (setResumeInfo && resumeInfo?.experience !== experienceList) {

            setResumeInfo((prev) => {
                const updatedResumeInfo = {
                    ...prev!,
                    experience: experienceList, // Update the experience field
                };
                return updatedResumeInfo;
            });


        }

    }, [experienceList, resumeInfo, setResumeInfo]);// Only re-run if experienceList changes

    return (
        <div>
            <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
                <h2 className="font-bold text-lg">Professional Experience</h2>
                <p>Add Professional Experience to your resume</p>
                <div>
                    {experienceList.map((experience, index) => (
                        <div key={index} className="grid grid-cols-2 mt-5 gap-3">
                            <div>
                                <label htmlFor="title" className="text-sm">Title</label>
                                <Input
                                    name="title"
                                    value={experience.title}
                                    onChange={(e) => handleChange(e, index)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="companyName" className="text-sm">Company Name</label>
                                <Input
                                    name="companyName"
                                    value={experience.companyName}
                                    onChange={(e) => handleChange(e, index)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="text-sm">City</label>
                                <Input
                                    name="city"
                                    value={experience.city}
                                    onChange={(e) => handleChange(e, index)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="state" className="text-sm">State</label>
                                <Input
                                    name="state"
                                    value={experience.state}
                                    onChange={(e) => handleChange(e, index)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="startDate" className="text-sm">Start Date</label>
                                <Input
                                    type="date"
                                    name="startDate"
                                    value={experience.startDate}
                                    onChange={(e) => handleChange(e, index)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="endDate" className="text-sm">End Date</label>
                                <Input
                                    type="date"
                                    name="endDate"
                                    value={experience.endDate}
                                    onChange={(e) => handleChange(e, index)}
                                    required
                                />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="workSummery" className="text-sm">Work Summary</label>
                                {/* <Textarea
                                    name="workSummery"
                                    value={experience.workSummery}
                                    onChange={(e) => handleChange(e, index)} // Consider this if Textarea is a controlled component
                                    required
                                /> */}
                                <CustomEditor worksummary={experience.workSummery} onTextEditerChange={(e:ChangeEvent<HTMLTextAreaElement>)=>handleChangeTextarea(e,index,'workSummery')}/>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-3 flex justify-between">
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={addMoreExperience}>+ Add more experience</Button>
                        <Button variant="outline" onClick={removeExperience}>- Remove experience</Button>
                    </div>
                    <Button>Save</Button>
                </div>
            </div>
        </div>
    );
}

export default ExperienceDetails;
