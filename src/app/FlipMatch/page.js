"use client";
import { useState, useEffect, useMemo, useRef, useContext } from "react";
import { FlipCard } from "@/Components/FlipCard";
import { createContext } from "react";
let z = 0;
const card = [
  {
    id: 1,
    source: "/icon-javscript.svg",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
  {
    id: 2,
    source: "/icon-typescript.svg",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
  {
    id: 3,
    source: "/icon-react.svg",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
  {
    id: 4,
    source: "/icon-nextjs.svg",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
  {
    id: 5,
    source: "/icon-nodejs.svg",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
  {
    id: 6,
    source: "/icon-express.svg",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
  {
    id: 7,
    source: "/icon-nest.svg",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
  {
    id: 8,
    source: "/icon-socket.png",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
  {
    id: 10,
    source: "/icon-javscript.svg",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
  {
    id: 20,
    source: "/icon-typescript.svg",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
  {
    id: 30,
    source: "/icon-react.svg",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
  {
    id: 40,
    source: "/icon-nextjs.svg",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
  {
    id: 50,
    source: "/icon-nodejs.svg",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
  {
    id: 60,
    source: "/icon-express.svg",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
  {
    id: 70,
    source: "/icon-nest.svg",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
  {
    id: 80,
    source: "/icon-socket.png",
    order: Math.floor(Math.random() * 100),
    zIndex: { z },
  },
];
export const FlipContext = createContext();
export const useFlip = () => useContext(FlipContext);
export default function FlipMatch() {
  let flipCount=0;
  // const [isFlip, setIsFlip] = useState(false);

  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped((prev) => !prev);
    flipCount++;
  }

  function flipTwo() {
    flipCount % 2 == 0 ? true : false;
  }
  const handleClick = () => {
    const element = ref.current.querySelector("flipCardInner");
    console.log(element);
  };
  const ref = useRef();

  return (
    // <FlipContext.Provider value={{ isFlip, setIsFlip, flipCard }}>
    <div id="Flipmatch" className=" bg-gray-500 h-screen gap-2 w-full flex rounded-md flex-col items-center justify-center  text-white">
      <h2 onClick={handleClick} className="text-3xl text-black mb-10">
        MEMORY
      </h2>
      <div
        className="Cards grid grid-cols-4 items-center justify-center gap-5"
        ref={ref}
      >
        {card.map((item, index) => (
          <FlipCard
            isFlipped={isFlipped}
            setIsFlipped={setIsFlipped}
            flipCard={flipCard}
            id={item.id}
            zIndex={item.zIndex}
            key={index}
            source={item.source}
            order={item.order}
          />
        ))}
      </div>
    </div>
    // </FlipContext.Provider>
  );
}
