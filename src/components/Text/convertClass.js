const convert_classWeight = (argsWeight) => {
  return  argsWeight === "100" ? "weight_100" :
          argsWeight === "200" ? "weight_200" :
          argsWeight === "300" ? "weight_300" :
          argsWeight === "400" ? "weight_400" :
          argsWeight === "500" ? "weight_500" :
          argsWeight === "600" ? "weight_600" :
          argsWeight === "700" ? "weight_700" :
          argsWeight === "800" ? "weight_800" :
          "weight_900"
}

const convert_classSize = (argsSize) => {
  return  argsSize === "XS" ? "size_xs" :
          argsSize === "S" ? "size_s" :
          argsSize === "M" ? "size_m" :
          argsSize === "L" ? "size_l" :
          "size_XL";
};

const convert_classTextColor = (argsColor) => {
  return  argsColor === "black" ? "textColor_black" :
          argsColor === "white" ? "textColor_white" :
          "textColor_gray";
}

const convert_classWhiteSpace = (argsWhiteSpace) => {
  return  argsWhiteSpace === "normal" ? "whiteSpace_normal" :
          argsWhiteSpace === "nowrap" ? "whiteSpace_nowrap" :
          argsWhiteSpace === "pre-line" ? "whiteSpace_preLine" :
          argsWhiteSpace === "pre" ? "whiteSpace_pre" :
          "whiteSpace_preWrap";
}

export {convert_classWeight, convert_classSize, convert_classTextColor, convert_classWhiteSpace}