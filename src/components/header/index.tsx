import rocket from "./../../assets/rocket.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={rocket} />
      <strong>
        to<span>do</span>
      </strong>
    </header>
  );
}
