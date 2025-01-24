import React, { useState } from 'react'
import PersonalDetails from '../form/PersonalDetails'
import { Button } from '../ui/button'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
import ObjectDeatils from '../form/ObjectDeatils'
import ExperienceDetails from '../form/ExperienceDetails'

function FormSection() {
  const[activeIndex,setActiveIndex]=useState<number>(1)
  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button variant='outline' size='sm'><LayoutGrid /> Them</Button>
        <div className='flex gap-2'>
          {activeIndex>1 && <Button size='sm' 
           onClick={()=>setActiveIndex(activeIndex-1)}><ArrowLeft/></Button>}
          <Button className='gap-2' size='sm'
          onClick={()=>setActiveIndex(activeIndex+1)}> Next<ArrowRight /></Button>
        </div>
      </div>
      {activeIndex ==1 ? <PersonalDetails /> : null}
      {activeIndex==2? <ObjectDeatils/> : null}
      {activeIndex==3? <ExperienceDetails/> : null}
    </div>
  )
}

export default FormSection