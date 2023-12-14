export const Projects = (props) => {
  return (
    <div className="bg-[#F9FAFB] dark:bg-black md:px-20 md:py-6 px-8 py-4 dark:py-4 flex gap-2 md:gap-10 justify-around items-start">
     <a href={`Stopwatch`} className="flex jutify-center items-center gap-2 dark:text-white text-black text-sm cursor-pointer"><img className="w-7 h-7" src="/stopwatch.png"/><span>Stopwatch</span></a>
     <a href={`Password`}  className="flex jutify-center items-center gap-2 dark:text-white text-black text-sm cursor-pointer"><img className="w-7 h-7" src="/password.png"/><span>Password</span></a>
     <a href={`FlipMatch`} className="flex jutify-center items-center gap-2 dark:text-white text-black text-sm cursor-pointer"><img className="w-7 h-7" src="/memory.png"/><span>Memory game</span></a>
    </div>
  );
};
