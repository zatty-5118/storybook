import Footer from "../components/Footer/Footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
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
      description: "フッターのスタイル",
      type: { summary: "string" },
    },
  },
}
export default meta;

const Template = (args) => <Footer {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  variant: "portfolio",
}
Primary.parameters = {
  docs: {
    source: {
      language: "html",
      type: "dynamic", 
      transform: (_src, ctx) => {
        const {variant} = ctx.args;
        const copyRight = variant === "portfolio" ? "zatty's Portfolio" : "zatty's Blog";
        return `
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
                  <p>&copy;2024 ${copyRight}</p>
                </div>
              </div>
            </div>
          </footer>
        `
      },
    },
  },
}

export const Variant = {
  render: (args) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Footer variant="portfolio"/>
      <Footer variant="blog"/>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        language: "html",
        type: "dynamic",
        transform: (_src, ctx) => {
          return `
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
          `
        },
      },
    },
  },
}
