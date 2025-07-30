import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{P as v}from"./index-DE5Mc6xQ.js";import"./iframe-DoHEzy0U.js";const p="_header_1xe6d_1",f="_portfolio_1xe6d_7",u="_blog_1xe6d_11",_="_glassmorphism_1xe6d_15",k="_menu_1xe6d_20",x="_link_1xe6d_20",w="_menu_item_1xe6d_26",b="_wrapper_1xe6d_34",y="_logo_1xe6d_60",j="_work_1xe6d_115",$="_about_1xe6d_119",L="_skill_1xe6d_123",N="_news_1xe6d_127",e={header:p,portfolio:f,blog:u,glassmorphism:_,menu:k,link:x,menu_item:w,wrapper:b,logo:y,work:j,about:$,skill:L,news:N},I="/storybook-static/assets/header_portfolio_logo.BfTV-NT9.svg",P="/storybook-static/assets/header_blog_logo.CFgThm3p.svg",S="/storybook-static/assets/footer_portfolio_logo.DwCrFgXi.svg",V="/storybook-static/assets/footer_blog_logo.BTRVzY2k.svg",l=({variant:a="portfolio",glassmorphism:r=!1})=>{const o=a==="portfolio"&&!r?I:a==="portfolio"&&r?S:a==="blog"&&!r?P:V,i=r?"glassmorphism":a;return s.jsx("header",{id:"header",className:`${e.header} ${e[i]}`,children:s.jsxs("div",{className:e.wrapper,children:[s.jsx("div",{className:e.logo,children:s.jsx("a",{href:"/",children:s.jsx("img",{src:o,alt:"ヘッダーロゴ",className:e.logoImg})})}),a==="portfolio"?s.jsxs("div",{className:e.menu,children:[s.jsx("div",{className:`${e.link} ${e.work}`,children:s.jsx("a",{href:"#work",children:"Work List"})}),s.jsx("div",{className:`${e.link} ${e.about}`,children:s.jsx("a",{href:"#about",children:"About Me"})}),s.jsx("div",{className:`${e.link} ${e.skill}`,children:s.jsx("a",{href:"#skill",children:"Skill List"})}),s.jsx("div",{className:`${e.link} ${e.news}`,children:s.jsx("a",{href:"#news",children:"News List"})})]}):s.jsxs("div",{className:e.menu,children:[s.jsx("div",{className:e.menu_item,children:s.jsx("a",{href:"",children:"全ての記事"})}),s.jsx("div",{className:e.menu_item,children:s.jsx("a",{href:"",children:"プロフィール"})})]})]})})};l.propTypes={variant:v.string};l.__docgenInfo={description:"",methods:[],displayName:"Header",props:{variant:{defaultValue:{value:'"portfolio"',computed:!1},description:"",type:{name:"string"},required:!1},glassmorphism:{defaultValue:{value:"false",computed:!1},required:!1}}};const G={title:"Components/Header",component:l,parameters:{docs:{source:{type:"dynamic"}}},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["portfolio","blog"],description:"ヘッダーのスタイル",type:{summary:"string"}},glassmorphism:{control:"boolean",description:"グラスモーフィズムの適用 / 非適用",type:{summary:"boolean"},defaultValue:!1}}},B=a=>s.jsx(l,{...a}),n=B.bind({});n.args={variant:"portfolio",glassmorphism:!1};n.parameters={docs:{source:{language:"html",type:"dynamic",transform:(a,r)=>{const{variant:o,glassmorphism:i}=r.args,d=o==="portfolio"?"/images/header/header_portfolio_logo.svg":"/images/header/header_blog_logo.svg",t=i?"glassmorphism":o,m=`
          <header id="header" class="header ${t}">
            <div class="wrapper">
              <div class="logo">
                <a href="/">
                  <img src="${d}" alt="ヘッダーロゴ" class="logoImg" />
                </a>
              </div>
              <div class="menu">
                <div class="link work">
                  <a href="#work">Work List</a>
                </div>
                <div class="link about">
                  <a href="#about">About Me</a>
                </div>
                <div class="link skill">
                  <a href="#skill">Skill List</a>
                </div>
                <div class="link news">
                  <a href="#news">News List</a>
                </div>
              </div>
            </div>
          </header>
        `,h=`
          <header id="header" class="header ${t}">
            <div class="wrapper">
              <div class="logo">
                <a href="/">
                  <img src="${d}" alt="ヘッダーロゴ" class="logoImg" />
                </a>
              </div>
              <div class="menu">
                <div class="menu_item">
                  <a href="/article/list/page=1">全ての記事</a>
                </div>
                <div class="menu_item">
                  <a href="/profile">プロフィール</a>
                </div>
              </div>
            </div>
          </header>
        `;return o==="portfolio"?m:h}}}};const c={render:a=>s.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[s.jsx(l,{variant:"portfolio"}),s.jsx(l,{variant:"blog"})]}),parameters:{docs:{source:{language:"html",type:"dynamic",transform:(a,r)=>{const{variant:o}=r.args,i=o==="portfolio"?"/images/header/header_portfolio_logo.svg":"/images/header/header_blog_logo.svg",d=`
            <header id="header" class="header">
              <div class="wrapper">
                <div class="logo">
                  <a href="/">
                    <img src="${i}" alt="ヘッダーロゴ" class="logoImg" />
                  </a>
                </div>
                <div class="menu">
                  <div class="link work">
                    <a href="#work">Work List</a>
                  </div>
                  <div class="link about">
                    <a href="#about">About Me</a>
                  </div>
                  <div class="link skill">
                    <a href="#skill">Skill List</a>
                  </div>
                  <div class="link news">
                    <a href="#news">News List</a>
                  </div>
                </div>
              </div>
            </header>
          `,t=`
            <header id="header" class="header">
              <div class="wrapper">
                <div class="logo">
                  <a href="/">
                    <img src="${i}" alt="ヘッダーロゴ" class="logoImg" />
                  </a>
                </div>
                <div class="menu">
                  <div class="menu_item">
                    <a href="/article/list/page=1">全ての記事</a>
                  </div>
                  <div class="menu_item">
                    <a href="/profile">プロフィール</a>
                  </div>
                </div>
              </div>
            </header>
          `;return`${d} ${t}`}}}}},g={render:a=>s.jsx("div",{style:{display:"flex",gap:"1rem"},children:s.jsx(l,{...a})}),args:{variant:"portfolio",glassmorphism:!0},parameters:{docs:{source:{language:"html",type:"dynamic",transform:(a,r)=>{const{variant:o,glassmorphism:i}=r.args;return`${`
            <header id="header" class="header glassmorphism">
              <div class="wrapper">
                <div class="logo">
                  <a href="/">
                    <img src="${o==="portfolio"?"/images/header/header_portfolio_logo.svg":"/images/header/header_blog_logo.svg"}" alt="ヘッダーロゴ" class="logoImg" />
                  </a>
                </div>
                <div class="menu">
                  <div class="link work">
                    <a href="#work">Work List</a>
                  </div>
                  <div class="link about">
                    <a href="#about">About Me</a>
                  </div>
                  <div class="link skill">
                    <a href="#skill">Skill List</a>
                  </div>
                  <div class="link news">
                    <a href="#news">News List</a>
                  </div>
                </div>
              </div>
            </header>
          `}`}}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <Header {...args} />",...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "1rem"
  }}>
      <Header variant="portfolio" />
      <Header variant="blog" />
    </div>,
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {
            variant
          } = ctx.args;
          const logo = variant === "portfolio" ? "/images/header/header_portfolio_logo.svg" : "/images/header/header_blog_logo.svg";
          const headerPortfolio = \`
            <header id="header" class="header">
              <div class="wrapper">
                <div class="logo">
                  <a href="/">
                    <img src="\${logo}" alt="ヘッダーロゴ" class="logoImg" />
                  </a>
                </div>
                <div class="menu">
                  <div class="link work">
                    <a href="#work">Work List</a>
                  </div>
                  <div class="link about">
                    <a href="#about">About Me</a>
                  </div>
                  <div class="link skill">
                    <a href="#skill">Skill List</a>
                  </div>
                  <div class="link news">
                    <a href="#news">News List</a>
                  </div>
                </div>
              </div>
            </header>
          \`;
          const headerBlog = \`
            <header id="header" class="header">
              <div class="wrapper">
                <div class="logo">
                  <a href="/">
                    <img src="\${logo}" alt="ヘッダーロゴ" class="logoImg" />
                  </a>
                </div>
                <div class="menu">
                  <div class="menu_item">
                    <a href="/article/list/page=1">全ての記事</a>
                  </div>
                  <div class="menu_item">
                    <a href="/profile">プロフィール</a>
                  </div>
                </div>
              </div>
            </header>
          \`;
          return \`\${headerPortfolio} \${headerBlog}\`;
        }
      }
    }
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "1rem"
  }}>
      <Header {...args} />
    </div>,
  args: {
    variant: "portfolio",
    glassmorphism: true
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {
            variant,
            glassmorphism
          } = ctx.args;
          const logo = variant === "portfolio" ? "/images/header/header_portfolio_logo.svg" : "/images/header/header_blog_logo.svg";
          const headerGlass = \`
            <header id="header" class="header glassmorphism">
              <div class="wrapper">
                <div class="logo">
                  <a href="/">
                    <img src="\${logo}" alt="ヘッダーロゴ" class="logoImg" />
                  </a>
                </div>
                <div class="menu">
                  <div class="link work">
                    <a href="#work">Work List</a>
                  </div>
                  <div class="link about">
                    <a href="#about">About Me</a>
                  </div>
                  <div class="link skill">
                    <a href="#skill">Skill List</a>
                  </div>
                  <div class="link news">
                    <a href="#news">News List</a>
                  </div>
                </div>
              </div>
            </header>
          \`;
          return \`\${headerGlass}\`;
        }
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const M=["Primary","Variant","Glassmorphism"];export{g as Glassmorphism,n as Primary,c as Variant,M as __namedExportsOrder,G as default};
