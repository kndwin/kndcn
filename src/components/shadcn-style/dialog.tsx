import type { HTMLProps } from "react";
import * as PrimitiveDialog from "@/components/primitives/dialog";
import { cn } from "./lib";

const Dialog = "div";

const DialogTrigger = PrimitiveDialog.DialogTrigger;

const DialogContent = ({
  className,
  ...props
}: PrimitiveDialog.DialogContentProps) => {
  return (
    <PrimitiveDialog.DialogContent
      className={cn(
        className,
        "backdrop:bg-black/80 backdrop:animate-fade-in w-full max-w-lg ",
        "inset-[unset] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "gap-4 border bg-background p-6 shadow-lg duration-200 rounded sm:rounded-lg",
        "animate-fade-in"
      )}
      {...props}
    >
      {props.children}
    </PrimitiveDialog.DialogContent>
  );
};

const DialogHeader = ({ className, ...props }: HTMLProps<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);

const DialogTitle = ({
  className,
  ...props
}: HTMLProps<HTMLHeadingElement>) => (
  <h2 className={cn("text-lg font-semibold", className)} {...props} />
);

const DialogClose = PrimitiveDialog.DialogClose;

const DialogDescription = ({
  className,
  ...props
}: HTMLProps<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);
const DialogFooter = ({ className, ...props }: HTMLProps<HTMLDivElement>) => (
  <div
    className={cn(
      className,
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
    )}
    {...props}
  />
);

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
};
