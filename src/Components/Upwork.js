import { Button } from "./Button";
import { Uwork } from "./Uwork";

const data = [
  {
    title: "Sr. Frontend Developer",
    present: "Nov 2023-Present",
    list: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Team Lead",
    present: "Jul 2017 - Oct 2021",
    list: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Team Lead",
    present: "Jul 2017 - Oct 2021",
    list: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo ac magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

export function Upwork() {
  return (
    <div className="md:p-20 p-6 bg-gray-50 dark:bg-[#111827] text-justify">
      <Button text="Experience" />
      <p className="flex place-content-center m-auto mb-16 mt-8  dark:text-[#F9FAFB]">
        Here is a quick summary of my most recent experiences:
      </p>

      {data.map((item) => {
        return (
          <Uwork title={item.title} present={item.present} list={item.list} />
        );
      })}
    </div>
  );
}
