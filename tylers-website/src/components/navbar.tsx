import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"
    <header className={style.navbar} >
      <h1> <Link href="/home" >Tyler's Personal Website</Link> </h1>
      <nav>
        {/* We'll use Link from now on instead of <a></a>
			      Links are just Next.js wrapper arounds <a> elements anyways
         */}
        <Link href="/home" >Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/resume" >Resume</Link>
        <Link href="/projects" >Portfolio</Link>
        <Link href="/about" >Contact Me</Link>
				{/* More Links ... */}
      </nav>
    </header>
  );
}