import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "reactstrap";
import classes from "./header.module.css";
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
    path: "#skills",
    display: "Skills",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
  {
    path: "#experience",
    display: "Experience",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];
function Header() {
  const menuRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle(`${classes.menu_active}`);
  };
  return (
    <header
      className={`${classes.header}`}
      // initial={{ y: -200, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ delay: 0.2, duration: 0.4, type: "tween" }}
    >
      <Container>
        <div className={`${classes.nav_wrapper}`}>
          <div className={`${classes.logo}`}>
            <h1>
              <span>M</span>ohamed
            </h1>
          </div>

          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav_menu}`}>
              {NAV_LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}

              <div className={`${classes.nav_right}`}>
                {/* <p className="d-flex align-items-center gap-3 mb-0"></p> */}
              </div>
            </div>
          </div>
          <span className={`${classes.mobile_menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
}

export default Header;
