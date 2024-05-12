import { HTMLProps } from "react";

import { cn } from "./lib";

type CardProps = HTMLProps<HTMLDivElement>;
const Card = ({ className, ...props }: CardProps) => (
  <div
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
);

type CardHeaderProps = HTMLProps<HTMLDivElement>;
const CardHeader = ({ className, ...props }: CardHeaderProps) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

type CardTitleProps = HTMLProps<HTMLHeadingElement>;
const CardTitle = ({ className, ...props }: CardTitleProps) => (
  <h3
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
);

type CardDescriptionProps = HTMLProps<HTMLParagraphElement>;
const CardDescription = ({ className, ...props }: CardDescriptionProps) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);

type CardContentProps = HTMLProps<HTMLDivElement>;
const CardContent = ({ className, ...props }: CardContentProps) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);

type CardFooterProps = HTMLProps<HTMLDivElement>;
const CardFooter = ({ className, ...props }: CardFooterProps) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
);

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
