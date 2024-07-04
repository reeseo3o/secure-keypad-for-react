import React from "react";

interface KeyProps {
  value: string;
  onClick: (value: string) => void;
  isSelected: boolean;
}

const Key: React.FC<KeyProps> = ({ value, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(value)}
      style={{
        border: isSelected ? "2px solid blue" : "1px solid gray",
        padding: "10px",
        margin: "5px",
        width: "50px",
        height: "50px",
      }}
    >
      {value}
    </button>
  );
};

export default Key;
