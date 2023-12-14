export const MenuIcon = (props) => {
  return (
    <svg
      onClick={props.toggleNavbar}
      className="md:hidden flex w-16 cursor-pointer "
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="stroke-[#4B5563] dark:stroke-[#D1D5DB]"
        d="M4 12H20"
        stroke="#4B5563"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className="stroke-[#4B5563] dark:stroke-[#D1D5DB]"
        d="M4 6H20"
        stroke="#4B5563"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className="stroke-[#4B5563] dark:stroke-[#D1D5DB]"
        d="M4 18H20"
        stroke="#4B5563"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
