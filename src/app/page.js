import Image from "next/image";
import styles from "../styles/page.module.css";
import CheckBox from "./components/checkBox";
import InputField from "./components/inputField";
import SpanOptions from "./components/spanOptions";
import RightImageWrapper from "./components/rightImageWrapper";
import Header from "./components/header";
import PrimaryTextComponent from "./components/primaryTextComponent";
import { Strings } from "./constants";

export default function Home() {
  return (
    <main className={styles.rootStyle}>
      <div className={styles.startingPointStyle}>
        <video
          loop // Loop the background video again and again
          muted
          autoPlay //it should automatically start playing
        >
          <source
            src="/videos/unicards_background_video.mp4"
            type="video/mp4"
          />
        </video>
        <Header headerButtonText={Strings.UniHeaderText} />
        <div className={styles.containerMainSection}>
          <div className={styles.leftContainer}>
            <PrimaryTextComponent />
            <SpanOptions />
            <InputField
              inputText={Strings.phoneNumber.inputText}
              placeHolderText={Strings.phoneNumber.placeholderText}
            />
            <CheckBox checkBoxText={Strings.checkBox.checkBoxText} />
          </div>
          <RightImageWrapper
            imageSrc={"/images/credit_card_image.png"}
            imageAlt={"Image for Uni"}
          />
        </div>
      </div>
    </main>
  );
}
