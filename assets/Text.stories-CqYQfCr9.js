import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{P as C}from"./index-DE5Mc6xQ.js";import"./iframe-DoHEzy0U.js";const b="_size_xs_1t036_1",k="_size_s_1t036_4",f="_size_m_1t036_7",M="_size_l_1t036_10",v="_size_xl_1t036_13",j="_weight_100_1t036_17",L="_weight_200_1t036_20",D="_weight_300_1t036_23",X="_weight_400_1t036_26",q="_weight_500_1t036_29",V="_weight_600_1t036_32",P="_weight_700_1t036_35",H="_weight_800_1t036_38",E="_weight_900_1t036_41",N="_textColor_black_1t036_45",F="_textColor_white_1t036_48",I="_textColor_gray_1t036_51",O="_whiteSpace_normal_1t036_55",R="_whiteSpace_nowrap_1t036_58",A="_whiteSpace_preLine_1t036_61",B="_whiteSpace_pre_1t036_61",G="_whiteSpace_preWrap_1t036_67",z={size_xs:b,size_s:k,size_m:f,size_l:M,size_xl:v,weight_100:j,weight_200:L,weight_300:D,weight_400:X,weight_500:q,weight_600:V,weight_700:P,weight_800:H,weight_900:E,textColor_black:N,textColor_white:F,textColor_gray:I,whiteSpace_normal:O,whiteSpace_nowrap:R,whiteSpace_preLine:A,whiteSpace_pre:B,whiteSpace_preWrap:G},m=e=>e==="100"?"weight_100":e==="200"?"weight_200":e==="300"?"weight_300":e==="400"?"weight_400":e==="500"?"weight_500":e==="600"?"weight_600":e==="700"?"weight_700":e==="800"?"weight_800":"weight_900",$=e=>e==="XS"?"size_xs":e==="S"?"size_s":e==="M"?"size_m":e==="L"?"size_l":"size_XL",w=e=>e==="black"?"textColor_black":e==="white"?"textColor_white":"textColor_gray",_=e=>e==="normal"?"whiteSpace_normal":e==="nowrap"?"whiteSpace_nowrap":e==="pre-line"?"whiteSpace_preLine":e==="pre"?"whiteSpace_pre":"whiteSpace_preWrap",l=({sentence:e="つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",weight:p="400",size:t="m",color:h="black",tag:i="p",whiteSpace:g="normal"})=>{const r=m(p),n=$(t),a=w(h),c=_(g);return s.jsx(s.Fragment,{children:i==="p"?s.jsx("p",{className:`${z[r]} ${z[n]} ${z[c]} ${z[a]}`,children:e}):i==="h1"?s.jsx("h1",{children:e}):i==="h2"?s.jsx("h2",{children:e}):i==="h3"?s.jsx("h3",{children:e}):s.jsx("h4",{children:e})})};l.propTypes={sentence:C.string};l.__docgenInfo={description:"",methods:[],displayName:"Text",props:{sentence:{defaultValue:{value:'"つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。"',computed:!1},description:"",type:{name:"string"},required:!1},weight:{defaultValue:{value:'"400"',computed:!1},required:!1},size:{defaultValue:{value:'"m"',computed:!1},required:!1},color:{defaultValue:{value:'"black"',computed:!1},required:!1},tag:{defaultValue:{value:'"p"',computed:!1},required:!1},whiteSpace:{defaultValue:{value:'"normal"',computed:!1},required:!1}}};const Z={title:"Components/Text",component:l,parameters:{docs:{source:{type:"dynamic"}}},tags:["autodocs"],argTypes:{sentence:{control:"text",description:"テキスト",type:{summary:"string"}},weight:{control:{type:"select"},options:["100","200","300","400","500","600","700","800","900"],description:"フォントの太さ"},size:{control:"radio",options:["XS","S","M","L","XL"],description:"フォントの大きさ"},color:{control:"radio",options:["black","white","gray"],description:"フォントの色"},tag:{control:{type:"select"},options:["p","h1","h2","h3","h4"],description:"テキストのHTMLタグ"},whiteSpace:{control:"radio",options:["normal","nowrap","pre-line","pre","pre-wrap"],description:"改行やスペース、タブの扱いを指定する"}}},J=e=>s.jsx(l,{...e}),S=J.bind({});S.args={sentence:"つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",weight:"400",size:"M",color:"black",tag:"p",whiteSpace:"normal"};S.parameters={docs:{source:{language:"html",type:"dynamic",transform:(e,p)=>{const{sentence:t,weight:h,size:i,color:g,tag:r,whiteSpace:n}=p.args,a=m(h),c=$(i),o=w(g),x=_(n);return`${r==="p"?`<p class="${a} ${c} ${o} ${x}">${t}</p>`:r==="h1"?`<h1 class="${a} ${c} ${o} ${x}">${t}</h1>`:r==="h2"?`<h2 class="${a} ${c} ${o} ${x}">${t}</h2>`:r==="h3"?`<h3 class="${a} ${c} ${o} ${x}">${t}</h3>`:`<h4 class="${a} ${c} ${o} ${x}">${t}</h4>`}`}}}};const d={render:e=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsx(l,{...e}),s.jsx(l,{sentence:e.sentence,weight:"200",size:"M",color:"black",tag:"p",whiteSpace:"normal"}),s.jsx(l,{sentence:e.sentence,weight:"300",size:"M",color:"black",tag:"p",whiteSpace:"normal"}),s.jsx(l,{sentence:e.sentence,weight:"400",size:"M",color:"black",tag:"p",whiteSpace:"normal"}),s.jsx(l,{sentence:e.sentence,weight:"500",size:"M",color:"black",tag:"p",whiteSpace:"normal"}),s.jsx(l,{sentence:e.sentence,weight:"600",size:"M",color:"black",tag:"p",whiteSpace:"normal"}),s.jsx(l,{sentence:e.sentence,weight:"700",size:"M",color:"black",tag:"p",whiteSpace:"normal"}),s.jsx(l,{sentence:e.sentence,weight:"800",size:"M",color:"black",tag:"p",whiteSpace:"normal"}),s.jsx(l,{sentence:e.sentence,weight:"900",size:"M",color:"black",tag:"p",whiteSpace:"normal"})]}),args:{sentence:"つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",size:"M",color:"black",tag:"p",whiteSpace:"normal"},parameters:{docs:{source:{language:"html",type:"dynamic",transform:(e,p)=>{const{sentence:t,size:h,color:i,whiteSpace:g,weight:r}=p.args,n=$(h),a=w(i),c=_(g);return`
            <p class="weight_100 ${n} ${a} ${c}">${t}</p>
            <p class="weight_200 ${n} ${a} ${c}">${t}</p>
            <p class="weight_300 ${n} ${a} ${c}">${t}</p>
            <p class="weight_400 ${n} ${a} ${c}">${t}</p>
            <p class="weight_500 ${n} ${a} ${c}">${t}</p>
            <p class="weight_600 ${n} ${a} ${c}">${t}</p>
            <p class="weight_700 ${n} ${a} ${c}">${t}</p>
            <p class="weight_800 ${n} ${a} ${c}">${t}</p>
            <p class="weight_900 ${n} ${a} ${c}">${t}</p>
          `.trim()}}}}},u={render:e=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsx(l,{...e}),s.jsx(l,{sentence:e.sentence,weight:"400",size:"S",color:"black",tag:"p",whiteSpace:"normal"}),s.jsx(l,{sentence:e.sentence,weight:"400",size:"M",color:"black",tag:"p",whiteSpace:"normal"}),s.jsx(l,{sentence:e.sentence,weight:"400",size:"L",color:"black",tag:"p",whiteSpace:"normal"}),s.jsx(l,{sentence:e.sentence,weight:"400",size:"XL",color:"black",tag:"p",whiteSpace:"normal"})]}),args:{sentence:"つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",weight:"400",size:"XS",color:"black",tag:"p",whiteSpace:"normal"},parameters:{docs:{source:{language:"html",type:"dynamic",transform:(e,p)=>{const{sentence:t,weight:h,size:i,color:g,whiteSpace:r}=p.args,n=m(h),a=$(i),c=w(g),o=_(r);return`
            <p class="${n} ${a} ${c} ${o}">${t}</p>
            <p class="${n} size_s ${c} ${o}">${t}</p>
            <p class="${n} size_m ${c} ${o}">${t}</p>
            <p class="${n} size_l ${c} ${o}">${t}</p>
            <p class="${n} size_xl ${c} ${o}">${t}</p>
          `.trim()}}}}},T={render:e=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsx(l,{...e}),s.jsx(l,{sentence:e.sentence,weight:"400",size:"M",color:"gray",tag:"p",whiteSpace:"normal"}),s.jsx(l,{sentence:e.sentence,weight:"400",size:"M",color:"white",tag:"p",whiteSpace:"normal"})]}),args:{sentence:"つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",weight:"400",size:"M",tag:"p",whiteSpace:"normal"},parameters:{docs:{source:{language:"html",type:"dynamic",transform:(e,p)=>{const{sentence:t,weight:h,size:i,color:g,whiteSpace:r}=p.args,n=m(h),a=$(i),c=w(g),o=_(r);return`
            <p class="${n} ${a} ${c}${o}">${t}</p>
            <p class="${n} ${a} textColor_gray ${o}">${t}</p>
            <p class="${n} ${a} textColor_white ${o}">${t}</p>
          `.trim()}}}}},W={render:e=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsx(l,{...e}),s.jsx(l,{sentence:e.sentence,weight:"400",size:"M",color:"black",tag:"h2",whiteSpace:"normal"}),s.jsx(l,{sentence:e.sentence,weight:"400",size:"M",color:"black",tag:"h3",whiteSpace:"normal"}),s.jsx(l,{sentence:e.sentence,weight:"400",size:"M",color:"black",tag:"h4",whiteSpace:"normal"}),s.jsx(l,{sentence:e.sentence,weight:"400",size:"M",color:"black",tag:"p",whiteSpace:"normal"})]}),args:{sentence:"つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",weight:"400",size:"M",color:"black",whiteSpace:"normal",tag:"h1"},parameters:{docs:{source:{language:"html",type:"dynamic",transform:(e,p)=>{const{sentence:t,weight:h,size:i,color:g,whiteSpace:r}=p.args,n=m(h),a=$(i),c=w(g),o=_(r);return`
            <h1 class="${n} ${a} ${c} ${o}">${t}</h1>
            <h2 class="${n} ${a} ${c} ${o}">${t}</h2>
            <h3 class="${n} ${a} ${c} ${o}">${t}</h3>
            <h4 class="${n} ${a} ${c} ${o}">${t}</h4>
            <p class="${n} ${a} ${c} ${o}">${t}</p>
          `.trim()}}}}},y={render:e=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsx(l,{...e}),s.jsx(l,{sentence:e.sentence,weight:"400",size:"M",color:"black",tag:"p",whiteSpace:"nowrap"}),s.jsx(l,{sentence:e.sentence,weight:"400",size:"M",color:"black",tag:"p",whiteSpace:"pre-line"}),s.jsx(l,{sentence:e.sentence,weight:"400",size:"M",color:"black",tag:"p",whiteSpace:"pre"}),s.jsx(l,{sentence:e.sentence,weight:"400",size:"M",color:"black",tag:"p",whiteSpace:"pre-wrap"})]}),args:{sentence:"つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",weight:"400",size:"M",color:"black",whiteSpace:"normal",tag:"p"},parameters:{docs:{source:{language:"html",type:"dynamic",transform:(e,p)=>{const{sentence:t,weight:h,size:i,color:g,whiteSpace:r}=p.args,n=m(h),a=$(i),c=w(g),o=_(r);return`
            <p class="${n} ${a} ${c} ${o}">${t}</p>
            <p class="${n} ${a} ${c} whiteSpace_nowrap">${t}</p>
            <p class="${n} ${a} ${c} whiteSpace_preLine">${t}</p>
            <p class="${n} ${a} ${c} whiteSpace_pre">${t}</p>
            <p class="${n} ${a} ${c} whiteSpace_preWrap">${t}</p>
          `.trim()}}}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"args => <Text {...args} />",...S.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
      <Text {...args} />
      <Text sentence={args.sentence} weight="200" size="M" color="black" tag="p" whiteSpace="normal" />
      <Text sentence={args.sentence} weight="300" size="M" color="black" tag="p" whiteSpace="normal" />
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="p" whiteSpace="normal" />
      <Text sentence={args.sentence} weight="500" size="M" color="black" tag="p" whiteSpace="normal" />
      <Text sentence={args.sentence} weight="600" size="M" color="black" tag="p" whiteSpace="normal" />
      <Text sentence={args.sentence} weight="700" size="M" color="black" tag="p" whiteSpace="normal" />
      <Text sentence={args.sentence} weight="800" size="M" color="black" tag="p" whiteSpace="normal" />
      <Text sentence={args.sentence} weight="900" size="M" color="black" tag="p" whiteSpace="normal" />

    </div>,
  args: {
    sentence: "つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",
    size: "M",
    color: "black",
    tag: "p",
    whiteSpace: "normal"
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {
            sentence,
            size,
            color,
            whiteSpace,
            weight
          } = ctx.args;
          const classWeight = convert_classWeight(weight);
          const classSize = convert_classSize(size);
          const classTextColor = convert_classTextColor(color);
          const classWhiteSpace = convert_classWhiteSpace(whiteSpace);
          return \`
            <p class="weight_100 \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
            <p class="weight_200 \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
            <p class="weight_300 \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
            <p class="weight_400 \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
            <p class="weight_500 \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
            <p class="weight_600 \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
            <p class="weight_700 \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
            <p class="weight_800 \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
            <p class="weight_900 \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
          \`.trim();
        }
      }
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
      <Text {...args} />
      <Text sentence={args.sentence} weight="400" size="S" color="black" tag="p" whiteSpace="normal" />
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="p" whiteSpace="normal" />
      <Text sentence={args.sentence} weight="400" size="L" color="black" tag="p" whiteSpace="normal" />
      <Text sentence={args.sentence} weight="400" size="XL" color="black" tag="p" whiteSpace="normal" />
    </div>,
  args: {
    sentence: "つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",
    weight: "400",
    size: "XS",
    color: "black",
    tag: "p",
    whiteSpace: "normal"
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {
            sentence,
            weight,
            size,
            color,
            whiteSpace
          } = ctx.args;
          const classWeight = convert_classWeight(weight);
          const classSize = convert_classSize(size);
          const classTextColor = convert_classTextColor(color);
          const classWhiteSpace = convert_classWhiteSpace(whiteSpace);
          return \`
            <p class="\${classWeight} \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
            <p class="\${classWeight} size_s \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
            <p class="\${classWeight} size_m \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
            <p class="\${classWeight} size_l \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
            <p class="\${classWeight} size_xl \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
          \`.trim();
        }
      }
    }
  }
}`,...u.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
      <Text {...args} />
      <Text sentence={args.sentence} weight="400" size="M" color="gray" tag="p" whiteSpace="normal" />
      <Text sentence={args.sentence} weight="400" size="M" color="white" tag="p" whiteSpace="normal" />
    </div>,
  args: {
    sentence: "つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",
    weight: "400",
    size: "M",
    tag: "p",
    whiteSpace: "normal"
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {
            sentence,
            weight,
            size,
            color,
            whiteSpace
          } = ctx.args;
          const classWeight = convert_classWeight(weight);
          const classSize = convert_classSize(size);
          const classTextColor = convert_classTextColor(color);
          const classWhiteSpace = convert_classWhiteSpace(whiteSpace);
          return \`
            <p class="\${classWeight} \${classSize} \${classTextColor}\${classWhiteSpace}">\${sentence}</p>
            <p class="\${classWeight} \${classSize} textColor_gray \${classWhiteSpace}">\${sentence}</p>
            <p class="\${classWeight} \${classSize} textColor_white \${classWhiteSpace}">\${sentence}</p>
          \`.trim();
        }
      }
    }
  }
}`,...T.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
      <Text {...args} />
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="h2" whiteSpace="normal" />
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="h3" whiteSpace="normal" />
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="h4" whiteSpace="normal" />
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="p" whiteSpace="normal" />
    </div>,
  args: {
    sentence: "つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",
    weight: "400",
    size: "M",
    color: "black",
    whiteSpace: "normal",
    tag: "h1"
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {
            sentence,
            weight,
            size,
            color,
            whiteSpace
          } = ctx.args;
          const classWeight = convert_classWeight(weight);
          const classSize = convert_classSize(size);
          const classTextColor = convert_classTextColor(color);
          const classWhiteSpace = convert_classWhiteSpace(whiteSpace);
          return \`
            <h1 class="\${classWeight} \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</h1>
            <h2 class="\${classWeight} \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</h2>
            <h3 class="\${classWeight} \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</h3>
            <h4 class="\${classWeight} \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</h4>
            <p class="\${classWeight} \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
          \`.trim();
        }
      }
    }
  }
}`,...W.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
      <Text {...args} />
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="p" whiteSpace="nowrap" />
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="p" whiteSpace="pre-line" />
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="p" whiteSpace="pre" />
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="p" whiteSpace="pre-wrap" />
    </div>,
  args: {
    sentence: "つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",
    weight: "400",
    size: "M",
    color: "black",
    whiteSpace: "normal",
    tag: "p"
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {
            sentence,
            weight,
            size,
            color,
            whiteSpace
          } = ctx.args;
          const classWeight = convert_classWeight(weight);
          const classSize = convert_classSize(size);
          const classTextColor = convert_classTextColor(color);
          const classWhiteSpace = convert_classWhiteSpace(whiteSpace);
          return \`
            <p class="\${classWeight} \${classSize} \${classTextColor} \${classWhiteSpace}">\${sentence}</p>
            <p class="\${classWeight} \${classSize} \${classTextColor} whiteSpace_nowrap">\${sentence}</p>
            <p class="\${classWeight} \${classSize} \${classTextColor} whiteSpace_preLine">\${sentence}</p>
            <p class="\${classWeight} \${classSize} \${classTextColor} whiteSpace_pre">\${sentence}</p>
            <p class="\${classWeight} \${classSize} \${classTextColor} whiteSpace_preWrap">\${sentence}</p>
          \`.trim();
        }
      }
    }
  }
}`,...y.parameters?.docs?.source}}};const ee=["Primary","Weight","Size","Color","Tag","WhiteSpace"];export{T as Color,S as Primary,u as Size,W as Tag,d as Weight,y as WhiteSpace,ee as __namedExportsOrder,Z as default};
