export function Header() {
  return (
    <div className="font-semibold p-5 bg-gray-100 w-100 h-16">
      <div className="flex gap-x-8 gap-x-flex place-content-between items-center">
        <span>&#60;SS&#47;&#62;</span>
        <div className="flex gap-6 text-gray-800 items-center">
          <span>About</span>
          <span>Work</span>
          <span>Testimonials</span>
          <span>Contact</span>
          <img src="sun.png" className="w-6 h-6"></img>
          <div className="w-[136px] h-[36px] flex gap-2 items-center justify-center bg-black text-white rounded-xl">
            <p className="text-sm">Download CV</p>
          </div>
        </div>
      </div>
    </div>
  );
}
