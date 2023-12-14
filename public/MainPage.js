export function MainPage() {
  return (
    <div className="p-20 flex">
      <div>
        <h1 className="text-4xl mb-5 text-black font-bold">Hi, I'm Sagar </h1>
        <p className="text-gray-700 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <div className="flex gap-2 mt-4 text-gray-700">
          <img className="w-3" src="location.svg"></img>
          <span>Ulan-Bator, Mongolia</span>
        </div>
        <div className="flex gap-2 mt-4 text-gray-700 ">
          <div className="w-3 h-3 bg-green-600 rounded-full translate-y-1.5"></div>
          <span>Available for new projects</span>
        </div>
        <div className="flex gap-2 mt-12 text-gray-700 ">
          <img src="github.svg" className="w-5 h-5"></img>
          <img src="twitter.svg" className="w-5 h-5"></img>
          <img src="figma.svg" className="w-5 h-5"></img>
        </div>
      </div>

      <img src="profile.webp" className="w-80 h-56"></img>
    </div>
  );
}
