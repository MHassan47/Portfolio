import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import classes from "../../styles/about.module.css";
function About() {
  return (
    <motion.section
      id="about"
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ delay: 1.1, duration: 0.8, type: "tween" }}
    >
      <Container>
        <Row>
          <Col lg="12" md="12">
            <h2 className="about_me">About Me</h2>
            <p>
              After some exposure to interdisciplinary projects blending
              computer science and life science, I became inspired to pivot from
              an academic background in Microbiology and Chemistry into the
              world of tech! I am a life long learner who is looking to utilize
              valuable experience in research, development and execution of
              refined projects into the tech space. <br /> Aside from coding, I
              have several hobbies I am passionate about. I love video games,
              basketball and finance!
            </p>
            <motion.div
              className=" d-flex align-items-center gap-5"
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ delay: 1.4, duration: 1, type: "tween" }}
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
                    Self starter
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
