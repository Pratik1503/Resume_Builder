import React from 'react'
import classes from  './Button.module.css'
const Button = ({name,symbol,...props}) => {
  return (
    <button className={classes.button} {...props}>
    <span>{name} </span>
    {symbol && <span>{symbol} </span>}
  </button>
  )
}

export default Button
