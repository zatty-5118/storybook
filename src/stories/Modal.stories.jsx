import Modal from "../components/Modal/Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    docs: {
      source: { type: "dynamic" }
    },
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["s","m","x","max"],
      description: "モーダルのサイズ",
      type: { summary: "string" },
    },
    periodStart: {
      control: "date",
      description: "モーダル内で表示する製作期間の開始日",
      type: { summary: "date" },
    },
    periodEnd: {
      control: "date",
      description: "モーダル内で表示する製作期間の終了日",
      type: { summary: "date" },
    },
    language: {
      control: "radio",
      options: ["HTML","CSS","Javascript"],
      description: "モーダル内で表示する言語の種類",
      type: { summary: "string" },
    },
    framework: {
      description: "モーダル内で表示するフレームワークの種類",
      type: { summary: "string" },
    },
    image: {
      control: "radio",
      options: ["portfolio","blog","gptdoc"],
      description: "モーダル内で表示するサムネイル画像",
      type: { summary: "image" },
    },
    disabled: {
      control: "boolean",
      description: "ボタンの活性 / 非活性",
      type: { summary: "boolean" },
      defaultValue: false,
    },
  },
}
export default meta;

const currentDate = new Date().toLocaleDateString();
const Template = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "max",
  title: "ポートフォリオサイト",
  description: "React + Viteで作ったポートフォリオサイトです。",
  periodStart: currentDate,
  periodEnd: currentDate,
  language: "JavaScript",
  framework: "React",
  library: "Framer Motion",
  image: "portfolio",
  url: "https://example.com",
  disabled: false,
};
Primary.parameters = {
  docs: {
    source: {
      language: "html",
      type: "dynamic", 
      transform: (_src, ctx) => {
        const {size,title,description,periodStart,periodEnd,language,framework,library,image,url,disabled} = ctx.args;
        const thumbnail = 
        image === "portfolio" ? "/public/images/modal/portfolio.jpg" :
        image === "blog" ? "/public/images/modal/blog.jpg" :
        "thumbnailGptdoc";
        return `
        <div class="modal">
          <div class="modal_overlay" onclick="toggleModal()"></div>
            <div class="modal_wrapper ${size}">
              <div class="modal_contents">
                <div class="modal_image">
                  <img src=${thumbnail} alt="${title}" />
                </div>
                <div class="modal_text">
                  <div class="title">
                    <h3>${title}</h3>
                  </div>
                  <div class="description">
                    <p>${description}</p>
                  </div>
                  <div class="period">
                    <h4>制作期間</h4>
                    <p>
                      ${new Date(periodStart).toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}～${new Date(periodEnd).toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div class="skill">
                    <div>
                      <h4>言語</h4>
                      <p>${language}</p>
                    </div>
                    <div>
                      <h4>フレームワーク</h4>
                      <p>${framework}</p>
                    </div>
                    <div>
                      <h4>ライブラリ</h4>
                      <p>${library}</p>
                    </div>
                  </div>
                  <div class=${!disabled ? "link" : "disabled"}>
                    <a href=${url} target="_blank" rel="noopener noreferrer">
                      ${!disabled ? "詳細はこちら" : "Coming Soon"}
                    </a>
                  </div>
                </div>
              </div>
              <div class="modal_close">
                <button onclick="toggleModal()"></button>
              </div>
            </div>
          </div>
        `;
      },
    },
  },
}
