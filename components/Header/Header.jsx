import React from "react";
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
    path: "#portfolio",
    display: "Portfolio",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];
function Header() {
  return (
    <header className={`${classes.header}`}>
      <Container>
        <div className={`${classes.nav_wrapper}`}>
          <h1>
            <span>M</span>ohamed
          </h1>
        </div>
        <div className="{`${classes.navigation}`}">
          <div className="{`${classes.nav_menu}`}">
            {NAV_LINK.map((item, index) => (
              <Link href={item.path} key={index}>
                {item.display}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
