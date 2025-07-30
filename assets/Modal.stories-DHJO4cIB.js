import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./iframe-DoHEzy0U.js";import{P as S}from"./index-BdKtEOTM.js";import{P as o}from"./index-DE5Mc6xQ.js";import"./index-DVUa-8CR.js";const w="/storybook-static/assets/portfolio.D7xNihCV.jpg",D="/storybook-static/assets/blog.BzYS8RrB.jpg",N="/storybook-static/assets/gptdoc.DtoKDiD5.jpg",$="_modal_open_1c7ya_1",P="_modal_overlay_1c7ya_9",q="_modal_wrapper_1c7ya_20",C="_s_1c7ya_31",M="_modal_contents_1c7ya_34",E="_m_1c7ya_1",L="_x_1c7ya_47",T="_max_1c7ya_50",J="_modal_image_1c7ya_82",z="_modal_text_1c7ya_91",R="_skill_1c7ya_102",V="_disabled_1c7ya_118",B="_link_1c7ya_129",O="_modal_close_1c7ya_159",a={modal_open:$,modal_overlay:P,modal_wrapper:q,s:C,modal_contents:M,m:E,x:L,max:T,modal_image:J,modal_text:z,skill:R,disabled:V,link:B,modal_close:O},c=({size:s="max",title:r,description:m,periodStart:l,periodEnd:p,language:g,framework:_,library:u,image:d,url:y,disabled:i})=>{const h=s==="s"?"s":s==="m"?"m":s==="x"?"x":"max",n=d==="portfolio"?w:d==="blog"?D:N,[x,b]=k.useState(!1),v=()=>{b(!x),document.body.classList.toggle("hidden")},f=e.jsxs("div",{className:a.modal,children:[e.jsx("div",{className:a.modal_overlay,onClick:v}),e.jsxs("div",{className:`${a.modal_wrapper} ${a[h]}`,children:[e.jsxs("div",{className:a.modal_contents,children:[e.jsx("div",{className:a.modal_image,children:e.jsx("img",{src:n,alt:r})}),e.jsxs("div",{className:a.modal_text,children:[e.jsx("div",{className:a.title,children:e.jsx("h3",{children:r})}),e.jsx("div",{className:a.description,children:e.jsx("p",{children:m})}),e.jsxs("div",{className:a.period,children:[e.jsx("h4",{children:"制作期間"}),e.jsxs("p",{children:[new Date(l).toLocaleDateString("ja-JP",{year:"numeric",month:"long",day:"numeric"}),"～",new Date(p).toLocaleDateString("ja-JP",{year:"numeric",month:"long",day:"numeric"})]})]}),e.jsxs("div",{className:a.skill,children:[e.jsxs("div",{children:[e.jsx("h4",{children:"言語"}),e.jsx("p",{children:g})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"フレームワーク"}),e.jsx("p",{children:_})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"ライブラリ"}),e.jsx("p",{children:u})]})]}),e.jsx("div",{className:i?a.disabled:a.link,children:e.jsx("a",{href:y,target:"_blank",rel:"noopener noreferrer",children:i?"Coming Soon":"詳細はこちら"})})]})]}),e.jsx("div",{className:a.modal_close,children:e.jsx("button",{onClick:v})})]})]});return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:v,className:a.modal_open,children:"モーダルを開く"}),x&&S.createPortal(f,document.body)]})};c.propTypes={size:o.string,title:o.string,description:o.string,periodStart:o.date,periodEnd:o.date,language:o.string,framework:o.string,image:o.string,url:o.string,disabled:o.bool};c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{defaultValue:{value:'"max"',computed:!1},description:"",type:{name:"string"},required:!1},title:{description:"",type:{name:"string"},required:!1},description:{description:"",type:{name:"string"},required:!1},periodStart:{description:"",type:{name:"custom",raw:"PropTypes.date"},required:!1},periodEnd:{description:"",type:{name:"custom",raw:"PropTypes.date"},required:!1},language:{description:"",type:{name:"string"},required:!1},framework:{description:"",type:{name:"string"},required:!1},image:{description:"",type:{name:"string"},required:!1},url:{description:"",type:{name:"string"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1}}};const A={title:"Components/Modal",component:c,parameters:{docs:{source:{type:"dynamic"}},layout:"fullscreen"},tags:["autodocs"],argTypes:{size:{control:"radio",options:["s","m","x","max"],description:"モーダルのサイズ",type:{summary:"string"}},periodStart:{control:"date",description:"モーダル内で表示する製作期間の開始日",type:{summary:"date"}},periodEnd:{control:"date",description:"モーダル内で表示する製作期間の終了日",type:{summary:"date"}},language:{control:"radio",options:["HTML","CSS","Javascript"],description:"モーダル内で表示する言語の種類",type:{summary:"string"}},framework:{description:"モーダル内で表示するフレームワークの種類",type:{summary:"string"}},image:{control:"radio",options:["portfolio","blog","gptdoc"],description:"モーダル内で表示するサムネイル画像",type:{summary:"image"}},disabled:{control:"boolean",description:"ボタンの活性 / 非活性",type:{summary:"boolean"},defaultValue:!1}}},j=new Date().toLocaleDateString(),F=s=>e.jsx(c,{...s}),t=F.bind({});t.args={size:"max",title:"ポートフォリオサイト",description:"React + Viteで作ったポートフォリオサイトです。",periodStart:j,periodEnd:j,language:"JavaScript",framework:"React",library:"Framer Motion",image:"portfolio",url:"https://example.com",disabled:!1};t.parameters={docs:{source:{language:"html",type:"dynamic",transform:(s,r)=>{const{size:m,title:l,description:p,periodStart:g,periodEnd:_,language:u,framework:d,library:y,image:i,url:h,disabled:n}=r.args;return`
        <div class="modal">
          <div class="modal_overlay" onclick="toggleModal()"></div>
            <div class="modal_wrapper ${m}">
              <div class="modal_contents">
                <div class="modal_image">
                  <img src=${i==="portfolio"?"/public/images/modal/portfolio.jpg":i==="blog"?"/public/images/modal/blog.jpg":"thumbnailGptdoc"} alt="${l}" />
                </div>
                <div class="modal_text">
                  <div class="title">
                    <h3>${l}</h3>
                  </div>
                  <div class="description">
                    <p>${p}</p>
                  </div>
                  <div class="period">
                    <h4>制作期間</h4>
                    <p>
                      ${new Date(g).toLocaleDateString("ja-JP",{year:"numeric",month:"long",day:"numeric"})}～${new Date(_).toLocaleDateString("ja-JP",{year:"numeric",month:"long",day:"numeric"})}
                    </p>
                  </div>
                  <div class="skill">
                    <div>
                      <h4>言語</h4>
                      <p>${u}</p>
                    </div>
                    <div>
                      <h4>フレームワーク</h4>
                      <p>${d}</p>
                    </div>
                    <div>
                      <h4>ライブラリ</h4>
                      <p>${y}</p>
                    </div>
                  </div>
                  <div class=${n?"disabled":"link"}>
                    <a href=${h} target="_blank" rel="noopener noreferrer">
                      ${n?"Coming Soon":"詳細はこちら"}
                    </a>
                  </div>
                </div>
              </div>
              <div class="modal_close">
                <button onclick="toggleModal()"></button>
              </div>
            </div>
          </div>
        `}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <Modal {...args} />",...t.parameters?.docs?.source}}};const Q=["Primary"];export{t as Primary,Q as __namedExportsOrder,A as default};
