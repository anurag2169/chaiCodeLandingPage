import React from "react";

export const Showcase = ({ title, logos }) => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="flex flex-col gap-10 md:gap-20 justify-center items-center py-8 md:py-12">
      <h2 className="md:w-[60%] px-5 text-xl md:text-2xl text-center font-thin">
        {title}
      </h2>
      <div className="w-full md:w-[70%] overflow-hidden flex flex-row items-center">
        <ul className="animate-scroll whitespace-nowrap flex flex-row [&_li]:mx-5 md:[&_li]:mx-8">
          {duplicatedLogos.map((logo, index) => (
            <li
              key={index}
              className="w-20 h-20 md:w-30 md:h-30 object-contain flex items-center"
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="w-full h-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
