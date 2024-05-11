import type { HTMLProps } from "react";

import { tm } from "../tailwind-utils";

const Label = ({ className, ...props }: HTMLProps<HTMLLabelElement>) => (
  <label
    className={tm(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
);

export { Label };
