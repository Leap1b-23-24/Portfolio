export const Menu = (props) => {
  return (
    <svg
      onClick={props.onClick}
      width="24"
      height="24"
      cursor="pointer"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12H20"
        className="stroke-[#4B5563] dark:stroke-[#D1D5DB]"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6H20"
        className="stroke-[#4B5563] dark:stroke-[#D1D5DB]"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 18H20"
        className="stroke-[#4B5563] dark:stroke-[#D1D5DB]"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
