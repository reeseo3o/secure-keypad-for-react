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
      className={`key-button ${isSelected ? "selected" : ""}`}
    >
      {value}
    </button>
  );
};

export default Key;
