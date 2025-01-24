import { resumeInterface } from '@/interface/resumeInterface'

const ExperiencePreview: React.FC<{ resumeInfo: resumeInterface|undefined }> = ({ resumeInfo }) => {
  return (
    <div>
      <h2 className='font-bold text-center'
        style={{ color: resumeInfo?.themeColor }}
      >Professional experience</h2>
      <hr className='border-[1.5px] my-2 font-bold'
        style={{
          borderColor: resumeInfo?.themeColor
        }}
      />
      {resumeInfo?.experience.map((experience, index) => (
        <div key={index} className='my-5'>
          <h3 className='text-sm font-bold'>{experience.title}</h3>
          <h3 className='text-xs flex justify-between'>{experience.companyName},{experience.city},
            {experience.state}.
            <span>{experience.startDate} {experience.currentlyWorking ? 'Present' : experience.endDate}</span>
          </h3>
          {/* <p className='text-xs my-2'>{experience.workSummery}</p> */}
          <div dangerouslySetInnerHTML={{__html:experience.workSummery}}/>
        </div>
      ))}
    </div>
  )
}

export default ExperiencePreview