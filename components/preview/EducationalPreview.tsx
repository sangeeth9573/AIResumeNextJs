import { resumeInterface } from '@/interface/resumeInterface'
import React from 'react'

const EducationalPreview : React.FC<{resumeInfo:resumeInterface|undefined}>=({resumeInfo})=> {
  return (
    <div className='my-5'>
        <h2 className='font-bold text-center'
        style={{ color: resumeInfo?.themeColor }}
      >Education</h2>
      <hr className='border-[1.5px] my-2 font-bold'
        style={{
          borderColor: resumeInfo?.themeColor
        }}
      />
      {resumeInfo?.education.map((education,index)=>(
        <div key={index} className='my-2'>
            <h2 className='text-sm font-bold'>{education.universityName}</h2>
            <h2 className='text-xs flex justify-between'>{education.degree} in {education.major}
                <span>{education.startDate} - {education.endDate}</span>
            </h2>
            
            </div>
      ))}
    </div>
  )
}

export default EducationalPreview