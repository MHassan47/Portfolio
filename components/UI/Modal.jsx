import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import classes from "../../styles/modal.module.css";

function Modal({ videoSrc, onClose }) {
  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (event.target.classList.contains(classes.modal)) {
        onClose();
      }
    };

    window.addEventListener("click", handleClickOutsideModal);

    return () => {
      window.removeEventListener("click", handleClickOutsideModal);
    };
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="modal"
        className={classes.modal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.video
          key="video"
          className={classes.video}
          src={videoSrc}
          autoPlay
          loop
          controls
          defaultPlaybackRate={2}
        />
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export default Modal;
