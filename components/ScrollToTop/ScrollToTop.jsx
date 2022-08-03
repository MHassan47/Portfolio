import React, { useState, useEffect } from "react";
import classes from "../../styles/scrollToTop.module.css";
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {visible && (
        <div className={`${classes.scrollToTop}`}>
          <button onClick={scrollUp}>
            <i className="ri-arrow-up-s-line"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;

// const toggleVisible = () => {
//   const scrolled = document.documentElement.scrollTop;
//   if (scrolled <= 300) {
//     setVisible(true);
//   } else {
//     setVisible(false);
//   }
// };

// useEffect(() => {
//   var scrollToTop = () => {
//     window.scrollToTop({ top: 0 });
//   };
//   window.addEventListener("scroll", toggleVisible);
// }, []);
// return (
//   <>
//     {visible && (
//       <div className="scrollToTop">
//         <i class="ri-arrow-up-s-line"></i>
//       </div>
//     )}
//   </>
// );
