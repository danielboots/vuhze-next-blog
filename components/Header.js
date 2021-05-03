import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Vuhze tech </span>News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest News from Vuhze
      </p>
    </div>
  );
};

export default Header;
