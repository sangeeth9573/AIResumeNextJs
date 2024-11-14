"use client"
import { resumeInterface } from "@/interface/resumeInterface";
import { createContext } from "react";

export const ResumeInfoContext = createContext<resumeInterface|undefined>(undefined)