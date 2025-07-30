import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DoHEzy0U.js";import{P as x}from"./index-DE5Mc6xQ.js";const w="_common_vcz3u_1",$="_portfolio_vcz3u_8",_="_blog_vcz3u_22",B="_storybook_vcz3u_36",I="_icon_vcz3u_50",V="_boxShadow_vcz3u_60",j="_disabled_vcz3u_63",h={common:w,portfolio:$,blog:_,storybook:B,icon:I,boxShadow:V,disabled:j},g=(a,o)=>a?"disabled":o,m=a=>a?"icon":"",p=a=>a?"boxShadow":"",i=({label:a,variant:o="portfolio",icon:n=!0,boxShadow:r=!0,disabled:l=!1})=>{const c=g(l,o),s=m(n),t=p(r);return e.jsx("button",{className:`${h.common} ${h[c]} ${h[s]} ${h[t]}`,children:a})};i.propTypes={label:x.string.isRequired,variant:x.string,icon:x.bool,boxShadow:x.bool,disabled:x.bool};i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"portfolio"',computed:!1},description:"",type:{name:"string"},required:!1},icon:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},boxShadow:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"string"},required:!0}}};const T={title:"Components/Button",component:i,parameters:{docs:{source:{type:"dynamic"}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"ボタンに表示されるテキスト",type:{summary:"string"}},variant:{control:"radio",options:["portfolio","blog","storybook"],description:"ボタンのスタイル",type:{summary:"string"}},icon:{control:"boolean",description:"アイコンの有無",type:{summary:"boolean"},defaultValue:!1},boxShadow:{control:"boolean",description:"box-shadowの有無",type:{summary:"boolean"},defaultValue:!1},disabled:{control:"boolean",description:"ボタンの活性 / 非活性",type:{summary:"boolean"},defaultValue:!1}}},k=a=>e.jsx(i,{...a}),u=k.bind({});u.args={label:"詳しくはこちら",variant:"portfolio",icon:!0,boxShadow:!0,disabled:!1};u.parameters={docs:{source:{language:"html",type:"dynamic",transform:(a,o)=>{const{label:n,variant:r,icon:l,boxShadow:c,disabled:s}=o.args,t=g(s,r),d=m(l),b=p(c);return`<button class="${t} ${d} ${b}">${n}</button>`}}}};const f={render:a=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{...a,label:a.label}),e.jsx(i,{label:a.label,variant:"blog",icon:"true",boxShadow:"true"}),e.jsx(i,{label:a.label,variant:"storybook",icon:"true",boxShadow:"true"})]}),args:{label:"詳細はこちら",variant:"portfolio",icon:!0,boxShadow:!0,disabled:!1},parameters:{docs:{source:{language:"html",type:"dynamic",transform:(a,o)=>{const{label:n,icon:r,boxShadow:l,variant:c}=o.args,s=m(r),t=p(l);return`
            <button class="portfolio ${s} ${t}">${n}</button>
            <button class="blog ${s} ${t}">${n}</button>
            <button class="stroybook ${s} ${t}">${n}</button>
          `.trim()}}}}},y={render:a=>e.jsx("div",{style:{display:"flex",gap:"1rem"},children:e.jsx(i,{...a,label:a.label})}),args:{label:"詳細はこちら",variant:"portfolio",icon:!1,boxShadow:!0,disabled:!1},parameters:{docs:{source:{language:"html",type:"dynamic",transform:(a,o)=>{const{label:n,variant:r,icon:l,boxShadow:c,disabled:s}=o.args,t=g(s,r),d=m(l),b=p(c);return`
            <button class="${t} ${d} ${b}">${n}</button>
          `.trim()}}}}},v={render:a=>e.jsx("div",{style:{display:"flex",gap:"1rem"},children:e.jsx(i,{...a,label:a.label})}),args:{label:"詳細はこちら",variant:"portfolio",icon:!0,boxShadow:!1,disabled:!1},parameters:{docs:{source:{language:"html",type:"dynamic",transform:(a,o)=>{const{label:n,variant:r,icon:l,boxShadow:c,disabled:s}=o.args,t=g(s,r),d=m(l),b=p(c);return`
            <button class="${t} ${d} ${b}">${n}</button>
          `.trim()}}}}},S={render:a=>e.jsx("div",{style:{display:"flex",gap:"1rem"},children:e.jsx(i,{...a,label:a.label})}),args:{label:"詳細はこちら",variant:"portfolio",icon:!0,boxShadow:!0,disabled:!0},parameters:{docs:{source:{language:"html",type:"dynamic",transform:(a,o)=>{const{label:n,variant:r,icon:l,boxShadow:c,disabled:s}=o.args,t=g(s,r),d=m(l),b=p(c);return`
            <button class="${t} ${d} ${b}">${n}</button>
          `.trim()}}}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "1rem"
  }}>
      <Button {...args} label={args.label} />
      <Button label={args.label} variant="blog" icon="true" boxShadow="true" />
      <Button label={args.label} variant="storybook" icon="true" boxShadow="true" />
    </div>,
  args: {
    label: "詳細はこちら",
    variant: "portfolio",
    icon: true,
    boxShadow: true,
    disabled: false
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {
            label,
            icon,
            boxShadow,
            variant
          } = ctx.args;
          const classIcon = convert_classIcon(icon);
          const classBoxShadow = convert_classBoxShadow(boxShadow);
          return \`
            <button class="portfolio \${classIcon} \${classBoxShadow}">\${label}</button>
            <button class="blog \${classIcon} \${classBoxShadow}">\${label}</button>
            <button class="stroybook \${classIcon} \${classBoxShadow}">\${label}</button>
          \`.trim();
        }
      }
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "1rem"
  }}>
      <Button {...args} label={args.label} />
    </div>,
  args: {
    label: "詳細はこちら",
    variant: "portfolio",
    icon: false,
    boxShadow: true,
    disabled: false
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {
            label,
            variant,
            icon,
            boxShadow,
            disabled
          } = ctx.args;
          const classVariant = convert_classVariant(disabled, variant);
          const classIcon = convert_classIcon(icon);
          const classBoxShadow = convert_classBoxShadow(boxShadow);
          return \`
            <button class="\${classVariant} \${classIcon} \${classBoxShadow}">\${label}</button>
          \`.trim();
        }
      }
    }
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "1rem"
  }}>
      <Button {...args} label={args.label} />
    </div>,
  args: {
    label: "詳細はこちら",
    variant: "portfolio",
    icon: true,
    boxShadow: false,
    disabled: false
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {
            label,
            variant,
            icon,
            boxShadow,
            disabled
          } = ctx.args;
          const classVariant = convert_classVariant(disabled, variant);
          const classIcon = convert_classIcon(icon);
          const classBoxShadow = convert_classBoxShadow(boxShadow);
          return \`
            <button class="\${classVariant} \${classIcon} \${classBoxShadow}">\${label}</button>
          \`.trim();
        }
      }
    }
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "1rem"
  }}>
      <Button {...args} label={args.label} />
    </div>,
  args: {
    label: "詳細はこちら",
    variant: "portfolio",
    icon: true,
    boxShadow: true,
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {
            label,
            variant,
            icon,
            boxShadow,
            disabled
          } = ctx.args;
          const classVariant = convert_classVariant(disabled, variant);
          const classIcon = convert_classIcon(icon);
          const classBoxShadow = convert_classBoxShadow(boxShadow);
          return \`
            <button class="\${classVariant} \${classIcon} \${classBoxShadow}">\${label}</button>
          \`.trim();
        }
      }
    }
  }
}`,...S.parameters?.docs?.source}}};const D=["Primary","Variant","Icon","BoxShadow","Disabled"];export{v as BoxShadow,S as Disabled,y as Icon,u as Primary,f as Variant,D as __namedExportsOrder,T as default};
