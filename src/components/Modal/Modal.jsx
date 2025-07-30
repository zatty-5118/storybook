import { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import thumbnailPortfolio from "/public/images/modal/portfolio.jpg";
import thumbnailBlog from "/public/images/modal/blog.jpg";
import thumbnailGptdoc from "/public/images/modal/gptdoc.jpg";
import styles from "./Modal.module.scss";

const Modal = ({ size="max", title, description, periodStart, periodEnd, language, framework, library, image, url, disabled }) => {
  const modalSize = 
  size === "s" ? "s" :
  size === "m" ? "m" :
  size === "x" ? "x" :
  "max";

  const thumbnail = 
  image === "portfolio" ? thumbnailPortfolio :
  image === "blog" ? thumbnailBlog :
  thumbnailGptdoc;
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("hidden");
  };
  const modalContent = (
    <div className={styles.modal}>
      <div className={styles.modal_overlay} onClick={toggleModal}></div>
      <div className={`${styles.modal_wrapper} ${styles[modalSize]}`}>
        <div className={styles.modal_contents}>
          <div className={styles.modal_image}>
            <img src={thumbnail} alt={title} />
          </div>
          <div className={styles.modal_text}>
            <div className={styles.title}>
              <h3>{title}</h3>
            </div>
            <div className={styles.description}>
              <p>{description}</p>
            </div>
            <div className={styles.period}>
              <h4>制作期間</h4>
              <p>
                {new Date(periodStart).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                ～
                {new Date(periodEnd).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className={styles.skill}>
              <div>
                <h4>言語</h4>
                <p>{language}</p>
              </div>
              <div>
                <h4>フレームワーク</h4>
                <p>{framework}</p>
              </div>
              <div>
                <h4>ライブラリ</h4>
                <p>{library}</p>
              </div>
            </div>
            <div className={!disabled ? styles.link : styles.disabled}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {!disabled ? "詳細はこちら" : "Coming Soon"}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.modal_close}>
          <button onClick={toggleModal}></button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button onClick={toggleModal} className={styles.modal_open}>
        モーダルを開く
      </button>

      {isOpen && ReactDOM.createPortal(modalContent, document.body)}
    </>
  );
};
Modal.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  periodStart: PropTypes.date,
  periodEnd: PropTypes.date,
  language: PropTypes.string,
  framework: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Modal;