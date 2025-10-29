import React from "react";
import markIcon from "../../assets/icons/mark.png";

type InitialProps = {
  initial: string;
  left: string;
  mark?: boolean;
  scale?: number;
  isRelative?: boolean;
};

const CircleInitial: React.FC<InitialProps> = ({
  initial,
  left,
  mark,
  scale,
  isRelative,
}) => {
  const width = scale ? 34 * scale : 34;
  const height = scale ? 34 * scale : 34;
  return (
    <div
      style={{
        backgroundColor: "#FFA505",
        border: "1px solid white",
        minWidth: width + "px",
        maxWidth: width + "px",
        minHeight: height + "px",
        maxHeight: height + "px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        color: "white",
        left: left,
        position: isRelative ? "relative" : "absolute",
      }}
    >
      <p>{initial}</p>
      {mark && (
        <div className="absolute-mark">
          <img src={markIcon} alt="Mark Icon" />
        </div>
      )}
    </div>
  );
};

export default CircleInitial;
