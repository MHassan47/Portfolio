import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import classes from "../../styles/contact.module.css";
import Form from "./Form";
function Contact() {
  return (
    <section id="contact">
      <Container>
        <Row>
          <h2 className={`${classes.contact_header}`}>Contact</h2>
          <Col lg="6" md="6">
            <h3>Contact Me</h3>
            <ul className={`${classes.contact_info_list}`}>
              <li className={`${classes.info_item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                  <p>Winnipeg,MB Canada</p>
                </span>
              </li>
              <li className={`${classes.info_item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                  <p>hassanm.dev@gmail.com</p>
                </span>
              </li>
              <li className={`${classes.info_item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                  <p>12045580283</p>
                </span>
              </li>
            </ul>
            <div className={`${classes.social_links}`}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/MHassan47"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/mhassan47/"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
            </div>
          </Col>
          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
