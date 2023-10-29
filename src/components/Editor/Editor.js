import React, { useEffect, useState } from "react";
import classes from "./Editor.module.css";
import InputControl from "../InputControl/InputControl";
import Button from "../../UI/Button";
//import { summaryBody, WorkExpBody ,BasicInfoBody,projectBody,educationBody,achievementsBody,otherBody} from "./Bodies";
import { X } from "react-feather";

const Editor = (props) => {
  const sections = props.sections;
  const information = props.information;
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const [activeInformation, setActiveInformation] = useState(
    information[sections[activeSectionKey]]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionTitle, setSectionTitle] = useState(sections[activeSectionKey]);
  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    email: activeInformation?.detail?.email || "",
    phone: activeInformation?.detail?.phone || "",
  });

  const handlePoint = (value, index) => {
    const tempValue = { ...values };
    if (!Array.isArray(tempValue.points)) tempValue.points = [];
    tempValue.points[index] = value;
    setValues(tempValue);
  };

  const WorkExpBody = (
    <div className={classes.detail}>
      <div className={classes.row}>
        <InputControl
          label="Title"
          placeholder="Enter the Title name for e.g:- FrontEnd Developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Company Name"
          placeholder="Enter the Company name for e.g:- Amazon"
          value={values.companyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }
        />
      </div>
      <div className={classes.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
          value={values.certificationLink}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              certificationLink: event.target.value,
            }))
          }
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
          value={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
      </div>

      <div className={classes.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
          value={values.endDate}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, endDate: event.target.value }));
          }}
        />
      </div>

      <div className={classes.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePoint(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePoint(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePoint(event.target.value, 2)}
        />
      </div>
    </div>
  );

  const projectBody = (
    <div className={classes.detail}>
      <div className={classes.row}>
        <InputControl
          label="Project Title"
          placeholder="Enter title eg. Chat app"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of project"
        value={values.overview}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, overview: event.target.value }))
        }
      />

      <div className={classes.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter deployed link of project"
          value={values.link}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link of project"
          value={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={classes.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePoint(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePoint(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePoint(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePoint(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const educationBody = (
    <div className={classes.detail}>
      <div className={classes.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. B-tech"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="College/School Name"
        placeholder="Enter name of your college/school"
        value={values.college}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, college: event.target.value }))
        }
      />
      <div className={classes.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const BasicInfoBody = (
    <div className={classes.detail}>
      <div className={classes.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Aashu"
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg. Frontend developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className={classes.row}>
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
          value={values.linkedin}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your github profile link"
          value={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={classes.row}>
        <InputControl
          label="Email"
          placeholder="Enter your email"
          value={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Enter phone"
          placeholder="Enter your phone number"
          value={values.phone}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const achievementsBody = (
    <div className={classes.detail}>
      <div className={classes.column}>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePoint(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePoint(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePoint(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePoint(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const summaryBody = (
    <div className={classes.detail}>
      <InputControl
        label="Summary"
        placeholder="Enter your objective/summary"
        value={values.summary}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        }
      />
    </div>
  );

  const otherBody = (
    <div className={classes.detail}>
      <InputControl
        label="Other"
        placeholder="Enter something"
        value={values.other}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, other: event.target.value }))
        }
      />
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return BasicInfoBody;
      case sections.workExp:
        return WorkExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };

  const handleSubmission = () => {
    console.log("Preeses");
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: {
        const tempDetail = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };

        props.setInformation((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }

      case sections.workExp: {
        const tempDetail = {
          title: values.title,
          certificationLink: values.certificationLink,
          companyName: values.companyName,
          location: values.location,
          startDate: values.startDate,
          endDate: values.endDate,
          points: values.points,
        };
        const tempDetails = [
          ...information[sections[activeSectionKey]]?.details,
        ];
        tempDetails[activeIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.project: {
        const tempDetail = {
          title: values.title,
          overview: values.overview,
          link: values.link,
          github: values.github,
          points: values.points,
        };
        const tempDetails = [
          ...information[sections[activeSectionKey]]?.details,
        ];
        tempDetails[activeIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.project]: {
            ...prev[sections.project],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
        };
        const tempDetails = [
          ...information[sections[activeSectionKey]]?.details,
        ];
        tempDetails[activeIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.achievement: {
        const tempPoints = values.points;

        props.setInformation((prev) => ({
          ...prev,
          [sections.achievement]: {
            ...prev[sections.achievement],
            points: tempPoints,
            sectionTitle,
          },
        }));
        break;
      }

      case sections.summary:{
        const tempSummary=values.summary;
        props.setInformation(prev=>({
          ...prev,
          [sections.summary]:{
            ...prev[sections.summary],
            detail:tempSummary,
            sectionTitle
          }
        }))
        break;
      }
      case sections.other:{
        const tempOther=values.other;
        props.setInformation(prev=>({
          ...prev,
          [sections.other]:{
            ...prev[sections.other],
            detail:tempOther,
            sectionTitle
          }
        }))
        break;
      }

      default: {
        console.log("default");
      }
    }
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSectionKey]];
    setActiveIndex(0)
    setActiveInformation(activeInfo);
    setSectionTitle(sections[activeSectionKey]);

    setValues({
      name: activeInfo?.detail?.name || "",
      overview: activeInfo?.details
        ? activeInfo.details[activeIndex]?.overview || ""
        : "",
      certificationLink: activeInfo?.details
        ? activeInfo.details[activeIndex]?.certificationLink || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[activeIndex]?.companyName || ""
        : "",
      location: activeInfo?.details
        ? activeInfo.details[activeIndex]?.location || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[activeIndex]?.startDate || ""
        : "",
      endDate: activeInfo?.details
        ? activeInfo.details[activeIndex]?.endDate || ""
        : "",
      link: activeInfo?.details
        ? activeInfo.details[activeIndex]?.link || ""
        : "",
      points: activeInfo?.details
        ? activeInfo.details[activeIndex]?.points
          ? [...activeInfo.details[activeIndex].points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",
      title: activeInfo?.details
        ? activeInfo.details[activeIndex]?.title || ""
        : activeInfo?.detail?.name || "",
      github: activeInfo?.details
        ? activeInfo.details[activeIndex]?.github || ""
        : activeInfo?.detail?.github || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      email: activeInfo?.detail?.email || "",
      phone: activeInfo?.detail?.phone || "",
      college: activeInfo?.details
        ? activeInfo.details[activeIndex]?.college || ""
        : "",
      summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
      other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
    });
  }, [activeSectionKey]);

  useEffect(() => {
    setActiveInformation(information[sections[activeSectionKey]]);
  }, [information]);

   useEffect(() => {
    const details = activeInformation?.details;
    if (!details) return;

    const activeInfo = information[sections[activeSectionKey]];
    setValues({
      overview: activeInfo.details[activeIndex]?.overview || "",
      link: activeInfo.details[activeIndex]?.link || "",
      certificationLink:
        activeInfo.details[activeIndex]?.certificationLink || "",
      companyName: activeInfo.details[activeIndex]?.companyName || "",
      location: activeInfo.details[activeIndex]?.location || "",
      startDate: activeInfo.details[activeIndex]?.startDate || "",
      endDate: activeInfo.details[activeIndex]?.endDate || "",
      points: activeInfo.details[activeIndex]?.points || "",
      title: activeInfo.details[activeIndex]?.title || "",
      linkedin: activeInfo.details[activeIndex]?.linkedin || "",
      github: activeInfo.details[activeIndex]?.github || "",
      college: activeInfo.details[activeIndex]?.college || "",
    });
  }, [activeIndex]);
  


  const handleAddNew = () => {
const details = activeInformation?.details;
    if (!details) return;
    console.log("details : ",details)
    const lastDetail = details.slice(-1)[0];

    console.log("lastDetails : ",lastDetail)
    if (!Object.keys(lastDetail).length) return;
    details?.push({});

    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));
    setActiveIndex(details?.length - 1);
  };

  const handleDelete = (indexToRemove) => {
    const details =activeInformation?.details
    if(!details) return 
    details.splice(indexToRemove,1);

    props.setInformation(prev=>({
      ...prev,
      [sections[activeSectionKey]]:{
        ...information[sections[activeSectionKey]],
        details: details,
      }
    }))
     setActiveIndex((prev)=>(prev===indexToRemove?0:prev-1))
  }



  return (
    <div className={classes.container}>
      <div className={classes.header}>
        {
          //thus sections are objects we use object.keys to convert it into array
          Object.keys(sections).map((key) => (
            <div
              key={key}
              className={`${classes.section} ${
                activeSectionKey === key ? classes.active : ""
              }`}
              onClick={() => {
                setActiveSectionKey(key);
              }}
            >
              {sections[key]}
            </div>
          ))
        }
      </div>

      <div className={classes.body}>
        <InputControl
          label="Title"
          value={sectionTitle}
          onChange={(event) => setSectionTitle(event.target.value)}
        />

        <div className={classes.chips}>
          {activeInformation.details
            ? activeInformation.details.map((item, index) => (
                <div
                  className={`${classes.chip} ${
                    activeIndex === index ? classes.active : ""
                  } `}
                  key={item.title + index}
                  onClick={() => setActiveIndex(index)}
                >
                  <p>
                    {activeInformation.sectionTitle} {index + 1}
                  </p>
                  <X onClick={(event)=>{
                    event.stopPropagation();
                    handleDelete(index)}} />
                </div>
              ))
            : null}
          {activeInformation?.details &&
          activeInformation?.details?.length > 0 ? (
            <div className={classes.new} onClick={handleAddNew}>
              +NEW
            </div>
          ) : (
            ""
          )}
        </div>

        {generateBody()}
      </div>

      {/* symbol={<Save/>}  */}
      <div className={classes.save_button}>
        <Button name="Save" onClick={handleSubmission} />
      </div>
    </div>
  );
};

export default Editor;
