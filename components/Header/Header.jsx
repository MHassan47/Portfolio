import React, { useEffect, useRef } from "react";

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
  const headerRef = useRef(null);

  const headerFunction = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunction);
    return () => window.removeEventListener("scroll", headerFunction);
  }, []);
  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav_wrapper}`}>
          <div className={`${classes.logo}`}>
            <h1>
              <span>M</span>ohamed
            </h1>
          </div>

          <div className={`${classes.navigation}`}>
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
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
