import React, { useEffect, useState } from "react";
import styles from "./FeesTable.module.css";

type FeeItem = {
  Service: string;
  Fee: string;
  Description?: string;
};

type FeeCategory = {
  [key: string]: FeeItem[];
};

type FeeData = {
  Customer: FeeCategory;
  Business: FeeCategory;
};

const FeesTable: React.FC = () => {
  const [data, setData] = useState<FeeData | null>(null);
  const [activeTab, setActiveTab] = useState<"Customer" | "Business">(
    "Customer"
  );
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://2kbbumlxz3.execute-api.us-east-1.amazonaws.com/fee/")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching fee data:", err));
  }, []);

  if (!data) return <p className={styles.loading}>Loading fees...</p>;

  const currentData = data[activeTab];

  return (
    <div className={styles.container}>
      {/* Tabs */}
      <div className={styles.tabs}>
        {(["Customer", "Business"] as const).map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${
              activeTab === tab ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Fee Tables */}
      <div className={styles.categories}>
        {Object.entries(currentData).map(([category, items]) => (
          <div key={category} className={styles.category}>
            <button
              className={styles.categoryHeader}
              onClick={() =>
                setExpanded(expanded === category ? null : category)
              }
            >
              <span>{category}</span>
              <span className={styles.icon}>
                {expanded === category ? "–" : "+"}
              </span>
            </button>

            {expanded === category && (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Fee</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => (
                    <tr key={i}>
                      <td>{item.Service}</td>
                      <td>{item.Fee}</td>
                      <td>{item.Description || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeesTable;
