import React from 'react'
import classes from "./InputControl.module.css"
const InputForm = ({label,...props}) => {
  return (
    <div className={classes.container}>
        {label && <label>{label}</label>}
        <input type='text' {...props} required />
        
    </div>
  )
}

export default InputForm
