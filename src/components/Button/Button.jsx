import {} from "react";

const inlineStyles = {
  color: "lightsalmon",
  backgroundColor: "#ccc",
};

export const Button = () => {
  return (
    <button className="btn" style={inlineStyles}>
      Button
    </button>
  );
};
