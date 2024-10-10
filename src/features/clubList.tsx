"use client";

import { useState } from "react";

interface Option {
  value: string;
  label: string;
}



export default function ClubList() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isArrowActive, setArrowActive] = useState(false);

  const options: Option[] = [
    { value: 'option1', label: 'ブラスバンド部'},
    { value: 'option2', label: '写真部'},
    { value: 'option3', label: 'コンピューター研究部'},
    { value: 'option4', label: '美術部'},
    { value: 'option5', label: '将棋部'},
    { value: 'option6', label: '化学愛好会'},
    { value: 'option7', label: '高専起業部'},
    { value: 'option8', label: 'ロボコン'},
    { value: 'option9', label: '野球部'},
    { value: 'option10', label: 'バレーボール部'},
    { value: 'option11', label: '卓球部'},
    { value: 'option12', label: 'バスケットボール部'},
    { value: 'option13', label: 'ラグビー部'},
    { value: 'option14', label: 'サッカー部'},
    { value: 'option15', label: '陸上部'},
    { value: 'option16', label: '水泳部'},
    { value: 'option17', label: '柔道部'},
    { value: 'option18', label: '剣道部'},
    { value: 'option19', label: 'ハンドボール部'},
    { value: 'option20', label: 'ソフトテニス部'},
    { value: 'option21', label: 'テニス部'},
    { value: 'option22', label: 'バドミントン部'},
    { value: 'option23', label: '弓道部'},
  ];

  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);
    setSelectedOption(selected || null);
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
            className= "w-3/5 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" className="w-3/5">部活動</option>
            {options.map((option) => (
              <option key={option.value} value={option.value} className="w-3/5">
                {option.label}
              </option>
            ))}
          </select>
          <div className={arrowClassName}></div>
        </div>
        {/* {selectedOption && <p className="mt-4 text-lg">{selectedOption.label}</p>} */}
      </div>
    </>
  );
}
{/* <div>
      <ClassList grade={1}/>
      <ClassList grade={2}/>
      <ClassList grade={3}/>
      <ClassList grade={4}/>
      <ClassList grade={5}/>
    </div> */}
      