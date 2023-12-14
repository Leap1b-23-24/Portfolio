export const WrapperDiv = ({ children }) => {
  return (
    <div id="wrapped" className="w-fit h-fit">
      {children}
    </div>
  );
};
