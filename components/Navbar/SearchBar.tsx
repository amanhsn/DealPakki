const SearchBar = () => {
    return (
    <div className="flex flex-col justify-start items-start flex-grow gap-2.5 p-2.5 rounded-[10px]">
  <div
    className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5 p-px"
  >
    <div
      className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-10 rounded-[100px] bg-white border border-[#e8e7e6]"
    >
      <div
        className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[5px] px-5 py-1 rounded-tl-[100px] rounded-bl-[100px] bg-white border-t-0 border-r border-b-0 border-l-0 border-[#b8b6b0]"
      >
        <p className="flex-grow-0 flex-shrink-0 text-xs text-left capitalize text-[#191200]">All</p>
        <div
          className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 pt-0.5"
        >
          <svg
            width="7"
            height="4"
            viewBox="0 0 7 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M1 0.75L3.5 3.25L6 0.75"
              stroke="#191200"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className="flex justify-start items-center self-stretch flex-grow relative gap-2.5 px-[15px] py-2.5 rounded-tr-[100px] rounded-br-[100px]"
      >
        <input className="  rounded w-full py-2 px-1 text-gray-700 font-inter leading-tight focus:outline-none focus:shadow-outline" id="productSearch" type="text" placeholder="Search 1000+ Products"  />
  
      </div>
    </div>
  </div>
</div>
    )
}

export default SearchBar;