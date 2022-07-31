import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import classes from "../../styles/hero.module.css";

function Hero() {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.hero_content}`}>
              <SectionSubtitle subtitle="Hello" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
