import styles from "./FeeStructure.module.css";

const FeeStructure = () => {
  return (
    <div className={styles.feeStructure}>
      <section>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p>Trading Fee</p>
            <p>Every Swap</p>
          </div>
          <p className={styles.headerRight}>0.3%</p>
        </div>
        <div className={styles.firstRow}>
          <p>Vital Swap</p>
          <p>0.3%</p>
        </div>
        <div className={styles.secondRow}>
          <p>Industry Average</p>
          <p className="red">1.2% (4 x more).</p>
        </div>
        <div className={styles.thirdRow}>
          <p>On a $1,000 trade, you pay $3 vs $12 elsewhere.</p>
        </div>
      </section>
      <section>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p>Network Fee</p>
            <p>Blockchain cost</p>
          </div>
          <p className={styles.headerRight}>Variable</p>
        </div>
        <div className={styles.firstRow}>
          <p>
            Network fees go directly to blockchain miners. We don't mark these
            up.
          </p>
        </div>
        <div className={styles.secondRow}>
          <p>VitalSwap Markup</p>
          <p>0%</p>
        </div>
        <div className={styles.thirdRow}>
          <p>Others Markup</p>
          <p className="red">10 - 20%</p>
        </div>
      </section>
      <section>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p>Withdrawal Fee</p>
            <p>To external wallet</p>
          </div>
          <p className={styles.headerRight}>0%</p>
        </div>
        <div className={styles.firstRow}>
          <p>VitalSwap</p>
          <p>&euro; 0</p>
        </div>
        <div className={styles.secondRow}>
          <p>Others Charge</p>
          <p className="red">$2-5 per withdrawal</p>
        </div>
      </section>
      <section>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p>Hidden Spread</p>
            <p>Exchange rate markup</p>
          </div>
          <p className={styles.headerRight}>Variable</p>
        </div>
        <div className={styles.firstRow}>
          <p>We use real-time market rates with no hidden markup.</p>
        </div>
        <div className={styles.secondRow}>
          <p>VitalSwap Spread</p>
          <p>0%</p>
        </div>
        <div className={styles.thirdRow}>
          <p>Others Add</p>
          <p className="red">0.5 - 1%</p>
        </div>
      </section>
    </div>
  );
};

export default FeeStructure;
