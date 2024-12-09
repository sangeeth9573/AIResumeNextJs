"use client"
import { resumeInterface } from "@/interface/resumeInterface";
import React, { createContext } from "react";
export interface ResumeInfoContextType  {
    resumeInfo : resumeInterface|undefined,
    setResumeInfo :  React.Dispatch<React.SetStateAction<resumeInterface|undefined>>|undefined
}
export const ResumeInfoContext = createContext<ResumeInfoContextType|undefined>(undefined)