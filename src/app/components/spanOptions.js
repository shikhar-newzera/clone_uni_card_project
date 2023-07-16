import styles from "../../styles/page.module.css";
import { Strings } from "../constants";

export default function SpanOptions() {
  return (
    <div className={styles.spanTextStyle}>
      <span>{Strings.spanOptionTexts.cashBackText}</span>
      <span>
        <img src="/icons/iconPlus.svg" alt="Plus" />
      </span>
      <span>{Strings.spanOptionTexts.rewardsText}</span>
      <span>
        <img src="/icons/iconPlus.svg" alt="Plus" />
      </span>
      <span>{Strings.spanOptionTexts.forexText}</span>
    </div>
  );
}
