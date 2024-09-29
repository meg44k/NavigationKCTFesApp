"use client";

import { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface ClassListProps {
  grade: number;
}

export default function ClassList({ grade }: ClassListProps) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isArrowActive, setArrowActive] = useState(false);

  const options: Option[] = [
    { value: 'option1', label: `${grade}年1組` },
    { value: 'option2', label: `${grade}年2組` },
    { value: 'option3', label: `${grade}年3組` },
    { value: 'option4', label: `${grade}年4組` },
    { value: 'option5', label: `${grade}年5組` },
  ];

  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);
    setSelectedOption(selected || null);
  };

  const arrowClassName = `select-arrow ${isArrowActive ? 'active' : ''}`;

  return (
    <main>
      <div className="container">
      <div className="select-container">
        <select
          value={selectedOption?.value || ''}
          onChange={handleSelectOption}
          onFocus={() => setArrowActive(true)}
          onBlur={() => setArrowActive(false)}
        >
          <option value="">{grade}年生</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={arrowClassName}></div>
      </div>
      {selectedOption && <p>{selectedOption.label}</p>}
    </div>
    </main>
  );
}

