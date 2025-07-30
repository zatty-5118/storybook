import styles from "./Text.module.scss";
import PropTypes from "prop-types";
import {convert_classWeight, convert_classSize, convert_classTextColor, convert_classWhiteSpace} from "./convertClass.js"

const Text = ({sentence="つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。", weight="400", size="m",color="black",tag="p", whiteSpace="normal"}) => {
    const classWeight = convert_classWeight(weight);

    const classSize = convert_classSize(size);

    const classTextColor = convert_classTextColor(color);

    const classWhiteSpace = convert_classWhiteSpace(whiteSpace);

    return (
        <>
            {
                tag === "p" ? <p className={`${styles[classWeight]} ${styles[classSize]} ${styles[classWhiteSpace]} ${styles[classTextColor]}`}>{sentence}</p> :
                tag === "h1" ? <h1>{sentence}</h1> :
                tag === "h2" ? <h2>{sentence}</h2> :
                tag === "h3" ? <h3>{sentence}</h3> :
                <h4>{sentence}</h4>
            }
        </>
    
    );
};

Text.propTypes = {
  sentence: PropTypes.string,
};


export default Text;