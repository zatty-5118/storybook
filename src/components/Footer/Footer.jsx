import styles from "./Footer.module.scss";
import PropTypes from "prop-types";
import footerPortfolioLogo from "/public/images/footer/footer_portfolio_logo.svg";
import footerBlogLogo from "/public/images/footer/footer_blog_logo.svg";

const Footer = ({variant="portfolio"}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.scrollTop}>
        <a href="">↑ページTOPへ</a>
      </div>
      <div className={styles.wrapper}>
        <div className={`${styles.myContents} ${styles[variant]}`}>
          <div className="inner">
            <div className={styles.title}>
              <p>My Contents</p>
            </div>
            <ul>
              <li>
                <a href="https://zatty-5118.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
                  <div className={styles.image}>
                    <img src={footerPortfolioLogo} alt="zatty's Portfolio" />
                  </div>
                  <div className={styles.text}>
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
                  <div className={styles.image}>
                    <img src={footerBlogLogo} alt="zatty's Blog" />
                  </div>
                  <div className={styles.text}>
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
        <div className={`${styles.copyRight} ${styles[variant]}`}>
          <div className="inner">
            {variant === "portfolio" ? <p>&copy;2024 zatty"s Portfolio</p>:<p>&copy;2024 zatty"s Blog</p>}
          </div>
        </div>
      </div>
    </footer>
  );
};
Footer.propTypes = {
  variant: PropTypes.string,
};

export default Footer;
