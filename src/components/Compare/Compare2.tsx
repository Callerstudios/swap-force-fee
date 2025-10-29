import styles from "./Compare.module.css";
import rectangleIcon from "../../assets/icons/rectangle.png";
import markIcon from "../../assets/icons/mark.png";

const Compare2 = () => {
  return (
    <div className={styles.compare}>
      <div className={styles.compareHeader}>
        <h3 className={`${styles.text1} red`}>Complex platform</h3>
        <img
          className={styles.complex}
          src={rectangleIcon}
          alt="Complex platforms"
        />
        <p>Confusing!</p>
      </div>
      <ul>
        <li>
          <img src={markIcon} alt="" />
          <p>VIP Levels</p>
        </li>
        <li>
          <img src={markIcon} alt="" />
          <p>Volume Tiers</p>
        </li>
        <li>
          <img src={markIcon} alt="" />
          <p>Hidden Spreads</p>
        </li>
        <li>
          <img src={markIcon} alt="" />
          <p>Changing Fees</p>
        </li>
      </ul>
    </div>
  );
};

export default Compare2;
