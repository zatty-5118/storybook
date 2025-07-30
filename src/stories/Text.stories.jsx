import Text from "../components/Text/Text";
import {convert_classWeight, convert_classSize, convert_classTextColor, convert_classWhiteSpace} from "../components/Text/convertClass.js"

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    docs: {
      source: { type: "dynamic" }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    sentence: {
      control: "text",
      description: "テキスト",
      type: { summary: "string" },
    },
    weight: {
      control: { type: 'select' },
      options: ['100', '200', '300', '400', '500', "600", "700", "800", "900"],
      description: "フォントの太さ",
    },
    size: {
      control: "radio",
      options: ["XS","S","M","L","XL"],
      description: "フォントの大きさ",
    },
    color: {
      control: "radio",
      options: ["black","white","gray"],
      description: "フォントの色",
    },
    tag: {
      control: { type: 'select' },
      options: ['p', 'h1', 'h2', 'h3', 'h4'],
      description: "テキストのHTMLタグ",
    },
    whiteSpace: {
      control: "radio",
      options: ["normal","nowrap","pre-line","pre","pre-wrap"],
      description: "改行やスペース、タブの扱いを指定する",
    },
  },
}
export default meta;

const Template = (args) => <Text {...args}/>
export const Primary = Template.bind({});
Primary.args = {
  sentence: "つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",
  weight: "400",
  size:"M",
  color:"black",
  tag:"p",
  whiteSpace:"normal"
}
Primary.parameters = {
  docs: {
    source: {
      language: "html",
      type: "dynamic", 
      transform: (_src, ctx) => {
        const {sentence,weight,size,color,tag,whiteSpace} = ctx.args;
        const classWeight = convert_classWeight(weight);
        const classSize = convert_classSize(size);
        const classTextColor = convert_classTextColor(color);
        const classWhiteSpace = convert_classWhiteSpace(whiteSpace);

        const HTML = 
          tag === "p" ? `<p class="${classWeight} ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</p>` :
          tag === "h1" ? `<h1 class="${classWeight} ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</h1>` :
          tag === "h2" ? `<h2 class="${classWeight} ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</h2>` :
          tag === "h3" ? `<h3 class="${classWeight} ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</h3>` :
          `<h4 class="${classWeight} ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</h4>`; 

        return `${HTML}`
      },
    },
  },
}

export const Weight = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text {...args} />
      <Text sentence={args.sentence} weight="200" size="M" color="black" tag="p" whiteSpace="normal"/>
      <Text sentence={args.sentence} weight="300" size="M" color="black" tag="p" whiteSpace="normal"/>
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="p" whiteSpace="normal"/>
      <Text sentence={args.sentence} weight="500" size="M" color="black" tag="p" whiteSpace="normal"/>
      <Text sentence={args.sentence} weight="600" size="M" color="black" tag="p" whiteSpace="normal"/>
      <Text sentence={args.sentence} weight="700" size="M" color="black" tag="p" whiteSpace="normal"/>
      <Text sentence={args.sentence} weight="800" size="M" color="black" tag="p" whiteSpace="normal"/>
      <Text sentence={args.sentence} weight="900" size="M" color="black" tag="p" whiteSpace="normal"/>

    </div>
  ),
  args: {
    sentence: "つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",
    size: "M",
    color: "black",
    tag: "p",
    whiteSpace:"normal"
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const { sentence,size,color,whiteSpace,weight } = ctx.args;
          const classWeight = convert_classWeight(weight);
          const classSize = convert_classSize(size);
          const classTextColor = convert_classTextColor(color);
          const classWhiteSpace = convert_classWhiteSpace(whiteSpace);

          return `
            <p class="weight_100 ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</p>
            <p class="weight_200 ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</p>
            <p class="weight_300 ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</p>
            <p class="weight_400 ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</p>
            <p class="weight_500 ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</p>
            <p class="weight_600 ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</p>
            <p class="weight_700 ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</p>
            <p class="weight_800 ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</p>
            <p class="weight_900 ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</p>
          `.trim();
        },
      },
    },
  },
}

