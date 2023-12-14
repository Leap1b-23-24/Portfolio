import { EachExps } from "./eachExp";

export const Experience = (props) => {
  const myData = [
    {
      title: `${props.title1}`,
      lists: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: `${props.date1}`,
    },
    {
      title: `${props.title2}`,
      lists: [
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: `${props.date2}`,
    },
    {
      title: `${props.title3}`,
      lists: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: `${props.date3}`,
    },
  ];
  return (
    <div className="w-full  gap-[24px] flex flex-col h-fit ">
      {myData.map((each, index) => {
        return (
          <EachExps
            key={index}
            title={each.title}
            date={each.date}
            lists={each.lists}
          />
        );
      })}
    </div>
  );
};
