import React, { useState } from "react";
import styles from "./CalculatorView.module.css";

type CalculatorProps = {
  onClick: () => void;
};

const CalculatorView: React.FC<CalculatorProps> = ({onClick}) => {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("1000");

  const quickAmounts = [100, 500, 1000, 5000];

  const handleQuickSelect = (value: number) => {
    setAmount(value.toString());
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={onClick}>←</button>
      <h2 className={styles.title}>Calculator</h2>
      <p className={styles.subtitle}>Calculate your fees</p>

      <div className={styles.formGroup}>
        <label htmlFor="currency">Select currency</label>
        <select
          id="currency"
          className={styles.select}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">United States dollar (USD)</option>
          <option value="EUR">Euro (EUR)</option>
          <option value="GBP">British pound (GBP)</option>
          <option value="NGN">Naira (NGN)</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="amount">Amount to swap ($)</label>
        <input
          id="amount"
          type="number"
          className={styles.input}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className={styles.quickButtons}>
        {quickAmounts.map((val) => (
          <button
            key={val}
            className={`${styles.quickButton} ${
              amount === val.toString() ? styles.active : ""
            }`}
            onClick={() => handleQuickSelect(val)}
          >
            ${val}
          </button>
        ))}
      </div>

      <button className={styles.calculateButton}>Calculate</button>
    </div>
  );
};

export default CalculatorView;
