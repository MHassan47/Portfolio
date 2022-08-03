import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImg from "../../Docs/IMG_4460-removebg-preview.png";
import classes from "../../styles/hero.module.css";

function Hero() {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <motion.div
              className={`${classes.hero_content}`}
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.8, duration: 0.7, type: "tween" }}
            >
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I'm Mohamed Hassan</h2>
              <h5 className="mb-4">Full Stack Developer</h5>
              <p>
                I have a passion for writing great code and creating seamless
                user interfaces. I enjoy learning new technology to create
                bigger and better things!
              </p>
              <div>
                <button className="primary_btn">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://resume.creddle.io/resume/5blmgcavltr"
                  >
                    Visit Resume
                  </a>
                </button>
              </div>
            </motion.div>
          </Col>
          <Col lg="6" md="6">
            <motion.div
              className={`${classes.hero_img} text-end`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8, type: "tween" }}
            >
              <Image alt="hero-image" src={HeroImg} width="400" height="400" />
            </motion.div>
            {/* <div className={`${classes.hero_skills}`}>
              {" "}
              <h6>SKILLS</h6>
            </div>
            <div
              className={`${classes.hero_experience} d-flex align-item-center gap-3`}
            >
              <div className="bg-transparent">
                <h6>EXPERIENCE</h6>
              </div>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
