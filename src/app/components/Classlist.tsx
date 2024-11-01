"use client";

import { useState } from "react";
import { showPerformPlace } from "./showPeformPlace";


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
    { value: 'option1', label: grade <= 2 ? `${grade}年1組` : `${grade}年機械創造システムコース` },
    { value: 'option2', label: grade <= 2 ? `${grade}年2組` : `${grade}年知能ロボットシステムコース` },
    { value: 'option3', label: grade <= 2 ? `${grade}年3組` : `${grade}年電気電子コース` },
    { value: 'option4', label: grade <= 2 ? `${grade}年4組` : `${grade}年情報システムコース` },
    { value: 'option5', label: grade <= 2 ? `${grade}年5組` : `${grade}年物質化学コース` },
  ];

  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValueStr = event.target.value;
    const selected = options.find((option) => option.value === selectedValueStr);
    setSelectedOption(selected || null);
    let selectedValueInt:number = 0;
    if(selectedValueStr==="option1")selectedValueInt = 1;
    else if(selectedValueStr==="option2")selectedValueInt = 2;
    else if(selectedValueStr==="option3")selectedValueInt = 3;
    else if(selectedValueStr==="option4")selectedValueInt = 4;
    else if(selectedValueStr==="option5")selectedValueInt = 5;

    showPerformPlace(grade,selectedValueInt);
    
  };

  const arrowClassName = `select-arrow ${isArrowActive ? 'active' : ''}`;

  return (
    <>
      <div className="container">
        <div className="select-container w-full flex justify-center">
          <select
            value={selectedOption?.value || ''}
            onChange={handleSelectOption}
            onFocus={() => setArrowActive(true)}
            onBlur={() => setArrowActive(false)}
            className="w-full p-2 bg-white bg-opacity-0 border-white border-y focus:outline-none focus:ring-2 text-white"
          >
            <option value="" className="w-full">{grade}年生</option>
            {options.map((option) => (
              <option key={option.value} value={option.value} className="w-full">
                {option.label}
              </option>
            ))}
          </select>
          <div className={arrowClassName}></div>
        </div>
      </div>
    </>
  );
}
      

//1-1:-9, 9, 22
// 1-2:-15, 9, 22
// 1-3:-25, 9, 22
// 1-4:-35, 9, 22
// 1-5:-42, 9, 22
// 2-3:34, 4, 24
// 2-2:27, 4, 26
// 2-1:22, 4, 26
// 2-4:27, 6, 26
// 2-5:34, 6, 26
// 3-?:34, 6, 24
// 3-?:34, 8, 24
// 3-?:31, 8, 24
// 3-?:27, 8, 26
// 3-?:22, 6, 26
// 4-m:-27, 7, -16
// 4-r:15, 5, 43
// 4-e:-42, 7, -14
// 4-i:15, 7, 39
// 4-c:14, 8, 6
// 5-m:-23, 7, -16
// 5-r:-42, 7, 22
// 5-e:-36, 7, -14
// 5-i:20, 7, 39
// 5-c:20, 8, 6