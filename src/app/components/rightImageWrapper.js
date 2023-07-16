import styles from "../../styles/page.module.css";

export default function RightImageWrapper({ imageSrc, imageAlt }) {
  return (
    <div className={styles.imageWrapperContainerUni}>
      <div className={styles.mainCardContainerUni}>
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
}
