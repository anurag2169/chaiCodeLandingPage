import { Button } from "@/components/ui/button";
import React from "react";

export const Navbar = ({
  logoImage,
  navbarItems = [],
  buttonText,
  buttonLink,
}) => {
  return (
    <header className="w-full flex justify-between items-center gap-2 md:gap-5 py-4 px-5 md:px-10 shadow">
      <div className="w-28 md:w-42">
        <a href="/">
          <img src={logoImage} alt="Chaicode logo" className="w-full" />
        </a>
      </div>
      <nav className="md:w-[40%]">
        <ul className="flex justify-between gap-5">
          {navbarItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                target={item.target}
                rel="noopener noreferrer"
                className="flex items-center hover:underline cursor-pointer text-md font-bold tracking-wider"
              >
                {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                {item.LiveBlinker && (
                  <span className="inline-block ml-2 bg-red-500 bg-opacity-50 rounded-full h-2 w-2 flex items-center justify-center animate-pulse">
                    <span
                      className="bg-red-500 rounded-full h-1 w-1"
                      aria-hidden="true"
                    ></span>
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden md:block ">
        <Button variant="" size="lg" asChild className="w-36">
          <a target="_blank" rel="noopener noreferrer" href={buttonLink}>
            {buttonText}
          </a>
        </Button>
      </div>
    </header>
  );
};
