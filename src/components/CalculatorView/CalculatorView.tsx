import React, { useState, useEffect } from "react";
import styles from "./CalculatorView.module.css";

type FeeItem = {
  Service: string;
  Fee: string;
  Description: string;
};

type FeeData = {
  [accountType: string]: {
    [category: string]: FeeItem[];
  };
};
type CalculatorViewProps = {
  onClick: () => void;
};

const CalculatorView: React.FC<CalculatorViewProps> = ({onClick}) => {
  const [data, setData] = useState<FeeData | null>(null);
  const [accountType, setAccountType] = useState("Customer");
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");
  const [amount, setAmount] = useState<number>(1000);
  const [feeResult, setFeeResult] = useState<string>("");

  // Fetch your fee data once
  useEffect(() => {
    fetch("https://2kbbumlxz3.execute-api.us-east-1.amazonaws.com/fee/") // replace with your actual endpoint
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const categories = data ? Object.keys(data[accountType]) : [];
  const services: FeeItem[] =
    category && data ? data[accountType][category] : [];
  const selectedService = services.find((s) => s.Service === service);

  const calculateFee = () => {
    if (!selectedService) return;
    const feeStr = selectedService.Fee.trim();

    // Handle FREE
    if (feeStr.toUpperCase() === "FREE") {
      setFeeResult("✅ No fee — it's FREE!");
      return;
    }

    // Handle percentage (e.g., "3%" or "1.5%")
    if (feeStr.includes("%")) {
      const percent = parseFloat(feeStr.replace("%", ""));
      const fee = (percent / 100) * amount;
      const currencySymbol =
        category.includes("NGN") || feeStr.includes("₦") ? "₦" : "$";
      setFeeResult(
        `${percent}% of ${currencySymbol}${amount} = ${currencySymbol}${fee.toFixed(
          2
        )}`
      );
      return;
    }

    // Handle fixed fee ($10, ₦200, etc.)
    if (feeStr.includes("$") || feeStr.includes("₦")) {
      setFeeResult(`Fixed fee: ${feeStr}`);
      return;
    }

    // Default fallback
    setFeeResult(`Fee: ${feeStr}`);
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={onClick}>
        ←
      </button>
      <h2 className={styles.title}>Fee Calculator</h2>
      <p className={styles.subtitle}>Calculate your exact transaction fee</p>

      {!data ? (
        <p className={styles.loading}>Loading fee data...</p>
      ) : (
        <>
          <div className={styles.formGroup}>
            <label>Account Type</label>
            <select
              value={accountType}
              onChange={(e) => {
                setAccountType(e.target.value);
                setCategory("");
                setService("");
              }}
            >
              {Object.keys(data).map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setService("");
              }}
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {category && (
            <div className={styles.formGroup}>
              <label>Service</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">Select Service</option>
                {services.map((s) => (
                  <option key={s.Service}>{s.Service}</option>
                ))}
              </select>
            </div>
          )}

          {service && (
            <div className={styles.formGroup}>
              <label>Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min={0}
              />
            </div>
          )}

          <button
            className={styles.calculateButton}
            onClick={calculateFee}
            disabled={!service}
          >
            Calculate
          </button>

          {feeResult && (
            <div className={styles.resultBox}>
              <p>{feeResult}</p>
              {selectedService?.Description && (
                <small className={styles.note}>
                  {selectedService.Description}
                </small>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CalculatorView;
