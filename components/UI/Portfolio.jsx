import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import PortfolioData from "../PortfolioData";
import PortfolioItem from "./PortfolioItem";
function Portfolio() {
  console.log(PortfolioData);
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <h1>Portfolio</h1>

          {PortfolioData.map((project) => (
            <Col lg="4" md="4" key={project.id} className="mb-5">
              <PortfolioItem project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
