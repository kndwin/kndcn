import { Slot } from "@radix-ui/react-slot";
import type { ReactNode, HTMLProps } from "react";

export type DialogTriggerProps = {
  asChild?: boolean;
  targetId: string;
} & HTMLProps<HTMLButtonElement>;
export const DialogTrigger = ({
  asChild,
  targetId,
  ...props
}: DialogTriggerProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    // @ts-expect-error: React HTML doesn't support popovertargetaction yet
    <Comp popovertarget={targetId} popovertargetaction="toggle" {...props} />
  );
};

export type DialogContentProps = {
  id: string;
} & HTMLProps<HTMLDialogElement>;
export const DialogContent = (props: DialogContentProps) => {
  return (
    // @ts-expect-error: React HTML doesn't support popovertargetaction yet
    <dialog popover="auto" {...props} />
  );
};

export type DialogCloseProps = {
  targetId: string;
  asChild?: boolean;
} & HTMLProps<HTMLButtonElement>;
export const DialogClose = ({
  targetId,
  asChild,
  ...props
}: DialogCloseProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    // @ts-expect-error: React HTML doesn't support popovertargetaction yet
    <Comp popovertarget={targetId} popovertargetaction="hide" {...props} />
  );
};
