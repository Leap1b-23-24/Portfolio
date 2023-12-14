import { Button } from "./Button";
import { LogoG } from "./icon/Introicon2";
import { Twit } from "./icon/Introicon3";
import { Social } from "./icon/Introicon4";
import { useContext } from "react";
import { themeContext } from "@/app/page";

export const Get = () => {
  const { value } = useContext(themeContext);
  const logo = [LogoG, Twit, Social];
  return (
    <div
      id="Contact"
      className="w-full h-full dark:bg-[#030712] bg-[#FFFFFF] px-[16px] py-[64px] sm:px-[80px] sm:py-[96px]"
    >
      <div className="w-full sm:px-[32px] flex flex-col items-center">
        <Button text="Get in touch" />
        <p className="sm:w-[576px] mb-[24px] sm:mb-[48px] dark:text-[#D1D5DB] text-[#4B5563] font-normal text-xl text-center">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className="flex gap-[16px] sm:gap-[20px] items-center sm:mb-[16px]">
          <img
            className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
            src={!value ? "mail.png" : "darkmail.png"}
          />
          <p className="text-lg sm:text-4xl font-semibold dark:text-[#F9FAFB] text-[#111827]">
            reachsagarshah@gmail.com
          </p>
          <img
            className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px]"
            src={!value ? "contact.png" : "darkcontact.png"}
          />
        </div>
        <div className="flex gap-[16px] sm:gap-[20px] items-center mb-[24px] sm:mb-[48px]">
          <img
            className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
            src={!value ? "phone.png" : "darkphone.png"}
          />
          <p className="text-lg sm:text-4xl font-semibold dark:text-[#F9FAFB] text-[#111827]">
            +91 8980500565
          </p>
          <img
            className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px]"
            src={!value ? "contact.png" : "darkcontact.png"}
          />
        </div>
        <p className="font-normal text-base dark:text-[#D1D5DB] text-[#4B5563] mb-[8px]">
          You may also find me on these platforms!
        </p>
        <div className="flex gap-[4px]">
          {logo.map((Item) => (
            <Item />
          ))}
        </div>
      </div>
    </div>
  );
};
