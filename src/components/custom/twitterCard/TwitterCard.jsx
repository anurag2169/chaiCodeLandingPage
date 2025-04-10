import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const TwitterCard = ({
  tweetText,
  profileImage,
  name,
  handle,
  verified,
}) => {
  return (
    <section className="border flex flex-col w-full md:w-[65%] lg:w-96 rounded-xl p-4 gap-4 bg-white text-black shadow-lg shadow-gray-900 transition-transform duration-300 hover:scale-110 cursor-pointer">
      <div className="font-semibold min-h-30">{tweetText}</div>
      <div className="flex gap-2 items-center">
        <Avatar className="w-12 h-12">
          <AvatarImage src={profileImage} />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>

        <div className="">
          <div className="text-md font-bold">{name}</div>
          <div className="text-sm text-gray-600 font-semibold">{handle} </div>
        </div>
      </div>
    </section>
  );
};
