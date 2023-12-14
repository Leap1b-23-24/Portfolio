export function Drawer(props) {
  return (
    <div className="h-full w-[320px] bg-black">
      <div className="flex items-start px-[16px] py-[16px]">
        <ul className="flex flex-col gap-[16px]">
          <li className="text-[16px] font-[500] text-white">About</li>
          <li className="text-[16px] font-[500] text-white">Work</li>
          <li className="text-[16px] font-[500] text-white">Testimonials</li>
          <li className="text-[16px] font-[500] text-white">Contact</li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center px-[16px] py-[16px] gap-5">
        <div className="flex gap-[150px]">
          <h2 className="text-[14px] font-[400] text-white flex items-center justify-center">
            Switch Theme
          </h2>
          <img
            className="w-7 h-7 flex items-center justify-center rounded-8"
            src="/smalltheme.svg"
            alt=""
          />
        </div>
        <button className="h-10 w-[288px] rounded-[12px] bg-white flex items-center justify-center gap-8">
          <h1 className="text-[16px] font-[500] text-black">Downlaod CV</h1>
        </button>
      </div>
    </div>
  );
}
