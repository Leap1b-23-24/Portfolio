export function Work(props) {
  return (
    <div className="flex flex-col gap-[8px] items-center text-gray-600">
      <div>
        <img className="max-w-[400px]" src={`${props.imgs}`}></img>
      </div>
      <p>{props.work}</p>
    </div>
  );
}
export default Work;
