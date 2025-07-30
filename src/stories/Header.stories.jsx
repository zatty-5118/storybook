import Header from "../components/Header/Header";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    docs: {
      source: { type: "dynamic" }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["portfolio","blog"],
      description: "ヘッダーのスタイル",
      type: { summary: "string" },
    },
    glassmorphism: {
      control: "boolean",
      description: "グラスモーフィズムの適用 / 非適用",
      type: { summary: "boolean" },
      defaultValue: false,
    },
  },
}
export default meta;

const Template = (args) => <Header {...args}/>

export const Primary = Template.bind({});
Primary.args = {
  variant: "portfolio",
  glassmorphism: false,
}
Primary.parameters = {
  docs: {
    source: {
      language: "html",
      type: "dynamic", 
      transform: (_src, ctx) => {
        const {variant,glassmorphism} = ctx.args;
        const logo = variant === "portfolio" ? "/images/header/header_portfolio_logo.svg" : "/images/header/header_blog_logo.svg";
        const effectiveVariant = glassmorphism ? "glassmorphism" : variant;
        const headerPortfolio = `
          <header id="header" class="header ${effectiveVariant}">
            <div class="wrapper">
              <div class="logo">
                <a href="/">
                  <img src="${logo}" alt="ヘッダーロゴ" class="logoImg" />
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
        `;
        const headerBlog = `
          <header id="header" class="header ${effectiveVariant}">
            <div class="wrapper">
              <div class="logo">
                <a href="/">
                  <img src="${logo}" alt="ヘッダーロゴ" class="logoImg" />
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
        `;
        return variant === "portfolio" ? headerPortfolio : headerBlog;
      },
    },
  },
}

export const Variant = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Header variant="portfolio" />
      <Header variant="blog"/>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {variant} = ctx.args;
          const logo = variant === "portfolio" ? "/images/header/header_portfolio_logo.svg" : "/images/header/header_blog_logo.svg";
          const headerPortfolio = `
            <header id="header" class="header">
              <div class="wrapper">
                <div class="logo">
                  <a href="/">
                    <img src="${logo}" alt="ヘッダーロゴ" class="logoImg" />
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
          `;
          const headerBlog = `
            <header id="header" class="header">
              <div class="wrapper">
                <div class="logo">
                  <a href="/">
                    <img src="${logo}" alt="ヘッダーロゴ" class="logoImg" />
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
          `;
          return `${headerPortfolio} ${headerBlog}`;
        },
      },
    },
  },
}

export const Glassmorphism = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Header {...args} />
    </div>
  ),
    args: {
    variant: "portfolio",
    glassmorphism: true,
  },
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          const {variant,glassmorphism} = ctx.args;
          const logo = variant === "portfolio" ? "/images/header/header_portfolio_logo.svg" : "/images/header/header_blog_logo.svg";
          const headerGlass = `
            <header id="header" class="header glassmorphism">
              <div class="wrapper">
                <div class="logo">
                  <a href="/">
                    <img src="${logo}" alt="ヘッダーロゴ" class="logoImg" />
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
          `;
          return `${headerGlass}`;
        },
      },
    },
  },
}
