import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import PortfolioData from "../PortfolioData";
import PortfolioItem from "./PortfolioItem";
function Portfolio() {
  const [element, controls] = useScroll();
  const container = {
    show: {
      transition: {
        staggerChildren: 0.55,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };
  return (
    <motion.section
      key="portfolio"
      ref={element}
      id="portfolio"
      variants={container}
      initial="hidden"
      animate="show"
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.6,
      }}
    >
      <Container>
        <Row>
          <h1>Portfolio</h1>

          {PortfolioData.map((project) => (
            <Col lg="4" md="4" key={project.id} className="mb-5">
              <PortfolioItem
                project={project}
                variants={item}
                controls={controls}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  );
}

export default Portfolio;
