export function Button(props) {
  return (
    <div className="rounded-full px-5 py-1 text-[12px] bg-[#E5E7EB] text-[#4B5563] dark:bg-[#374151] dark:text-[#D1D5DB]">
      {props.text}
    </div>
  );
}
