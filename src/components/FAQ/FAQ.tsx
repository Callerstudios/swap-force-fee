import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <div className={styles.faq}>
      <div className={styles.start}>
        <p>Search Questions...</p>
      </div>
      <section className={styles.question}>
        <p className="blue">Are there really no hidden fees?</p>
        <p>
          Absolutely. What you see is what you pay. Our 0.3% trading fee is the
          only fee we charge (plus standard network fees).
        </p>
      </section>
      <section className={styles.question}>
        <p className="blue">Can fees change after signup?</p>
        <p>
          Our 0.3% trading fee is locked in for all users. Network fees can
          fluctuate, but we always show you the exact amount first.
        </p>
      </section>
      <section className={styles.question}>
        <p className="blue">How do network fees work?</p>
        <p>
          Network fees go to blockchain miners. They vary by network traffic. We
          show you the exact fee before you confirm.
        </p>
      </section>
    </div>
  );
}

export default FAQ