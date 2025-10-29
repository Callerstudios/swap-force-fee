import { type CSSProperties } from "react";
import calculator from "../../assets/icons/calculator.png";

type CalculatorProps = {
  onClick: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({onClick}) => { 

  const handleClick = () => {
    onClick();
  }
  
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
    zIndex: "3",
    cursor: "pointer",
  };
  return (
    <div style={style} onClick={handleClick}> 
      <img src={calculator} alt="" />
    </div>
  );
};

export default Calculator;
