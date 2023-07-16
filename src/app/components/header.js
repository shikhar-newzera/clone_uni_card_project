import styles from "../../styles/page.module.css";

export default function Header({headerButtonText}) {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.containerLogo}>
        <img src="/icons/uniCardLogo.svg" alt="Uni Cards" />
      </div>
      <div className={styles.uniPayCheckContainer}>{headerButtonText}</div>
    </div>
  );
}
