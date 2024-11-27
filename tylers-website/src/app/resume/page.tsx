import React from "react";
import style from "./resume.module.css";

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
            <section className={style.section}>
                <h2 className={style.sectionTitle}>Education</h2>
                <div className={style.entry}>
                    <h3 className={style.entryTitle}>CalPoly SLO</h3>
                    <p className={style.entryInfo}>BS in Comp Sci</p>
                </div>
            </section>
            <section className={style.section}>
                <h2 className={style.sectionTitle}>Course Work</h2>
                <ul className={style.courseList}>
                    <li>101</li>
                    <li>202</li>
                    <li>203</li>
                    <li>357</li>
                    <li>307</li>
                </ul>
            </section>

            <section className={style.section}>
                <h2 className={style.sectionTitle}>Skills</h2>
                <ul className={style.skillList}>
                    <li>Python</li>
                    <li>Java</li>
                    <li>JS</li>
                    <li>Tailwind</li>
                    <li>Express</li>
                    <li>Making iu happy :D</li>
                </ul>
            </section>

            <section className={style.section}>
                <h2 className={style.sectionTitle}>Projects</h2>
                <div className={style.entry}>
                    <h3 className={style.entryTitle}>Random Forest</h3>
                    <p className={style.entryInfo}>ML algorithm</p>
                    <p className={style.entryDescrip}>Implemented random forest in java from scratch</p>
                </div>
            </section>

            <section className={style.section}>
                <h2 className={style.sectionTitle}>Experience</h2>
                <div className={style.entry}>
                    <h3 className={style.entryTitle}>Frontend Developer at EIEN Studios</h3>
                    <p className={style.entryInfo}>Frontend-web dev intern</p>
                    <p className={style.entryDescrip}>Developed website for rythm game</p>
                </div>
            </section>
            
        </div>
        
        </main>
  );
}