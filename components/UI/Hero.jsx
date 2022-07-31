import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../Docs/IMG_4460-removebg-preview.png";
import classes from "../../styles/hero.module.css";

function Hero() {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.hero_content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I'm Mohamed Hassan</h2>
              <h5 className="mb-4">Full Stack Developer</h5>
              <p>
                I am passionate about writing great code and creating seamless
                user interfaces
              </p>
              <div>
                <button className="primary_btn">
                  <Link href="#">Download Resume</Link>
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className={`${classes.hero_img} text-end`}>
              <Image alt="hero-image" src={HeroImg} width="400" height="400" />
            </div>
            <div className={`${classes.hero_skills}`}>SKILLS</div>
            <div
              className={`${classes.hero_experience} d-flex align-item-center gap-3`}
            >
              <div className="bg-transparent">
                <h6>EXPERIENCE</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
