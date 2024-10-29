import React from "react";

export default function ResumePage() {
  return (
    <main>
            <div className="resume-img"><img width="500" src="./images/IUPaletteCover.png" alt="my wife"/></div>
            <a href="resume.pdf" download >Download Resume</a>
            <div className="resume">
                <section className="section">
                    <h2 className="education">Education</h2>
                    <div className="entry">
                        <h3 className="entry-title">CalPoly SLO</h3>
                        <p className="entry-info">BS in Comp Sci</p>
                    </div>
                </section>
                <section className="section">
                    <h2 className="coursework">Course Work</h2>
                    <ul className="course-list">
                        <li>101</li>
                        <li>202</li>
                        <li>203</li>
                        <li>357</li>
                        <li>307</li>
                    </ul>
                </section>

                <section className="section">
                    <h2 className="skills">Skills</h2>
                    <ul className="skill-list">
                        <li>Python</li>
                        <li>Java</li>
                        <li>JS</li>
                        <li>Tailwind</li>
                        <li>Express</li>
                        <li>Making iu happy :D</li>
                    </ul>
                </section>

                <section className="section">
                    <h2 className="projects">Projects</h2>
                    <div className="entry">
                        <h3 className="entry-title">Random Forest</h3>
                        <p className="entry-info">ML algorithm</p>
                        <p className="entry-description">Implemented random forest in java from scratch</p>
                    </div>
                </section>

                <section className="section">
                    <h2 className="experience">Experience</h2>
                    <div className="entry">
                        <h3 className="entry-title">Frontend Developer at EIEN Studios</h3>
                        <p className="entry-info">Frontend-web dev intern</p>
                        <p className="entry-description">Developed website for rythm game</p>
                    </div>
                </section>
                
            </div>

            <div className="resume-image"></div>
            <div className="resume-text">
                <p>Hi! My name is <em>Min Hset Hlaing</em> and I'm a <strong> software engineer </strong> with a goal of focusing in ML!</p>
            </div>
            
        </main>
  );
}