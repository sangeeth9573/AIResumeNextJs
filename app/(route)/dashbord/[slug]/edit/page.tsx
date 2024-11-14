"use client"
import { ResumeInfoContext } from '@/components/context/ResumeInfoCntext';
import FormSection from '@/components/custom/FormSection';
import ResumePreview from '@/components/custom/ResumePreview';
import resume from '@/data/dummy';
import { resumeInterface } from '@/interface/resumeInterface';
import { useEffect, useState } from 'react';
function EditResume() {
  const[resumeInfo,setResumeInfo]=useState<undefined|resumeInterface>()
  useEffect(()=>{
    setResumeInfo(resume)
  },[])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-10  gap-10'>
      <ResumeInfoContext.Provider value={resumeInfo}>
      <FormSection/>
      <ResumePreview/>
      </ResumeInfoContext.Provider>
    </div>
  )
}

export default EditResume