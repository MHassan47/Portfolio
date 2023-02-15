import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
function PortfolioItem(props) {
  const { title, description, img, preview, code, liveUrl, keyword } =
    props.project;
  const [isPreview, setIsPreview] = useState(false);
  console.log(preview);
  const onClose = () => {
    setIsPreview(false);
  };
  return (
    <motion.div
      key="portfolioItem"
      className={`${classes.portfolio_item}`}
      variants={props.variants}
      animate={props.controls}
    >
      <div className="bg-transparent">
        <h5>{title}</h5>
        <h6>{description}</h6>
        <div className={`${classes.portfolio_keyword_container}`}>
          {keyword.map((item, index) => (
            <span className={`${classes.portfolio_keyword}`} key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className={`${classes.portfolio_img} bg-transparent`}>
        <Image alt="portfolio_img" src={img} width="600" height="400" />
        {/* <video alt="portfolio_video" src={preview} autoPlay />; */}
      </div>

      <div className={`${classes.portfolio_live} bg-transparent`}>
        <a
          style={{ textDecoration: "none", color: "#01d293" }}
          className="primary_btn"
          target="_blank"
          href={code}
          rel="noopener noreferrer"
        >
          <i className="ri-code-s-slash-fill bg-transparent"></i>
        </a>

        {liveUrl && (
          <a
            style={{ textDecoration: "none", color: "#01d293" }}
            className="primary_btn"
            target="_blank"
            href={liveUrl}
            rel="noopener noreferrer"
          >
            Live App
          </a>
        )}
        {preview && (
          <button className="primary_btn" onClick={() => setIsPreview(true)}>
            Preview
          </button>
        )}
      </div>
      {isPreview && <Modal videoSrc={preview} onClose={onClose} />}
    </motion.div>
  );
}

export default PortfolioItem;
