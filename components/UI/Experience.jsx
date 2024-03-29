import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useScroll } from "../useScroll";
import { motion } from "framer-motion";
import classes from "../../styles/experience.module.css";
function Experience() {
  const [element, controls] = useScroll();

  const experienceAnimations = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience">
      <Container>
        <Row>
          <h2 className={`${classes.experience_header}`}>Experience</h2>
          <div className={`${classes.experience_container}`}>
            <Col lg="6" md="6">
              <motion.div
                key="experience_first"
                ref={element}
                className={`${classes.experience_item}`}
                variants={experienceAnimations}
                animate={controls}
                transition={{ delay: 0.1, duration: 0.6, type: "tween" }}
              >
                <h4 className={`${classes.experience_item_header}`}>
                  <div> Software Developer </div>
                  <div className={`${classes.experience_item_header_date}`}>
                    July, 2022 to Current
                  </div>
                </h4>
                <div className={`${classes.experience_title}`}>
                  Carnival Guide
                </div>
                <p className={`${classes.experience_item_content}`}>
                  - Designing and building Full Stack tourism web and mobile app{" "}
                  <br />- Created and tested secure user authentication Front
                  End and Back End using Flask and React via Axios library and
                  JWT <br />- Created MongoDB database built for horizontal
                  scalability <br />
                  <br /> Python · Flask · MongoDB · JavaScript · React.js ·
                  React Native · HTML · TailWindCSS
                </p>
              </motion.div>

              <motion.div
                key="experience_second"
                ref={element}
                className={`${classes.experience_item}`}
                variants={experienceAnimations}
                animate={controls}
                transition={{ delay: 0.6, duration: 0.6, type: "tween" }}
              >
                <h4 className={`${classes.experience_item_header}`}>
                  <div> Software Developer </div>
                  <div className={`${classes.experience_item_header_date}`}>
                    Aug, 2022 to Current
                  </div>
                </h4>
                <div className={`${classes.experience_title}`}>
                  The Teacher App
                </div>
                <p className={`${classes.experience_item_content}`}>
                  - Successfully created share post and profile page features
                  from the ground up. <br />- Improved over 70% of webApp to be
                  more design responsive <br />- Improved error handling to be
                  more informative on front end and back end <br />
                  <br />
                  TypeScript · React.js · React Native · AWS · Node.js ·
                  Express.js · GraphQL · PostgreSQL · prisma · SASS · HTML
                </p>
              </motion.div>
            </Col>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
