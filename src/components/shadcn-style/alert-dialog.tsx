import type { HTMLProps } from "react";
import * as PrimitiveDialog from "@/components/primitives/dialog";
import { cn } from "./lib";
import { buttonVariants } from "./button";

const AlertDialog = "div";

const AlertDialogTrigger = PrimitiveDialog.DialogTrigger;

const AlertDialogContent = ({
  className,
  ...props
}: PrimitiveDialog.DialogContentProps) => {
  return (
    <PrimitiveDialog.DialogContent
      // @ts-expect-error: React 19 doesn't support HTML yet
      popover="manual"
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

const AlertDialogHeader = ({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);

const AlertDialogTitle = ({
  className,
  ...props
}: HTMLProps<HTMLHeadingElement>) => (
  <h2 className={cn("text-lg font-semibold", className)} {...props} />
);

const AlertDialogDescription = ({
  className,
  ...props
}: HTMLProps<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);

const AlertDialogCancel = ({
  className,
  ...props
}: PrimitiveDialog.DialogCloseProps) => (
  <PrimitiveDialog.DialogClose
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
);

const AlertDialogAction = ({
  className,
  ...props
}: PrimitiveDialog.DialogCloseProps) => (
  <PrimitiveDialog.DialogClose className={cn(buttonVariants())} {...props} />
);

const AlertDialogFooter = ({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => (
  <div
    className={cn(
      className,
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
    )}
    {...props}
  />
);

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
};
