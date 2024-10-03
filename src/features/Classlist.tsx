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

  // gradeに応じて、1年と2年は「〇組」、3年から5年は「〇コース」と表示
  const options: Option[] = [
    { value: 'option1', label: grade <= 2 ? `${grade}年1組` : `${grade}年機械創造システムコース` },
    { value: 'option2', label: grade <= 2 ? `${grade}年2組` : `${grade}年知能ロボットシステムコース` },
    { value: 'option3', label: grade <= 2 ? `${grade}年3組` : `${grade}年電気電子コース` },
    { value: 'option4', label: grade <= 2 ? `${grade}年4組` : `${grade}年情報システムコース` },
    { value: 'option5', label: grade <= 2 ? `${grade}年5組` : `${grade}年物質科学コース` },
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
