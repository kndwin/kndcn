import * as TabsPrimitive from "@/components/primitives/tabs";

import { cn } from "@/components/shadcn-style/lib";

const Tabs = TabsPrimitive.Root;

const TabsList = ({ className, ...props }: TabsPrimitive.TabListProps) => (
  <TabsPrimitive.List
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
);

const TabsTrigger = ({
  className,
  ...props
}: TabsPrimitive.TabTriggerProps) => (
  <TabsPrimitive.Trigger
    className={cn(
      "flex w-full items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 peer-checked:bg-background peer-checked:text-foreground peer-checked:shadow",
      className
    )}
    {...props}
  />
);

const TabsContent = ({
  className,
  ...props
}: TabsPrimitive.TabContentProps) => (
  <TabsPrimitive.Content
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
);

export { Tabs, TabsList, TabsTrigger, TabsContent };
