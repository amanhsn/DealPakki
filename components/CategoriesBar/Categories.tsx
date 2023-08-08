import React from 'react';

const CategoryBluePrint = ({ names }) => { // Change 'name' to 'names'
  return (
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-[55px] relative overflow-auto gap-6 padding-x py-1 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#b8b6b0]">
      <p className="flex-grow-0 flex-shrink-0 w-[111px] text-xs font-medium text-left uppercase text-[#b8b6b0]">
        CATEGORIES
      </p>
      {names.map((name) => (
        <div key={name} className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[5px] pr-5 py-0 rounded-tl-[100px] rounded-bl-[100px] bg-white">
          <p className="flex-grow-0 flex-shrink-0 text-xs text-left capitalize text-[#191200]">
            {name}
          </p>
          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 pt-0.5">
            <svg
              width={7}
              height={5}
              viewBox="0 0 7 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M1 1.25L3.5 3.75L6 1.25"
                stroke="#191200"
                strokeLinecap="round" // Change 'stroke-linecap' to 'strokeLinecap'
                strokeLinejoin="round" // Change 'stroke-linejoin' to 'strokeLinejoin'
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryBluePrint;
