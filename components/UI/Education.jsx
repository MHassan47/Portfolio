import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useScroll } from "../useScroll";
import { motion } from "framer-motion";
import classes from "../../styles/education.module.css";

function Education() {
  const [element, controls] = useScroll();
  const educationAnimations = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  return (
    <section id="education">
      <Container>
        <Row>
          <h2 className={`${classes.education_header}`}>Education</h2>
          <div className={`${classes.education_container}`}>
            <Col lg="6" md="6">
              <motion.div
                key="education_first"
                ref={element}
                className={`${classes.education_item}`}
                variants={educationAnimations}
                animate={controls}
                transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
              >
                <h4 className={`${classes.education_item_header}`}>
                  <div> Lighthouse Labs - Full Stack Developer Diploma </div>
                  <div className={`${classes.education_item_header_date}`}>
                    May, 2022 to July, 2022
                  </div>
                </h4>
                <p className={`${classes.education_item_content}`}></p>
              </motion.div>
              <motion.div
                key="education_second"
                ref={element}
                className={`${classes.education_item}`}
                variants={educationAnimations}
                animate={controls}
                transition={{ delay: 0.6, duration: 0.6, type: "tween" }}
              >
                <h4 className={`${classes.education_item_header}`}>
                  <div> University of Manitoba - B.Sc. Microbiolgy </div>
                  <div className={`${classes.education_item_header_date}`}>
                    September, 2017 to January, 2022
                  </div>
                </h4>
                <p className={`${classes.education_item_content}`}></p>
              </motion.div>
            </Col>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Education;
