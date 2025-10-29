import styles from './Intro.module.css';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <p className={styles.confused}>Confused About Exchange Fees?</p>
      <p className={styles.explanation}>
        We’ll explain everything in plain English. No jargon, no hidden costs.
      </p>
    </div>
  );
}

export default Intro