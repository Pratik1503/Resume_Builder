import React, { useState } from 'react'
import Button from "../../UI/Button";
import { Download } from "react-feather";
import classes from "./ToolBar.module.css"

const ToolBar = () => {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    const [activeColor,setActiveColor]=useState(colors[0]);
  return (
    <div className={classes.toolbar}>
        <div className={classes.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{backgroundColor:item}}
              className={`${classes.color} ${activeColor===item ?classes.active :""}`}
              onClick={()=>{setActiveColor(item)}}
            />
          ))}
        </div> 
        <Button name={'Download'} symbol={<Download/> } ></Button>
      </div>
  )
}

export default ToolBar