export const Size = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text {...args} />
      <Text sentence={args.sentence} weight="400" size="S" color="black" tag="p" whiteSpace="normal"/>
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="p" whiteSpace="normal"/>
      <Text sentence={args.sentence} weight="400" size="L" color="black" tag="p" whiteSpace="normal"/>
      <Text sentence={args.sentence} weight="400" size="XL" color="black" tag="p" whiteSpace="normal"/>
    </div>
  ),
  args: {
    sentence: "つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",
    weight: "400",
    size: "XS",
    color: "black",
    tag: "p",
    whiteSpace:"normal"
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const { sentence,weight,size,color,whiteSpace } = ctx.args;
          const classWeight = convert_classWeight(weight);
          const classSize = convert_classSize(size);
          const classTextColor = convert_classTextColor(color);
          const classWhiteSpace = convert_classWhiteSpace(whiteSpace);

          return `
            <p class="${classWeight} ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</p>
            <p class="${classWeight} size_s ${classTextColor} ${classWhiteSpace}">${sentence}</p>
            <p class="${classWeight} size_m ${classTextColor} ${classWhiteSpace}">${sentence}</p>
            <p class="${classWeight} size_l ${classTextColor} ${classWhiteSpace}">${sentence}</p>
            <p class="${classWeight} size_xl ${classTextColor} ${classWhiteSpace}">${sentence}</p>
          `.trim();
        },
      },
    },
  },
}

export const Color = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text {...args} />
      <Text sentence={args.sentence} weight="400" size="M" color="gray" tag="p" whiteSpace="normal"/>
      <Text sentence={args.sentence} weight="400" size="M" color="white" tag="p" whiteSpace="normal"/>
    </div>
  ),
  args: {
    sentence: "つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",
    weight: "400",
    size: "M",
    tag: "p",
    whiteSpace:"normal"
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const { sentence,weight,size,color,whiteSpace } = ctx.args;
          const classWeight = convert_classWeight(weight);
          const classSize = convert_classSize(size);
          const classTextColor = convert_classTextColor(color);
          const classWhiteSpace = convert_classWhiteSpace(whiteSpace);

          return `
            <p class="${classWeight} ${classSize} ${classTextColor}${classWhiteSpace}">${sentence}</p>
            <p class="${classWeight} ${classSize} textColor_gray ${classWhiteSpace}">${sentence}</p>
            <p class="${classWeight} ${classSize} textColor_white ${classWhiteSpace}">${sentence}</p>
          `.trim();
        },
      },
    },
  },
}

export const Tag = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text {...args} />
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="h2" whiteSpace="normal"/>
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="h3" whiteSpace="normal"/>
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="h4" whiteSpace="normal"/>
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="p" whiteSpace="normal"/>
    </div>
  ),
  args: {
    sentence: "つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",
    weight: "400",
    size: "M",
    color: "black",
    whiteSpace:"normal",
    tag: "h1"
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const { sentence,weight,size,color,whiteSpace } = ctx.args;
          const classWeight = convert_classWeight(weight);
          const classSize = convert_classSize(size);
          const classTextColor = convert_classTextColor(color);
          const classWhiteSpace = convert_classWhiteSpace(whiteSpace);

          return `
            <h1 class="${classWeight} ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</h1>
            <h2 class="${classWeight} ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</h2>
            <h3 class="${classWeight} ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</h3>
            <h4 class="${classWeight} ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</h4>
            <p class="${classWeight} ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</p>
          `.trim();
        },
      },
    },
  },
}

export const WhiteSpace = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text {...args} />
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="p" whiteSpace="nowrap"/>
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="p" whiteSpace="pre-line"/>
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="p" whiteSpace="pre"/>
      <Text sentence={args.sentence} weight="400" size="M" color="black" tag="p" whiteSpace="pre-wrap"/>
    </div>
  ),
  args: {
    sentence: "つまりは私どもも天の川の水のなかから四方を見ると、そこらいちめんに、夢のように川上へのぼるらしいのでした。",
    weight: "400",
    size: "M",
    color: "black",
    whiteSpace:"normal",
    tag: "p"
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const { sentence,weight,size,color,whiteSpace } = ctx.args;
          const classWeight = convert_classWeight(weight);
          const classSize = convert_classSize(size);
          const classTextColor = convert_classTextColor(color);
          const classWhiteSpace = convert_classWhiteSpace(whiteSpace);

          return `
            <p class="${classWeight} ${classSize} ${classTextColor} ${classWhiteSpace}">${sentence}</p>
            <p class="${classWeight} ${classSize} ${classTextColor} whiteSpace_nowrap">${sentence}</p>
            <p class="${classWeight} ${classSize} ${classTextColor} whiteSpace_preLine">${sentence}</p>
            <p class="${classWeight} ${classSize} ${classTextColor} whiteSpace_pre">${sentence}</p>
            <p class="${classWeight} ${classSize} ${classTextColor} whiteSpace_preWrap">${sentence}</p>
          `.trim();
        },
      },
    },
  },
}