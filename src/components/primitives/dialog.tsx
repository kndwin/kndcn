import { Slot } from "@radix-ui/react-slot";
import type { ReactNode, HTMLProps } from "react";

export type DialogTriggerProps = {
  asChild?: boolean;
} & HTMLProps<HTMLButtonElement>;
export const DialogTrigger = ({ asChild, ...props }: DialogTriggerProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    // @ts-expect-error: React HTML doesn't support popovertargetaction yet
    <Comp popovertarget="mydialog" popovertargetaction="toggle" {...props} />
  );
};

export type DialogContentProps = HTMLProps<HTMLDialogElement>;
export const DialogContent = (props: DialogContentProps) => {
  return (
    // @ts-expect-error: React HTML doesn't support popovertargetaction yet
    <dialog id="mydialog" open="" popover="" {...props} />
  );
};

export type DialogCloseProps = HTMLProps<HTMLButtonElement>;
export const DialogClose = (props: DialogCloseProps) => {
  return (
    // @ts-expect-error: React HTML doesn't support popovertargetaction yet
    <button popovertarget="mydialog" popovertargetaction="hide" {...props} />
  );
};
