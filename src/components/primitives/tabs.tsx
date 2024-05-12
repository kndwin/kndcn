import type { HTMLProps } from "react";
import { tm } from "../tailwind-utils";

export type TabsProps = HTMLProps<HTMLDivElement>;
export const Root = "div";

export type TabListProps = HTMLProps<HTMLDivElement>;
export const List = ({ className, ...props }: TabListProps) => (
  <div className={tm("flex peer", className)} {...props} />
);

export type TabTriggerProps = HTMLProps<HTMLLabelElement> & {
  value: string;
  name: string;
  defaultOpen?: boolean;
};

export const Trigger = ({
  htmlFor,
  name,
  defaultOpen,
  value,
  id,
  ...props
}: TabTriggerProps) => (
  <div>
    <input
      name={name}
      type="radio"
      className="hidden peer"
      id={`${value}`}
      defaultChecked={defaultOpen}
    />
    <label htmlFor={value} {...props} />
  </div>
);

export type TabContentProps = HTMLProps<HTMLDivElement> & {
  value: string;
};

export const Content = ({
  value,
  className,
  children,
  ...props
}: TabContentProps) => (
  <>
    <style>{contentStyle({ value })}</style>
    <div id={`${value}-content`} className={tm("hidden", className)} {...props}>
      {children}
    </div>
  </>
);

const contentStyle = ({ value }: { value: string }) => `
.peer:has(#${value}:checked) ~ #${value}-content {
	display:block;
}
`;
