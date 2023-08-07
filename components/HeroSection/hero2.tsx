const Hero2 = ({ hero2Title,hero2Content,hero2Image }) => {
    return(
        <div className="hero2Component flex-grow-0 flex-shrink-0 w-[567px] h-[400px] relative overflow-hidden rounded-[20px] bg-[#72ae16]">
  <div className="flex flex-col justify-between items-start w-[260px] h-80 absolute left-6 top-[60px]">
    <div className="hero2content flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[260px] text-[34px] text-left capitalize text-white">
        {hero2Title}
      </p>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[260px] text-base text-left capitalize text-white">
        {hero2Content}
      </p>
    </div>
    <div className="hero2button flex justify-start items-center flex-grow-0 flex-shrink-0 h-10 px-2 rounded-[100px] bg-[#ffc01a]">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2">
        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left uppercase text-[#191200]">
          browse now
        </p>
      </div>
    </div>
  </div>
  <div className="hero-image flex-grow h-[400px] relative">
  <img
    src={hero2Image}
    className="w-[323px] h-[203px] absolute left-[252px] top-[218px] object-cover"
  />
  </div>
</div>
    );
}

export default Hero2;