import styles from "../../page.module.css";

export default function Highlight({ children }) {
  return <span className={styles.highlight}>{children}</span>;
}
