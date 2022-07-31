import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import Link from "next/link";
const NAV_LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.nav_menu}`}>
              {NAV_LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}

              <div className={`${classes.nav_right}`}>
                <p className="d-flex align-items-center gap-3 mb-0">
                  <i className="ri-phone-fill"></i> +12045580283
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className={`${classes.footer_creator}`}>
              <h6> Created by Mohamed</h6>
            </div>
          </Col>
          <Col lg="12">
            <div className={`${classes.footer_copyright}`}>
              <p>
                &copy; Copyright {year} -Developed by Mohamed Hassan. All rights
                reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
