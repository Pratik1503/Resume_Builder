import React, { useEffect, useRef, useState } from "react";
import classes from "./Resume.module.css";
import {
  AtSign,
  GitHub,
  Linkedin,
  Phone,
  Paperclip,
  Calendar,
  MapPin,
} from "react-feather";


const Resume = (props) => {
  const information = props.information;
  const sections = props.sections;
  const containerRef=useRef();

  const [column, setColumn] = useState([[], []]);
  const [target, setTarget] = useState("");
  const [source, setSource] = useState("");

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    education: information[sections.education],
    achievement: information[sections.achievement],
    summary: information[sections.summary],
    other: information[sections.other],
    basicInfo: information[sections.basicInfo],
  };


  const sectionDiv={
    [sections.workExp]:(
      <div
        draggable
        onDragOver={() => {
          setTarget(info.workExp?.id);
        }}
        onDragEnd={() => {
          setSource(info.workExp?.id);
        }}
        className={`${classes.section} ${classes.workExp}`}
      >
        <div className={classes.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={classes.content}>
          {info.workExp.details?.map((detail) => (
            <>
              {console.log(detail)}
              <div className={classes.item} key={detail.title}>
                {detail.title && (
                  <p className={classes.title}>{detail.title}</p>
                )}
                {detail.companyName && (
                  <p className={classes.subtitle}>{detail.companyName}</p>
                )}

                {detail.startDate && detail.endDate && (
                  <div className={classes.date}>
                    <Calendar /> {detail.startDate}  to {detail.endDate}
                  </div>
                )}
                {detail.certificationLink && (
                  <a className={classes.link} href={detail.certificationLink}>
                    <Paperclip />
                    {detail.certificationLink}
                  </a>
                )}
              </div>

              {detail.location && (
                <p className={classes.date}>
                  {" "}
                  <MapPin /> Remote{" "}
                </p>
              )}

              {detail?.points?.length > 0 && (
                <ul className={classes.points}>
                  {detail?.points.map((point, index) => (
                    <li className={classes.point} key={point + index}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </div>
      </div>
    ),
    [sections.project]:(<div
      draggable
      onDragOver={() => {
        setTarget(info.project?.id);
      }}
      onDragEnd={() => {
        setSource(info.project?.id);
      }}
      className={`${classes.section} ${classes.workExp}`}
    >
      <div className={classes.sectionTitle}>{info.project.sectionTitle}</div>
      <div className={classes.content}>
        {info.project?.details.map((detail,index) => (
          <>
            <div className={classes.item} key={index} >
              {detail.title && (
                <p className={classes.title}>{detail.title}</p>
              )}

              {detail.link && (
                <a className={classes.link}>
                  <Paperclip />
                  {detail.link}
                </a>
              )}
              {detail.github && (
                <a className={classes.link}>
                  <GitHub />
                  {detail.github}
                </a>
              )}
            </div>

            {detail.overview && (
              <p className={classes.overview}> {detail.overview} </p>
            )}

            {detail?.points.length > 0 && (
              <ul className={classes.points}>
                {detail?.points.map((point, index) => (
                  <li className={classes.point} key={point + index}>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </div>
    </div>),
    [sections.education]:(
      <div
        draggable
        onDragOver={() => {
          setTarget(info.education?.id);
        }}
        onDragEnd={() => {
          setSource(info.education?.id);
        }}
        className={`${classes.section} ${classes.workExp}`}
      >
        <div className={classes.sectionTitle}>
          {info.education.sectionTitle}
        </div>
        <div className={classes.content}>
          {info?.education?.details.map((detail,index) => (
            <div className={classes.item} key={index}>
              {detail.title && <p className={classes.title}>{detail.title}</p>}
              {detail.college && (
                <p className={classes.subtitle}>{detail.college}</p>
              )}

              {detail.startDate && detail.endDate && (
                <div className={classes.date}>
                  <Calendar /> {detail.startDate} to {detail.endDate}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievement]:(
      <div
        draggable
        onDragOver={() => {
          setTarget(info.achievement?.id);
        }}
        onDragEnd={() => {
          setSource(info.achievement?.id);
        }}
        className={`${classes.section} ${classes.workExp}`}
      >
        <div className={classes.sectionTitle}>
          {info.achievement.sectionTitle}
        </div>
        {info.achievement?.points.length > 0 && (
          <ul className={classes.numbered}>
            {info.achievement.points.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
        )}
      </div>
    ),
    [sections.summary]:(
      <div
        draggable
        onDragOver={() => {
          setTarget(info.summary?.id);
        }}
        onDragEnd={() => {
          setSource(info.summary?.id);
        }}
        className={`${classes.section} ${classes.workExp}`}
      >
        <div className={classes.sectionTitle}>{info.summary.sectionTitle}</div>
        <div className={classes.content}>
          {info.summary?.detail && (
            <p className={classes.overview}>{info.summary.detail}</p>
          )}
        </div>
      </div>
    ),
    [sections.other]:(
      <div
        draggable
        onDragOver={() => {
          setTarget(info.other?.id);
        }}
        onDragEnd={() => {
          setSource(info.other?.id);
        }}
        className={`${classes.section} ${classes.workExp}`}
      >
        <div className={classes.sectionTitle}>{info.other.sectionTitle}</div>
        <div className={classes.content}>
          {info.other?.detail && (
            <p className={classes.overview}>{info.other?.detail}</p>
          )}
        </div>
      </div>
    )
  }
`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatem, voluptate est quidem veritatis sequi voluptatum iure ex tenetur molestias veniam exercitationem asperiores nam ad neque. Nemo fugit debitis quos!
`
  useEffect(() => {

    setColumn([
      [sections.project, sections.workExp, sections.summary],
      [sections.education, sections.other, sections.achievement],
    ]);
  }, []);

  const swapSourceTarget=(source ,target)=>{
    if(!source || !target) return;
    const tempColumns=[[...column[0]],[...column[1]]]
    let sourceRowIndex=tempColumns[0].findIndex(item=>item===source)
    let sourceColumnIndex=0;
    if(sourceRowIndex<0){
      sourceColumnIndex=1;
      sourceRowIndex=tempColumns[1].findIndex(item=>item===source)
    }
    let targetRowIndex=tempColumns[0].findIndex(item=>item===target)
    let targetColumnIndex=0;
    if(targetRowIndex<0){
      targetColumnIndex=1;
      targetRowIndex=tempColumns[1].findIndex(item=>item===target)
      }

      const tempSource=tempColumns[sourceColumnIndex][sourceRowIndex];
      tempColumns[sourceColumnIndex][sourceRowIndex]=tempColumns[targetColumnIndex][targetRowIndex]
      tempColumns[targetColumnIndex][targetRowIndex]=tempSource;
      setColumn(tempColumns)
  }
  useEffect(()=>{
    swapSourceTarget(source,target)
  },[source])
 console.log(`source:${source} ,target:${target}`)
 
 useEffect(()=>{
   const container=containerRef.current;
   if(!props.activeColor || !container) return ;
   container.style.setProperty('--color',props.activeColor);
 },[props.activeColor])
  return (
    <div ref={props.resumeRef}>
    <div ref={containerRef} className={classes.container}>
      <div className={classes.header}>
        {info.basicInfo.detail.name && (
          <p className={classes.heading}>{info.basicInfo.detail.name}</p>
        )}
        {info.basicInfo.detail.title && (
          <p className={classes.subHeading}>{info.basicInfo.detail.title}</p>
        )}

        <div className={classes.links}>
          {info.basicInfo.detail.email && (
            <a className={classes.link}>
              <AtSign /> {info.basicInfo.detail.email}
            </a>
          )}
          {info.basicInfo.detail.phone && (
            <a className={classes.link}>
              <Phone /> {info.basicInfo.detail.phone}
            </a>
          )}
          {info.basicInfo.detail.linkedin && (
            <a className={classes.link}>
              <Linkedin />
              {info.basicInfo.detail.linkedin}
            </a>
          )}
          {info.basicInfo.detail.github && (
            <a className={classes.link}>
              <GitHub /> {info.basicInfo.detail.github}
            </a>
          )}
        </div>
      </div>

      <div className={classes.main}>
        <div className={classes.col1}>{column[0].map(item=>sectionDiv[item])}</div>
        <div className={classes.col2}>{column[1].map(item=>sectionDiv[item])}</div>
      </div>
    </div>
    </div>
  );
};

export default Resume;
