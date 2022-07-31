import React from "react";
import classes from "../../styles/subtitle.module.css";
function SectionSubtitle(props) {
  return <div className={`${classes.section_subtitle}`}>{props.subtitle}</div>;
}

export default SectionSubtitle;
