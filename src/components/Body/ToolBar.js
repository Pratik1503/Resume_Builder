import React, { useRef, useState } from 'react'
import Button from "../../UI/Button";
import ReactToPrint from 'react-to-print';
import { Download } from "react-feather";
import classes from "./ToolBar.module.css"

const ToolBar = (props) => {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    const [activeColor,setActiveColor]=useState(colors[0]);
    
    props.onActiveColor(activeColor);
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
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <Button name={'Download'} symbol={<Download/> } ></Button>
          }}
          content={() => props.resumeRef.current}
        />
        
      </div>
  )
}

export default ToolBar
