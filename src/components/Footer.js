export const Footer = () => {
  return (
    <div className="dark:bg-[#111827] w-full bg-[#F9FAFB] py-[24px] sm:px-[80px] ">
      <div className="w-full sm:px-[32px] flex justify-center gap-[8px]">
        <img className="w-[16px] h-[16px]" src="footer.png" />
        <p className="text-sm font-normal dark:text-[#D1D5DB] text-[#4B5563]">
          2023 | <a className="decoration-solid">Designed</a> and{" "}
          <a className="decoration-solid">coded</a> with ❤️️ by Sagar Shah
        </p>
      </div>
    </div>
  );
};
