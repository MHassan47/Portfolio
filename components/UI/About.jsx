import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import classes from "../../styles/about.module.css";
function About() {
  return (
    <motion.section
      id="about"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.4, type: "tween" }}
    >
      <Container>
        <Row>
          <Col lg="12" md="12">
            <h2 className="about_me">About Me</h2>
            <p>
              A background in Bioinformatics which blends Microbiology and
              Computer Science piqued my interest in software development.
              <br /> A life long learner looking to bring valuable experience in
              research and development of refined projects into my next role.{" "}
              <br /> Aside from coding, I have several hobbies I am passionate
              about. I love video games, basketball and finance!
            </p>
            <motion.div
              className=" d-flex align-items-center gap-5"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4, type: "tween" }}
            >
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about_icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                    Problem Solver
                  </span>
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about_icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                    Collaborator
                  </span>
                </h6>
              </div>
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about_icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                    Enthusiastic
                  </span>
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about_icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                    Self Starter
                  </span>
                </h6>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}

export default About;
