"use client";
import { Sun } from "./sun";
import { Moon } from "./sun";
import { useDark } from "@/app/page";
const ThemeButton = () => {
  const { setDark, isDark } = useDark();
  const clickHandler = () => {
    setDark((prev) => !prev);
  };
  return (
    <div onClick={clickHandler} className="w-fit h-fit">
      {isDark ? <Sun /> : <Moon />}
    </div>
  );
};

export default ThemeButton;
