const convert_classVariant = (disabled,variant) => {
    return disabled ? "disabled" : variant ;
};

const convert_classIcon = (icon) => {
    return  icon ? "icon" : "";
};

const convert_classBoxShadow = (boxShadow) => {
   return boxShadow ? "boxShadow" : "";
};

export {convert_classVariant, convert_classIcon, convert_classBoxShadow}