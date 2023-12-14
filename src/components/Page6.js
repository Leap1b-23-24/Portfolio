import { Copy } from "@/assets/svg/Copy";
import Graybttn from "./Graybttn";
import Texts from "./Texts";

import { Call } from "@/assets/svg/Call";
import { Mail } from "@/assets/svg/Mail";

export function Page6() {
  return (
    <div className="px-[16px] py-[64px] dark:bg-[#030712]" id="contact">
      <div className="flex flex-col items-center gap-[16px] dark:text-[#F9FAFB]">
        <Graybttn title="Get in touch" />
        <Texts text="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect." />
        <div className="flex gap-[16px] justify-center items-center w-full">
          <Mail />
          <p className="text-[18px] leading-7 font-semibold xl:text-[36px] xl:leading-10">
            reachsagarshah@gmail.com
          </p>
          <Copy />
        </div>
        <div className="flex gap-[22px] items-center">
          <Call />
          <p className="text-[18px] leading-7 font-semibold xl:text-[36px] xl:leading-10">
            +91 8980500565
          </p>
          <Copy />
        </div>
        <Texts text="You may also find me on these platforms!" />
      </div>
    </div>
  );
}
