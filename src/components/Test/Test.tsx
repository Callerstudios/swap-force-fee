import styles from './Test.module.css'

const Test = () => {
  return (
    <div className={styles.test}>
      <p className="blue">What’s VitalSwap trading fee?</p>
      <div className={styles.answers}>
        <button>0.1%</button>
        <button>0.3%</button>
        <button>1%</button>
        <button>2%</button>
      </div>
    </div>
  );
}

export default Test