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
        <button id="all-button" data-dropdown-toggle="all-categories" className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
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
        </button>
        <div id="all-categories" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="all-button">
        <li>
          <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <div className="inline-flex items-center">
              <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
                {/* US flag SVG path */}
              </svg>
              United States
            </div>
          </button>
        </li>
        <li>
          <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <div className="inline-flex items-center">
              <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">
                {/* Germany flag SVG path */}
              </svg>
              Germany
            </div>
          </button>
        </li>
        <li>
          <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <div className="inline-flex items-center">
              <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512">
                {/* Italy flag SVG path */}
              </svg>
              Italy
            </div>
          </button>
        </li>
        <li>
          <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <div className="inline-flex items-center">
              <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512">
                {/* China flag SVG path */}
              </svg>
              China
            </div>
          </button>
        </li>
      </ul>
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