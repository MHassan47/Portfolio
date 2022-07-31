import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Link from "next/link";
import Image from "next/image";
function PortfolioItem(props) {
  const { title, description, img, code, liveUrl, keyword } = props.project;
  return (
    <div className={`${classes.portfolio_item}`}>
      <div className="bg-transparent">
        <h5>{title}</h5>
        <h6>{description}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.portfolio_keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>
      <div className={`${classes.portfolio_img} bg-transparent`}>
        <Image alt="portfolio_img" src={img} width="600" height="400" />
      </div>

      <div className={`${classes.portfolio_live} bg-transparent`}>
        <button className="primary_btn">
          <a target="_blank" href={code} rel="noopener noreferrer">
            <i className="ri-code-s-slash-fill bg-transparent"></i>
          </a>
        </button>
      </div>
    </div>
  );
}

export default PortfolioItem;
