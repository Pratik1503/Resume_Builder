import React, { useEffect, useState } from "react";
import classes from "./Body.module.css";
import ToolBar from "./ToolBar";
import Editor from "../Editor/Editor";

const Body = () => {

  const sections={
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
}


const [resumeInformation,setResumeInformation]=useState({
  [sections.basicInfo]:{
    id:sections.basicInfo,
    sectionTitle:sections.basicInfo,
    detail:{}
  },
  [sections.workExp]: {
    id: sections.workExp,
    sectionTitle: sections.workExp,
    details: [],
  },
  [sections.project]: {
    id: sections.project,
    sectionTitle: sections.project,
    details: [],
  },
  [sections.education]: {
    id: sections.education,
    sectionTitle: sections.education,
    details: [],
  },
  [sections.achievement]: {
    id: sections.achievement,
    sectionTitle: sections.achievement,
    points: [],
  },
  [sections.summary]: {
    id: sections.summary,
    sectionTitle: sections.summary,
    detail: "",
  },
  [sections.other]: {
    id: sections.other,
    sectionTitle: sections.other,
    detail: "",
  },
})

useEffect(()=>{
  console.log(resumeInformation)
  },[resumeInformation])
  
  return (
    <div className={classes.container}>
      <p className={classes.heading}>Resume Builder</p>
      <ToolBar />
      <Editor sections={sections} information={resumeInformation} setInformation={setResumeInformation}/>
    </div>
  );
};

export default Body;
