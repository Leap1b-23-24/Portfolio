export const Uwork = (props) => {
  return (
    <div className="md:w-[896px] md:h-[288px] bg-white m-auto p-8 md:flex block gap-12 mb-12 leading-4 text-base dark:bg-[#1F2937] rounded-[12px]">
      <img src="Column.png" className="w-[206px] h-[28px] "></img>
      <div className="leading-7 md:mb-0 mb-3">
        <h2 className="text-xl mb-2 md:mt-0 mt-3  dark:text-[#F9FAFB]">
          {props.title}
        </h2>
        <ul className="list-disc text-gray-600 dark:text-[#D1D5DB] w-[415px]">
          {props.list.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <p className="text-gray-700 text-xs   flex justify-end md:mt-0 mt-4 dark:text-[#D1D5DB]">
        {props.present}
      </p>
    </div>
  );
};
