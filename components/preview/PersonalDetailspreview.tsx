import React from 'react'
import { resumeInterface } from '@/interface/resumeInterface'
import { MailIcon, PhoneCallIcon } from 'lucide-react'
const PersonalDetailspreview: React.FC<{ resumeInfo: resumeInterface|undefined }> = ({ resumeInfo }) => {
  return (
    <div>
      <h1 className='font-bold text-xl text-center'
        style={{
          color: resumeInfo?.themeColor
        }}>{resumeInfo?.firstName}{resumeInfo?.lastName}</h1>
      <h2 className='text-center text-sm'>{resumeInfo?.jobTitle}</h2>
      <h2 className='text-center font-normal text-xs' style={{
        color: resumeInfo?.themeColor
      }}>{resumeInfo?.address}</h2>
      <div className='flex justify-between font-normal text-sm' style={{
        color: resumeInfo?.themeColor
      }}>
        <div className="flex items-center space-x-0.5">
          <PhoneCallIcon className="h-3.5 text-black" />
          <h2>{resumeInfo?.phone}</h2>
        </div>
        <div className="flex items-center space-x-0.5">
          <MailIcon className="h-3.5 text-black" />
          <h2>{resumeInfo?.email}</h2>
        </div>
      </div>
      <hr className='border-[1.5px] my-2 font-bold'
      style={{
        borderColor: 'black'
      }} 
      />
    </div>
  )
}

export default PersonalDetailspreview