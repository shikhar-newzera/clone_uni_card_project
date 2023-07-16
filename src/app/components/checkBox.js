import styles from "../../styles/page.module.css";

export default function CheckBox({checkBoxText}) {
  return (
    <div className={styles.termsAndConditionCheckBox}>
      <div className={styles.maincheckBoxContainer}>
        <input type="checkbox" checked={false} />
      </div>
      <div className={styles.termsAndConditionText}>
        {checkBoxText}
      </div>
    </div>
  );
}
