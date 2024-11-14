import { resumeInterface } from '@/interface/resumeInterface'
import React from 'react'

const SkillsPreview: React.FC<{ resumeInfo: resumeInterface|undefined }> = ({ resumeInfo }) => {
    return (
        <div className='my-5'>
            <h2 className='font-bold text-center'
                style={{ color: resumeInfo?.themeColor }}
            >Skills</h2>
            <hr className='border-[1.5px] my-2 font-bold'
                style={{
                    borderColor: resumeInfo?.themeColor
                }}
            />
            <div className='my-2'>
            <div className='flex flex-wrap justify-normal gap-3 text-sm'>
                    {resumeInfo?.skills.map((skill, index) => (
                        <div key={index}>
                        <li > {skill.name} </li>    
                        </div>                   
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillsPreview