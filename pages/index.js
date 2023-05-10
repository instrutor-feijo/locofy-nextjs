import styles from "./index.module.css";
const CoverFrame = () => {
  return (
    <div className={styles.coverFrame}>
      <div className={styles.coverFrameChild} />
      <img className={styles.coverFrameItem} alt="" src="/group-16@2x.png" />
      <img className={styles.coverFrameInner} alt="" src="/group-17.svg" />
      <div className={styles.madeByTeam}>Made by Team Locofy</div>
      <div className={styles.travelWebsiteWrapper}>
        <div className={styles.travelWebsite}>Travel Website</div>
      </div>
      <div className={styles.cceroFeijoCo}>Cícero Feijo Co.</div>
    </div>
  );
};

export default CoverFrame;
