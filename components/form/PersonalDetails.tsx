import React, { ChangeEvent, useContext } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ResumeInfoContext } from '../context/ResumeInfoCntext';

const PersonalDetails: React.FC = () => {
  const context = useContext(ResumeInfoContext);
  const resumeInfo = context?.resumeInfo; // Default to empty object if undefined
  const setResumeInfo = context?.setResumeInfo;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    //console.log("Updating field:", name, "Value:", value); // Debugging log
    if (setResumeInfo) {
      setResumeInfo((prev) => {
        const updatedResumeInfo = {
          ...prev!,
          [name]: value,
        };
        //console.log("Updated state:", updatedResumeInfo); // Log updated state
        return updatedResumeInfo;
      });
    }
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p>Get started with basic information</p>
      <form>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label htmlFor="firstname" className="text-sm">First Name</label>
            <Input 
              name="firstName" 
              onChange={handleChange} 
              value={resumeInfo?.firstName || ''} 
            />
          </div>
          <div>
            <label htmlFor="lastname" className="text-sm">Last Name</label>
            <Input 
              name="lastName" 
              required 
              onChange={handleChange} 
              value={resumeInfo?.lastName || ''} 
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="jobtitle" className="text-sm">Job Title</label>
            <Input 
              name="jobTitle" 
              required 
              onChange={handleChange} 
              value={resumeInfo?.jobTitle || ''} 
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm">Phone</label>
            <Input 
              name="phone" 
              required 
              onChange={handleChange} 
              value={resumeInfo?.phone || ''} 
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <Input 
              name="email" 
              required 
              onChange={handleChange} 
              value={resumeInfo?.email || ''} 
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="address" className="text-sm">Address</label>
            <Input 
              name="address" 
              required 
              onChange={handleChange} 
              value={resumeInfo?.address || ''} 
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button>Save</Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
