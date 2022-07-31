import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import classes from "./about.module.css";
function About() {
  return (
    <>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <h2 className="about_me">About Me</h2>
            <p>
              Exposure to interdisciplinary projects blending computer science
              and life science prompted a pivot from an academic background in
              Microbiology and Chemistry. I am a life long learner who is
              looking to utilize valuable experience in research, development
              and execution of refined projects into the tech space.
            </p>
            <div className=" d-flex align-items-center gap-5">
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
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
