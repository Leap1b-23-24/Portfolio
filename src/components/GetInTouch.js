import { Button } from "./Button";
import { useTheme } from "@/app/page";
export const GetInTouch = (props) => {
  const darkmode = useTheme();
  return (
    <div
      className="w-full mt-[50px] flex flex-col items-center justify-center gap-[40px] pb-[50px]"
      id="get"
    >
      <div className="mt-[50px] flex justify-center">
        <Button title="Get in touch"></Button>
      </div>
      <p className="dark:text-[#D1D5DB]">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="flex justify-center gap-[30px]">
        {darkmode ? (
          <img src="/dmail.svg" />
        ) : (
          <img className="w-[32px] h-[32px]" src="/mail.svg"></img>
        )}
        <p className="dark:text-[#D1D5DB]">reachsagarshah@gmail.com</p>
        {darkmode ? (
          <img src="/dcopy.svg" />
        ) : (
          <img className="w-[32px] h-[32px]" src="/copy.png" />
        )}
      </div>
      <div className="flex gap-[30px]">
        {darkmode ? (
          <img src="/dcall.svg" />
        ) : (
          <img className="w-[32px] h-[32px]" src="/phone.png"></img>
        )}
        <p className="dark:text-[#D1D5DB]">+91 8980500565</p>
        {darkmode ? (
          <img src="/dcopy.svg" />
        ) : (
          <img className="w-[32px] h-[32px]" src="/copy.png" />
        )}
      </div>
      <div className="flex flex-col gap-[20px] items-center">
        <p className="dark:text-[#D1D5DB]">
          You may also find me on these platforms!
        </p>
        {darkmode ? (
          <div className="flex gap-[10px] justify-center">
            <img src="/dgit.svg" />
            <img src="/dtwi.svg" />
            <img src="/dfig.svg" />
          </div>
        ) : (
          <div className="flex gap-[10px] justify-center">
            <img src="/n.svg" />
            <img src="/twi.svg" />
            <img src="/fig.svg" />
          </div>
        )}
      </div>
    </div>
  );
};
