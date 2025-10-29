import styles from "./Compare.module.css";
import rectangleIcon from "../../assets/icons/rectangle.png";
import markIcon from "../../assets/icons/mark.png";

const Compare2 = () => {
  return (
    <div className={styles.compare}>
      <div className={styles.compareHeader}>
        <h3 className={`${styles.text1} blue`}>VitalSwap Simple</h3>
      </div>
      <div className={styles.middle}>
        <p>0.3%</p>
        <img
          className={styles.complex}
          src={rectangleIcon}
          alt="Complex platforms"
        />
        <p className={styles.textSmall}>Always</p>
      </div>
      <ul>
        <li>
          <img src={markIcon} alt="" />
          <p>Everyone pays 0.3%</p>
        </li>
        <li>
          <img src={markIcon} alt="" />
          <p>No tiers</p>
        </li>
        <li>
          <img src={markIcon} alt="" />
          <p>No hidden fees</p>
        </li>
        <li>
          <img src={markIcon} alt="" />
          <p>Rate Locked</p>
        </li>
      </ul>
    </div>
  );
};

export default Compare2;
