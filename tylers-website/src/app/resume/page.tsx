import React from "react";
import style from "./resume.module.css";
import { resumeEntries } from "@/app/resumeData";
import ResumeSection from "@/components/resumeItem";
import ResumeItem from "@/components/resumeItem";

export default function ResumePage() {
  return (
    <main className={style.main}>
        <div className={style.titleContent}>
            <div className={style.titleImage}>
                <img width="500" src="./images/IUPaletteCover.png" alt="my wife"/>
            </div>
            <a className={style.button} href="resume.pdf" download >Download Resume</a>
        </div>
        
        <div className={style.resume}>
            {resumeEntries.map((section, index) => (
            <ResumeItem key={index} title={section.title} items={section.items} />
        ))}
        </div>
        
        </main>
  );
}