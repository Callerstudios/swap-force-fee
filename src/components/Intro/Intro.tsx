import styles from './Intro.module.css';
import sadSmiley from "../../assets/icons/sad.png";
import happySmiley from "../../assets/icons/happy.png";
import line from "../../assets/icons/graphLine.png";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <p className={styles.confused}>Confused About Exchange Fees?</p>
      <p className={styles.explanation}>
        We’ll explain everything in plain English. No jargon, no hidden costs.
      </p>
      <section className={styles.smileyInfo}>
        <div className={`${styles.smileyLeft} ${styles.smileys}`}>
          <img src={sadSmiley} alt="Sad Smiley" />
          <span>
            <img src={line} alt="Graph Line" />
          </span>
        </div>
        <div className={`${styles.smileyRight} ${styles.smileys}`}>
          <img src={happySmiley} alt="Happy Smiley" />
          <span>
            <p className={styles.percent}>0.3%</p>
            <p className={styles.clear}>Clear</p>
          </span>
        </div>
      </section>
    </div>
  );
}

export default Intro