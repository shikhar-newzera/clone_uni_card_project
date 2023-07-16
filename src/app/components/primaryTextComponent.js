import styles from "../../styles/page.module.css";
import { Strings } from "../constants";

export default function PrimaryTextComponent() {
  return (
    <div className={styles.primaryText}>
      <strong>{Strings.mainBody.primaryText}</strong>{" "}
      {Strings.mainBody.secondaryText}
    </div>
  );
}
