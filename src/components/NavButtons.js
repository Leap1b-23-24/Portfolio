import { useState } from "react";

export const NavButtons = (props) => {
  const [isHover, setIsHover] = useState(false);
  const hoverHandler = () => {
    setIsHover((prev) => !prev);
  };
  return (
    <div
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
      className={`w-fit h-fit overflow-hidden rounded-md px-1 ${
        isHover ? ` bg-[#d4dfdb]` : `bg-transparent`
      }`}
    >
      <p
        id={props.text}
        onClick={(event) => {
          const id = event.target.id;
          document
            .getElementById(`${id}section`)
            .scrollIntoView({ behavior: "smooth" });
        }}
        className="cursor-pointer font-semibold "
      >
        {props.text}
      </p>

      <div
        id={props.id}
        className={`w-full h-1 rounded-lg transition-all duration-300`}
      ></div>
    </div>
  );
};
