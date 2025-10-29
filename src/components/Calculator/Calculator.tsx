import type { CSSProperties } from "react";
import calculator from "../../assets/icons/calculator.png";

const Calculator = () => {
  const style: CSSProperties = {
    backgroundColor: "var(--yellow-2)",
    width: "66px",
    height: "66px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    color: "white",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "3"
  };
  return (
    <div style={style}>
      <img src={calculator} alt="" />
    </div>
  );
};

export default Calculator;
