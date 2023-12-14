export function Planguage(props) {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <img className="w-28 h-28" src={`/${props.source}`} />
      <span className="text-lg font-normal">{props.text}</span>
    </div>
  );
}
