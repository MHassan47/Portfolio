import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";
function PorfolioItem(props) {
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
        <Image alt="portfolio_img" src={img} width="300" height="300" />
      </div>
    </div>
  );
}

export default PorfolioItem;
