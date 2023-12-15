import { Button } from "../components/Button";
import { CopyIcon } from "../components/assets/CopyIcon";
import { EmailIcon } from "../components/assets/EmailIcon";
import { FigmaIcon, FigmaIconDark } from "../components/assets/FigmaIcon";
import { GitIcon, GitIconDark } from "../components/assets/GitIcon";
import { PhoneIcon } from "../components/assets/PhoneIcon";
import { TwitterIcon, TwitterIconDark } from "../components/assets/TwitterIcon";
import { useTheme } from "../app/page";
export function Footer() {
  const { theme, toggleThemeSwitch } = useTheme();
  return (
    <div>
      <div className="md:p-20 p-6">
        <Button text="Get in touch"></Button>
        <p className="flex place-content-center m-auto mb-16 mt-10 dark:text-[#F9FAFB] text-center">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className="flex place-content-center items-center gap-4 mb-3">
          <EmailIcon />
          <span className="text-gray-900 font-semibold md:text-[36px] text-[18px] dark:text-[#F9FAFB]">
            reachsagarshah@gmail.com
          </span>
          <CopyIcon />
        </div>
        <div className="flex place-content-center items-center gap-4">
          <PhoneIcon />
          <span className="text-gray-900  md:text-[36px] text-[18px] font-semibold dark:text-[#F9FAFB]">
            +91 8980500565
          </span>
          <CopyIcon />
        </div>
        <p className="flex place-content-center text-base  text-gray-600 mt-12 dark:text-[#D1D5DB]">
          You may also find me on these platforms!
        </p>
        <div className="flex gap-4 mt-2 text-gray-600 place-content-center">
          {theme === "light" ? (
            <GitIcon toggleThemeSwitch={toggleThemeSwitch} />
          ) : (
            <GitIconDark toggleThemeSwitch={toggleThemeSwitch} />
          )}

          {theme === "light" ? (
            <TwitterIcon toggleThemeSwitch={toggleThemeSwitch} />
          ) : (
            <TwitterIconDark toggleThemeSwitch={toggleThemeSwitch} />
          )}

          {theme === "light" ? (
            <FigmaIcon toggleThemeSwitch={toggleThemeSwitch} />
          ) : (
            <FigmaIconDark toggleThemeSwitch={toggleThemeSwitch} />
          )}
        </div>
      </div>
      <div className="flex gap-4 text-gray-600 mt-12 place-content-center w-100% bg-gray-50 h-[68px] items-center dark:bg-[#111827] dark:text-[#D1D5DB]">
        <p> ® 2023 | Designed and coded with ❤️️ by Sagar Shah</p>
      </div>{" "}
    </div>
  );
}
