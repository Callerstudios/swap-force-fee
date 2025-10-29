import styles from "./Compare.module.css";
import complexIcon from "../../assets/icons/complex.png";
import closeIcon from "../../assets/icons/close.png";

const Compare = () => {
  return (
    <div className={styles.compare}>
      <div className={styles.compareHeader}>
        <h3 className={`${styles.text1} red`}>Complex platform</h3>
      </div>
      <div className={styles.middle}>
        <img
          className={styles.complex}
          src={complexIcon}
          alt="Complex platforms"
        />
        <p className={styles.textSmall}>Confusing!</p>
      </div>
      <ul>
        <li>
          <img src={closeIcon} alt="" />
          <p>VIP Levels</p>
        </li>
        <li>
          <img src={closeIcon} alt="" />
          <p>Volume Tiers</p>
        </li>
        <li>
          <img src={closeIcon} alt="" />
          <p>Hidden Spreads</p>
        </li>
        <li>
          <img src={closeIcon} alt="" />
          <p>Changing Fees</p>
        </li>
      </ul>
    </div>
  );
};

export default Compare;
