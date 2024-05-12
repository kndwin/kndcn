import * as PrimitiveAccordion from "../primitives/accordion";
import { cn } from "./lib";

const Accordion = "div";

const AccordionItem = ({
  className,
  ...props
}: PrimitiveAccordion.AccordionItemProps) => (
  <PrimitiveAccordion.AccordionItem
    className={cn("border-b group", className)}
    {...props}
  />
);

const AccordionTrigger = ({
  className,
  ...props
}: PrimitiveAccordion.AccordionTriggerProps) => (
  <PrimitiveAccordion.AccordionTrigger
    className={cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline",

      className
    )}
    {...props}
  />
);

const AccordionContent = ({
  className,
  ...props
}: PrimitiveAccordion.AccordionContentProps) => (
  <PrimitiveAccordion.AccordionContent
    className={cn(
      "overflow-hidden text-sm [group:open]:animate-accordion-down",
      className
    )}
    {...props}
  />
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
