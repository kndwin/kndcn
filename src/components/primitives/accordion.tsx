import { HTMLProps } from "react";

export type AccordionItemProps = HTMLProps<HTMLDetailsElement>;
export const AccordionItem = (props: AccordionItemProps) => (
  <details {...props} />
);

export type AccordionTriggerProps = HTMLProps<HTMLDivElement>;
export const AccordionTrigger = (props: AccordionTriggerProps) => (
  <summary {...props} />
);

export type AccordionContentProps = HTMLProps<HTMLDivElement>;
export const AccordionContent = (props: AccordionContentProps) => (
  <div {...props} />
);
