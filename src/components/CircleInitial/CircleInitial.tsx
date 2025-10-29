import React from "react";

type InitialProps = {
  initial: string;
  left: string;
};

const CircleInitial: React.FC<InitialProps> = ({ initial, left }) => {
  return (
    <div
      style={{
        backgroundColor: "#FFA505",
        border: "1px solid white",
        width: "34px",
        height: "34px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%", color: "white",
        left: left,
      }}
    >
      <p>{initial}</p>
    </div>
  );
};

export default CircleInitial;
