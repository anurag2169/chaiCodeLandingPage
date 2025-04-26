import React from "react";

export const Footer = ({
  chaiLogo,
  homeText,
  copyRighttext,
  socialIcons,
  links,
  title,
}) => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-10 md:mx-10">
        <div className="flex flex-col gap-3 items-center md:items-start">
          <div className="w-36 inline-flex items-center">
            <img src={chaiLogo} alt="chaicode" />
          </div>
          <div className="text-md tracking-wider text-gray-400">{homeText}</div>
          <div className="inline-flex gap-4 mt-1">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-block hover:-translate-y-1 transition-transform text-gray-400 hover:text-orange-500"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div className="font-thin text-gray-400 mt-4">{copyRighttext}</div>
        </div>
        <div className="flex flex-col flex-wrap h-32 md:h-46 gap-2 gap-x-4 md:gap-x-10">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-block hover:translate-x-1 transition-transform text-gray-400 hover:text-white"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="my-10 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] font-bold text-center tracking-tighter leading-none w-full mx-auto">
        <span className="bg-gradient-to-b from-orange-300 to-primary text-transparent bg-clip-text">
          {title}
        </span>
      </div>
    </section>
  );
};
