import styles from "../../styles/page.module.css";

export default function InputField({ inputText, placeHolderText }) {
  return (
    <div className={styles.mainFieldContainer}>
      <div className={styles.inputForm}>
        <div className={styles.containerApplyFieldInput}>
          <input type="text" placeholder={placeHolderText} />
        </div>
        <div className={styles.containerapplyButton}>{inputText}</div>
      </div>
    </div>
  );
}
