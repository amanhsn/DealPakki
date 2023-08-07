const Buttons = ({ svgPath }) => {
  return (
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-10 px-2 rounded-[100px] bg-white border border-[#e8e7e6]">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-0.5">
        <img
          src={svgPath}
          alt="SVG icon"
          className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
        />
      </div>
    </div>
  );
};

export default Buttons;
