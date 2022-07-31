import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Link from "next/link";
import Image from "next/image";
function PortfolioItem(props) {
  const { title, img, liveUrl, keyword } = props.project;
  return (
    <div className={`${classes.portfolio_item}`}>
      <div>
        <h6>{title}</h6>
        {keyword.map((item, index) => {
          <span className={`${classes.portfolio_keyword}`} key={index}>
            {item}
          </span>;
        })}
      </div>
      <div className={`${classes.portfolio_img}`}>
        <Image alt="portfolio_img" src={img} width="600" height="400" />
      </div>

      <div className={`${classes.portfolio_live}`}>
        <button className="primary_btn">
          <Link href="#">Launch</Link>
        </button>
      </div>
    </div>
  );
}

export default PortfolioItem;
