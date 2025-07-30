import styles from "./Header.module.scss";
import headerPortfolioLogo from "/public/images/header/header_portfolio_logo.svg";
import headerBlogLogo from "/public/images/header/header_blog_logo.svg";
import footerPortfolioLogo from "/public/images/footer/footer_portfolio_logo.svg";
import footerBlogLogo from "/public/images/footer/footer_blog_logo.svg";
import PropTypes from "prop-types";

const Header = ({variant="portfolio", glassmorphism=false}) => {
  const logo = 
  variant === "portfolio" && !glassmorphism ? headerPortfolioLogo :
  variant === "portfolio" && glassmorphism ? footerPortfolioLogo : 
  variant === "blog" && !glassmorphism ? headerBlogLogo : 
  footerBlogLogo;

  const effectiveVariant = glassmorphism ? "glassmorphism" : variant;
  return (
    <header id="header" className={`${styles.header} ${styles[effectiveVariant]}`}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logo} alt="ヘッダーロゴ" className={styles.logoImg} />
          </a>
        </div>
        {variant === "portfolio" ?         
          <div className={styles.menu}>
            <div className={`${styles.link} ${styles.work}`}>
              <a href="#work">Work List</a>
            </div>
            <div className={`${styles.link} ${styles.about}`}>
              <a href="#about">About Me</a>
            </div>
            <div className={`${styles.link} ${styles.skill}`}>
              <a href="#skill">Skill List</a>
            </div>
            <div className={`${styles.link} ${styles.news}`}>
              <a href="#news">News List</a>
            </div>
          </div>: 
          <div className={styles.menu}>
            <div className={styles.menu_item}>
              <a href="">全ての記事</a>
            </div>
            <div className={styles.menu_item}>
              <a href="">プロフィール</a>
            </div>
          </div>
        }
      </div>
    </header>
  );
};
Header.propTypes = {
  variant: PropTypes.string,
};


export default Header;