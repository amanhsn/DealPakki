import React from "react";

const Hero1 = ({ hero1Headline,hero1Title,hero1Content,hero1Image }) => {
    return (
<div className="hero1Component flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-5 p-10 rounded-[20px] bg-[#ffd565]">
  <div className="hero1button flex flex-col justify-between items-start self-stretch flex-grow-0 flex-shrink-0 w-[360px] h-">
    <div className="hero1content flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
      <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left uppercase text-[#191200]">
        {hero1Headline}
      </p>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[360px] text-[34px] text-left capitalize text-[#191200]">
        {hero1Title}
      </p>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[360px] text-base text-left capitalize text-[#474133]">
        {hero1Content}
      </p>
    </div>
    <div className="hero1button flex justify-start items-center flex-grow-0 flex-shrink-0 h-10 px-2 rounded-[100px] bg-white">
  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2">
    <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left uppercase text-[#191200]">
      browse now
    </p>
  </div>
</div>
  </div>
  <div className="hero-image flex-grow h-[400px] relative">
    <img
      src={hero1Image}
      className="w-[365px] h-[325px] absolute left-[19px] top-[74px] object-cover"
    />
  </div>
</div>
    );
}

export default Hero1;