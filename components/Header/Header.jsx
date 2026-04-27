import UnitsDropdown from "../UnitsDropdown/UnitsDropdown";
import styles from "./Header.module.css";
import logo from "../../src/assets/images/logo.svg";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img
          src={logo}
          alt='weather now'
        />
        <UnitsDropdown />
      </header>
    </>
  );
};

export default Header;
