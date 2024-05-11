import * as PrimitivePopover from "@/components/primitives/popover";

import { cn } from "./lib";

const Popover = "div";

const PopoverTrigger = PrimitivePopover.PopoverTrigger;

const PopoverContent = ({
  className,
  ...props
}: PrimitivePopover.PopoverContentProps) => {
  return (
    <PrimitivePopover.PopoverContent
      className={cn(
        "animate-fade-in z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
        className
      )}
      {...props}
    >
      {props.children}
    </PrimitivePopover.PopoverContent>
  );
};

export { PopoverTrigger, PopoverContent, Popover };
