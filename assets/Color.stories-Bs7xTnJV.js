import{j as o}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DoHEzy0U.js";const r=({colors:l})=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",width:"100%"},children:[o.jsx("div",{style:{display:"flex",width:"100%",height:"100px",border:"1px solid #ccc",borderRadius:"4px",overflow:"hidden"},children:l.map((t,n)=>o.jsx("div",{style:{flex:1,backgroundColor:t.hex,height:"100%"},title:t.hex},n))}),o.jsx("div",{style:{display:"flex",justifyContent:"space-between"},children:l.map((t,n)=>o.jsx("div",{style:{flex:1,textAlign:"center",fontSize:"0.85rem",color:"#333"},children:t.hex},n))})]});r.__docgenInfo={description:"",methods:[],displayName:"Color"};const g={title:"Components/Color",component:r,tags:["autodocs"]},s=[{hex:"#ffffff"},{hex:"#f7f7f7"},{hex:"#f5f5f5"},{hex:"#f2f2f2"},{hex:"#cccccc"},{hex:"#7f7f7f"},{hex:"#333333"}],i=[{hex:"#dde9f8"},{hex:"#699cc7"},{hex:"#3d85cc"}],m=[{hex:"#e0eae4"},{hex:"#c2d5cb"},{hex:"#8ab19e"}],a=[{hex:"#eae0e0"},{hex:"#d5c2c2"},{hex:"#B18A8B"}],d=[{hex:"#ffa500"}],c=[{hex:"#000000a1"}],h=[{hex:"#0000004d"}],e=()=>o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{marginBottom:"2rem"},children:[o.jsx("p",{style:{fontWeight:"bold",marginBottom:"0.5rem"},children:"BaseColor"}),o.jsx(r,{colors:s})]}),o.jsxs("div",{style:{marginBottom:"2rem"},children:[o.jsx("p",{style:{fontWeight:"bold",marginBottom:"0.5rem"},children:"PortfolioColor"}),o.jsx(r,{colors:i})]}),o.jsxs("div",{style:{marginBottom:"2rem"},children:[o.jsx("p",{style:{fontWeight:"bold",marginBottom:"0.5rem"},children:"BlogColor"}),o.jsx(r,{colors:m})]}),o.jsxs("div",{style:{marginBottom:"2rem"},children:[o.jsx("p",{style:{fontWeight:"bold",marginBottom:"0.5rem"},children:"StorybookColor"}),o.jsx(r,{colors:a})]}),o.jsxs("div",{style:{marginBottom:"2rem"},children:[o.jsx("p",{style:{fontWeight:"bold",marginBottom:"0.5rem"},children:"YellowColor"}),o.jsx(r,{colors:d})]}),o.jsxs("div",{style:{marginBottom:"2rem"},children:[o.jsx("p",{style:{fontWeight:"bold",marginBottom:"0.5rem"},children:"OverlayColor"}),o.jsx(r,{colors:c})]}),o.jsxs("div",{style:{marginBottom:"2rem"},children:[o.jsx("p",{style:{fontWeight:"bold",marginBottom:"0.5rem"},children:"ShadowColor"}),o.jsx(r,{colors:h})]})]});e.__docgenInfo={description:"",methods:[],displayName:"Primary"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <>
        <div style={{
    marginBottom: "2rem"
  }}>
            <p style={{
      fontWeight: "bold",
      marginBottom: "0.5rem"
    }}>BaseColor</p>
            <Color colors={array_colorsGray} />
        </div>
        <div style={{
    marginBottom: "2rem"
  }}>
            <p style={{
      fontWeight: "bold",
      marginBottom: "0.5rem"
    }}>PortfolioColor</p>
            <Color colors={array_colorsPortfolio} />
        </div>
        <div style={{
    marginBottom: "2rem"
  }}>
            <p style={{
      fontWeight: "bold",
      marginBottom: "0.5rem"
    }}>BlogColor</p>
            <Color colors={array_colorsBlog} />
        </div>
        <div style={{
    marginBottom: "2rem"
  }}>
            <p style={{
      fontWeight: "bold",
      marginBottom: "0.5rem"
    }}>StorybookColor</p>
            <Color colors={array_colorsSb} />
        </div>
        <div style={{
    marginBottom: "2rem"
  }}>
            <p style={{
      fontWeight: "bold",
      marginBottom: "0.5rem"
    }}>YellowColor</p>
            <Color colors={array_colorsYellow} />
        </div>
        <div style={{
    marginBottom: "2rem"
  }}>
            <p style={{
      fontWeight: "bold",
      marginBottom: "0.5rem"
    }}>OverlayColor</p>
            <Color colors={array_colorsOverlay} />
        </div>
        <div style={{
    marginBottom: "2rem"
  }}>
            <p style={{
      fontWeight: "bold",
      marginBottom: "0.5rem"
    }}>ShadowColor</p>
            <Color colors={array_colorsShadow} />
        </div>

    </>`,...e.parameters?.docs?.source}}};const f=["Primary"];export{e as Primary,f as __namedExportsOrder,g as default};
