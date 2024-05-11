import type { HTMLProps, ReactNode, cache } from "react";
import { Slot } from "@radix-ui/react-slot";

type PopoverTriggerProps = {
  children: ReactNode;
  asChild?: boolean;
  id: string;
} & HTMLProps<HTMLButtonElement>;

export const PopoverTrigger = ({
  children,
  asChild,
  id,
  ...props
}: PopoverTriggerProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <>
      <Comp
        id={`popover-trigger-${id}`}
        // @ts-expect-error: React HTML doesn't support popovertarget yet
        popovertarget={`popover-content-${id}`}
        popovertargetaction="toggle"
        {...props}
      >
        {children}
      </Comp>
      <style>{triggerStyle({ id })}</style>
    </>
  );
};

export type PopoverContentProps = {
  children: ReactNode;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  alignOffset?: number;
  id: string;
} & HTMLProps<HTMLDivElement>;

export const PopoverContent = ({
  children,
  align = "center",
  side = "bottom",
  alignOffset = 0,
  sideOffset = 0,
  id,
  ...props
}: PopoverContentProps) => {
  return (
    <>
      {/* @ts-expect-error: React HTML doesn't support popover yet */}
      <div id={`popover-content-${id}`} popover="" {...props}>
        {children}
      </div>
      <style>
        {popoverStyle({ id, alignOffset, sideOffset, align, side })}
      </style>
    </>
  );
};

const triggerStyle = ({ id }: { id: string }) => `
	#popover-trigger-${id} {
		anchor-name: --popover-trigger-${id};
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
  id,
}: {
  side: "top" | "bottom" | "left" | "right";
  align: "start" | "center" | "end";
  sideOffset: number;
  alignOffset: number;
  id: string;
}) => `
	#popover-content-${id} {
		position-anchor: --popover-trigger-${id};
		inset: unset; 
		${sideAlign({ sideOffset, alignOffset })[`${side}-${align}`]}
	} 
`;
