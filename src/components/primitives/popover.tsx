import type { HTMLProps, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

type PopoverTriggerProps = {
  children: ReactNode;
  asChild?: boolean;
} & HTMLProps<HTMLButtonElement>;

export const PopoverTrigger = ({
  children,
  asChild,
  ...props
}: PopoverTriggerProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <>
      <Comp
        id={triggerId}
        popovertarget={popoverId}
        popovertargetaction="toggle"
        {...props}
      >
        {children}
      </Comp>
      <style>{triggerStyle}</style>
    </>
  );
};

export type PopoverContentProps = {
  children: ReactNode;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  alignOffset?: number;
} & HTMLProps<HTMLDivElement>;

export const PopoverContent = ({
  children,
  align = "center",
  side = "bottom",
  alignOffset = 0,
  sideOffset = 0,
  ...props
}: PopoverContentProps) => {
  return (
    <>
      <div id={popoverId} popover="" {...props}>
        {children}
      </div>
      <style>{popoverStyle({ alignOffset, sideOffset, align, side })}</style>
    </>
  );
};

const triggerId = `trigger-ulid`;
const popoverId = `mypopover-ulid`;

const triggerStyle = `
	#${triggerId} {
		anchor-name: --${triggerId};
	} 
`;

const sideAlign = ({
  sideOffset,
  alignOffset,
}: {
  sideOffset: number;
  alignOffset: number;
}) => ({
  "top-center": `bottom: calc(anchor(top) + ${sideOffset}px); left: anchor(center); transform: translate(-50%, 0);`,
  "top-start": `bottom: calc(anchor(top) + ${sideOffset}px); left: calc(anchor(left) + -${alignOffset}px); transform: translate(-100%, 0);`,
  "top-end": `bottom: calc(anchor(top) + ${sideOffset}px); left: calc(anchor(right) + ${alignOffset}px); transform: translate(0, 0);`,
  "bottom-center": `top: calc(anchor(bottom) + ${sideOffset}px); left: anchor(center); transform: translate(-50%, 0);`,
  "bottom-start": `top: calc(anchor(bottom) + ${sideOffset}px); left: calc(anchor(left) + -${alignOffset}px); transform: translate(-100%, 0);`,
  "bottom-end": `top: calc(anchor(bottom) + ${sideOffset}px); left: calc(anchor(right) + ${alignOffset}px); transform: translate(0, 0);`,
  "left-center": `top: anchor(center); right: calc(anchor(left) + ${sideOffset}px); transform: translate(0, -50%);`,
  "left-start": `top: anchor(center); right: calc(anchor(left) + ${sideOffset}px); transform: translate(0, -50%);`,
  "left-end": `top: anchor(center); right: calc(anchor(left) + ${sideOffset}px); transform: translate(0, -50%);`,
  "right-center": `top: anchor(center); left: calc(anchor(right) + ${sideOffset}px); transform: translate(0, -50%);`,
  "right-start": `top: anchor(center); left: calc(anchor(right) + ${sideOffset}px); transform: translate(0, -50%);`,
  "right-end": `top: anchor(center); left: calc(anchor(right) + ${sideOffset}px); transform: translate(0, -50%);`,
});

const popoverStyle = ({
  sideOffset,
  alignOffset,
  side,
  align,
}: {
  side: "top" | "bottom" | "left" | "right";
  align: "start" | "center" | "end";
  sideOffset: number;
  alignOffset: number;
}) => `
	#${popoverId} {
		position-anchor: --${triggerId};
		inset: unset; 
		${sideAlign({ sideOffset, alignOffset })[`${side}-${align}`]}
	} 
`;
