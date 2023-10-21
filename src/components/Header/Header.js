import React from 'react'
import classes from "./Header.module.css"
import resumeSVG from "../../assets/resume.svg"
const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
      <p className={classes.heading} >A <span>Resume</span> that stands out</p>
      <p className={classes.heading} >Make your Own Resume. <span>It's Free</span> </p>
      </div>

      <div className={classes.right}>
        <img src={resumeSVG} alt="resumeSVG" />
      </div>
    </div>
  )
}

export default Header
