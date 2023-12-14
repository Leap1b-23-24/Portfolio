import { forwardRef } from "react";

export const ScrollWrapper = forwardRef((props, ref) => {
  return <div ref={ref}>{props.children}</div>;
});
