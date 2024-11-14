"use client"
import React, { useContext } from 'react'
import PersonalDetailspreview from '../preview/PersonalDetailspreview'
import ObjectPreview from '../preview/ObjectPreview';
import ExperincePreview from '../preview/ExperiencePreview';
import EducationalPreview from '../preview/EducationalPreview';
import SkillsPreview from '../preview/SkillsPreview';
import { ResumeInfoContext } from '../context/ResumeInfoCntext';
import { resumeInterface } from '@/interface/resumeInterface';

function ResumePreview() {
  const resume=useContext<resumeInterface|undefined>(ResumeInfoContext);
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
      borderColor : resume?.themeColor
    }}>
        {/* personal info */}
        <PersonalDetailspreview resumeInfo={resume}/>
        {/* objective */}
        <ObjectPreview resumeInfo={resume} />
        {/* education  */}
        <EducationalPreview resumeInfo={resume}/>
        {/* skills */}
        <SkillsPreview resumeInfo={resume}/>
        {/* work experience  */}
        <ExperincePreview resumeInfo={resume}/>
        {/* projects */}       
    </div>
  )
}

export default ResumePreview