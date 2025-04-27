import { motion } from "framer-motion";

export const Footer = ({
  chaiLogo,
  homeText,
  copyRighttext,
  socialIcons,
  links,
  title,
}) => {
  return (
    <section className="w-full relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-full h-36 md:h-[160px] bg-gradient-to-t from-primary/12 via-primary/7 to-transparent blur-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      />

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
      <motion.div
        className="z-50 my-10 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] font-bold text-center tracking-tighter leading-none w-full mx-auto"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <span className="bg-gradient-to-b from-orange-300 to-primary text-transparent bg-clip-text">
          {title}
        </span>
      </motion.div>
    </section>
  );
};
