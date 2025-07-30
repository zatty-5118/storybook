import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{P as l}from"./index-DE5Mc6xQ.js";import"./iframe-DoHEzy0U.js";const c="_footer_1mshe_1",d="_scrollTop_1mshe_4",p="_myContents_1mshe_24",g="_blog_1mshe_28",m="_title_1mshe_31",v="_image_1mshe_57",f="_text_1mshe_65",h="_copyRight_1mshe_68",t={footer:c,scrollTop:d,myContents:p,blog:g,title:m,image:v,text:f,copyRight:h},r=({variant:s="portfolio"})=>o.jsxs("footer",{className:t.footer,children:[o.jsx("div",{className:t.scrollTop,children:o.jsx("a",{href:"",children:"↑ページTOPへ"})}),o.jsxs("div",{className:t.wrapper,children:[o.jsx("div",{className:`${t.myContents} ${t[s]}`,children:o.jsxs("div",{className:"inner",children:[o.jsx("div",{className:t.title,children:o.jsx("p",{children:"My Contents"})}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsxs("a",{href:"https://zatty-5118.github.io/portfolio/",target:"_blank",rel:"noopener noreferrer",children:[o.jsx("div",{className:t.image,children:o.jsx("img",{src:"/images/footer/footer_portfolio_logo.svg",alt:"zatty's Portfolio"})}),o.jsx("div",{className:t.text,children:o.jsxs("p",{children:["フロントエンドエンジニアの「zatty」が制作した",o.jsx("br",{}),"Next.jsベースのポートフォリオです。"]})})]})}),o.jsx("li",{children:o.jsxs("a",{href:"https://zatty-5118.github.io/blog/",target:"_blank",rel:"noopener noreferrer",children:[o.jsx("div",{className:t.image,children:o.jsx("img",{src:"/images/footer/footer_blog_logo.svg",alt:"zatty's Blog"})}),o.jsx("div",{className:t.text,children:o.jsxs("p",{children:["フロントエンドエンジニアの「zatty」が制作した",o.jsx("br",{}),"Astro.jsとNotion APIを活用したブログです。"]})})]})})]})]})}),o.jsx("div",{className:`${t.copyRight} ${t[s]}`,children:o.jsx("div",{className:"inner",children:s==="portfolio"?o.jsx("p",{children:'©2024 zatty"s Portfolio'}):o.jsx("p",{children:'©2024 zatty"s Blog'})})})]})]});r.propTypes={variant:l.string};r.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{variant:{defaultValue:{value:'"portfolio"',computed:!1},description:"",type:{name:"string"},required:!1}}};const b={title:"Components/Footer",component:r,parameters:{docs:{source:{type:"dynamic"}}},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["portfolio","blog"],description:"フッターのスタイル",type:{summary:"string"}}}},y=s=>o.jsx(r,{...s}),e=y.bind({});e.args={variant:"portfolio"};e.parameters={docs:{source:{language:"html",type:"dynamic",transform:(s,a)=>{const{variant:n}=a.args;return`
          <footer class="footer">
            <div class="scrollTop">
              <a href="">↑ページTOPへ</a>
            </div>
            <div class="wrapper">
              <div class="myContents">
                <div class="inner">
                  <div class="title">
                    <p>My Contents</p>
                  </div>
                  <ul>
                    <li>
                      <a href="https://zatty-5118.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
                        <div class="image">
                          <img src="/images/footer/footer_portfolio_logo.svg" alt="zatty"s Portfolio" />
                        </div>
                        <div class="text">
                          <p>
                            フロントエンドエンジニアの「zatty」が制作した
                            <br />
                            Next.jsベースのポートフォリオです。
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="https://zatty-5118.github.io/blog/" target="_blank" rel="noopener noreferrer">
                        <div class="image">
                          <img src="/images/footer/footer_blog_logo.svg" alt="zatty"s Blog" />
                        </div>
                        <div class="text">
                          <p>
                            フロントエンドエンジニアの「zatty」が制作した
                            <br />
                            Astro.jsとNotion APIを活用したブログです。
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="copyRight">
                <div className="inner">
                  <p>&copy;2024 ${n==="portfolio"?"zatty's Portfolio":"zatty's Blog"}</p>
                </div>
              </div>
            </div>
          </footer>
        `}}}};const i={render:s=>o.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[o.jsx(r,{variant:"portfolio"}),o.jsx(r,{variant:"blog"})]}),parameters:{docs:{source:{language:"html",type:"dynamic",transform:(s,a)=>`
            <footer class="footer">
              <div class="scrollTop">
                <a href="">↑ページTOPへ</a>
              </div>
              <div class="wrapper">
                <div class="myContents">
                  <div class="inner">
                    <div class="title">
                      <p>My Contents</p>
                    </div>
                    <ul>
                      <li>
                        <a href="https://zatty-5118.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
                          <div class="image">
                            <img src="/images/footer/footer_portfolio_logo.svg" alt="zatty"s Portfolio" />
                          </div>
                          <div class="text">
                            <p>
                              フロントエンドエンジニアの「zatty」が制作した
                              <br />
                              Next.jsベースのポートフォリオです。
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="https://zatty-5118.github.io/blog/" target="_blank" rel="noopener noreferrer">
                          <div class="image">
                            <img src="/images/footer/footer_blog_logo.svg" alt="zatty"s Blog" />
                          </div>
                          <div class="text">
                            <p>
                              フロントエンドエンジニアの「zatty」が制作した
                              <br />
                              Astro.jsとNotion APIを活用したブログです。
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="copyRight">
                  <div className="inner">
                    <p>&copy;2024 Portfolio</p>
                  </div>
                </div>
              </div>
            </footer>
          `}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <Footer {...args} />",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "0.5rem"
  }}>
      <Footer variant="portfolio" />
      <Footer variant="blog" />
    </div>,
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          return \`
            <footer class="footer">
              <div class="scrollTop">
                <a href="">↑ページTOPへ</a>
              </div>
              <div class="wrapper">
                <div class="myContents">
                  <div class="inner">
                    <div class="title">
                      <p>My Contents</p>
                    </div>
                    <ul>
                      <li>
                        <a href="https://zatty-5118.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
                          <div class="image">
                            <img src="/images/footer/footer_portfolio_logo.svg" alt="zatty"s Portfolio" />
                          </div>
                          <div class="text">
                            <p>
                              フロントエンドエンジニアの「zatty」が制作した
                              <br />
                              Next.jsベースのポートフォリオです。
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="https://zatty-5118.github.io/blog/" target="_blank" rel="noopener noreferrer">
                          <div class="image">
                            <img src="/images/footer/footer_blog_logo.svg" alt="zatty"s Blog" />
                          </div>
                          <div class="text">
                            <p>
                              フロントエンドエンジニアの「zatty」が制作した
                              <br />
                              Astro.jsとNotion APIを活用したブログです。
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="copyRight">
                  <div className="inner">
                    <p>&copy;2024 Portfolio</p>
                  </div>
                </div>
              </div>
            </footer>
          \`;
        }
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const z=["Primary","Variant"];export{e as Primary,i as Variant,z as __namedExportsOrder,b as default};
