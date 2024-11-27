import React from "react";
import style from "./about.module.css";
import { styleText } from "util";

export default function AboutPage() {
  return (
    <main className={style.main}>
        <div className={style.contact}>
            <div className={style.contactImage}>
                <img width="500" src="./images/iu i stan u 4.jpg" alt="my wife"/>
            </div>
            <div className={style.contactText}>
                <p>Hi! Please feel free to reach out to me!! :D</p>
            </div>
        </div>

        <form className={style.form}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" placeholder="Name" required />
            <br></br>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" />
            <br></br>
            <label htmlFor="Message">Comments</label>
            <textarea
                id="Message"
                name="Message"
                placeholder="Message"
                required
            ></textarea>
            <br></br>
            <input type="submit" value="Submit" />
        </form>
    </main>
  );
}