import W from "./Texts";

export function Footer() {
  return (
    <div className="py-[24px] flex bg-gray-50 justify-center items-center px-[8px] dark:bg-[#111827] gap-[8px]">
      <div className="grid place-content-center">
        <img src="ficon.svg"></img>
      </div>

      <p className="text-[14px] text-gray-600 dark:text-[#D1D5DB]">
        2023 | Designed and coded with ❤️️ by Sagar Shah
      </p>
      {/* <Texts  text="2023 | Designed and coded with ❤️️ by Sagar Shah" /> */}
    </div>
  );
}
