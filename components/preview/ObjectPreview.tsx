import { resumeInterface } from '@/interface/resumeInterface'
import React from 'react'

const ObjectPreview : React.FC<{resumeInfo : resumeInterface|undefined}> =({resumeInfo})=> {
  return (
    <div className='my-4'>
        <span className='font-semibold' style={{color:resumeInfo?.themeColor}}>Objective : </span>
        <span className='text-xs'>{resumeInfo?.summery}</span>             
    </div>
  )
}

export default ObjectPreview