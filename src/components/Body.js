import React from "react";
import Button from "../UI/Button";
import classes from "./Body.module.css";

const Body = () => {
  const colors = ["239ce2", "48bb78", "0bc5ea", "a0aec0", "ed8936"];
  return (
    <div className={classes.container}>
      <p className={classes.heading}>Resume Builder</p>
      <div className={classes.toolbar}>
        <div className={classes.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{backgroundColor:item}}
              className={classes.color}
            />
          ))}
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Body;
