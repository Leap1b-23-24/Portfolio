import { forwardRef } from "react";

export const ScrollWrapper = forwardRef(function ScrollWrapper(props, ref) {
  return <div ref={ref}>{props.children}</div>;
});
