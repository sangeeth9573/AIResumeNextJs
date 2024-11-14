import { Notebook } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ResumeCardItem: React.FC<{ data: any }> = ({ data }) => {
  return (
    <Link href={'/dashbord/1/edit'}>
      <div><div className="p-14  border flex items-center 
    justify-center bg-stone-100 rounded-lg h-[280px] border-violet-500
    hover:scale-105 cursor-pointer shadow">
        <Notebook />
      </div>
        <h1 className='text-center m-1'>{data.jobTitle}</h1>
      </div>
    </Link>
  )
}

export default ResumeCardItem