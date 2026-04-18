import Dropdown from "../Dropdown/Dropdown";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img
          src='../src/assets/images/logo.svg'
          alt='weather now'
        />
        <Dropdown
          label='Units'
          color='dark'
          gear={true}
        />
      </header>
    </>
  );
};

export default Header;
