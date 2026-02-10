import styles from "../../page.module.css";

export default function SectionHeader({ eyebrow, children }) {
  return (
    <div className={styles.sectionHeader}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2>{children}</h2>
    </div>
  );
}
