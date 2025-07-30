import React from "react"
import PropTypes from "prop-types";
import styles from "./Button.module.scss"
import {convert_classVariant, convert_classIcon, convert_classBoxShadow} from "./convertClass.js";

const Button = ({ label, variant="portfolio", icon=true, boxShadow=true, disabled = false}) => {
  const classVariant = convert_classVariant(disabled,variant);
  const classIcon = convert_classIcon(icon);
  const classBoxShadow = convert_classBoxShadow(boxShadow);

  return (
    <button className={`${styles.common} ${styles[classVariant]} ${styles[classIcon]} ${styles[classBoxShadow]}`}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  icon: PropTypes.bool,
  boxShadow: PropTypes.bool,
  disabled: PropTypes.bool,
};

export { Button };