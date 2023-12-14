export const XSvg = (props) => {
  return (
    <svg
      onClick={props.onClick}
      className="cursor-pointer"
      width="24"
      height="24"
      cursor="pointer"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        className="stroke-[#4B5563] dark:stroke-[#D1D5DB]"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        className="stroke-[#4B5563] dark:stroke-[#D1D5DB]"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
