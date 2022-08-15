import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useScroll } from "../useScroll";
import { motion } from "framer-motion";
import classes from "../../styles/experience.module.css";
function Experience() {
  const [element, controls] = useScroll();

  const experienceAnimations = {
    hidden: { x: -300, opacity: 0 },
    show: { x: 0, opacity: 1 },
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
                transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
              >
                <h4 className={`${classes.experience_item_header}`}>
                  <div> Freelance Software Developer </div>
                  <div className={`${classes.experience_item_header_date}`}>
                    July, 2022 to Current
                  </div>
                </h4>
                <p className={`${classes.experience_item_content}`}>
                  - Developing full scale websites for local businesses <br />-
                  Working on small projects as a Freelancer on Upwork
                </p>
              </motion.div>
              <motion.div
                key="experience_first"
                ref={element}
                className={`${classes.experience_item}`}
                variants={experienceAnimations}
                animate={controls}
                transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
              >
                <h4 className={`${classes.experience_item_header}`}>
                  <div> Program Leader </div>
                  <div className={`${classes.experience_item_header_date}`}>
                    June, 2016 to May, 2022
                  </div>
                </h4>
                <p className={`${classes.experience_item_content}`}>
                  - Program planned for youth with a particular focus on
                  physical literacy <br />
                  - Communicated and orchestrated community events in behalf of
                  municipal government <br />
                  - Key member of building a city-wide free sports program for
                  children <br />- Coached basketball and soccer players ages
                  8-14
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
                  <div> Library Assistant </div>
                  <div className={`${classes.experience_item_header_date}`}>
                    Jan, 2020 to June 2021
                  </div>
                </h4>
                <p className={`${classes.experience_item_content}`}>
                  - Finalized data entry for customer information <br />
                  - Customer tech support for online services <br />- Scheduled
                  and promoted literacy community events for families
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
