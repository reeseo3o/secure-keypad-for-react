import React, { useState, useEffect } from "react";
import Key from "./Key";
import "./Keypad.css"; // 추가된 CSS 파일 import

type keyNumbers = number[];

const Keypad: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [numbers, setNumbers] = useState<number[]>([]);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const shuffleArray = (array: keyNumbers) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setNumbers(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
  }, []);

  const handleKeyClick = (value: string) => {
    setNumbers(shuffleArray([...numbers])); // 숫자 배열을 섞음
    setSelectedKey(value); // 선택된 키 업데이트
    if (input.length < 4) {
      setInput((prev) => prev + value);
    }
  };

  const handleConfirm = () => {
    console.log("PIN 입력됨:", input);
  };

  const handleReset = () => {
    setInput("");
    setSelectedKey(null);
  };

  const getMaskedInput = () => {
    return input.replace(/./g, "*");
  };

  return (
    <div className="keypad-container">
      <input
        type="text"
        value={getMaskedInput()}
        readOnly
        className="keypad-input"
      />
      <div className="keypad-keys">
        {numbers.map((num) => (
          <Key
            key={num}
            value={num.toString()}
            onClick={handleKeyClick}
            isSelected={selectedKey === num.toString()}
          />
        ))}
      </div>
      <button className="keypad-button" onClick={handleConfirm}>
        확인
      </button>
      <button className="keypad-button" onClick={handleReset}>
        초기화
      </button>
    </div>
  );
};

export default Keypad;
