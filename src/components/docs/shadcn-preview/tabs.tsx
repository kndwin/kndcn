import { Button, buttonVariants } from "@/components/shadcn-style/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-style/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn-style/tabs";
import { Label } from "@/components/shadcn-style/label";
import { Input } from "@/components/shadcn-style/input";

import {
  Tabs as DTabs,
  TabsContent as DTabsContent,
  TabsList as DTabsList,
  TabsTrigger as DTabsTrigger,
} from "@/components/docs/tabs";
import { CodeViewer } from "@/components/docs/code-viewer";
import { ClientCopyClipboard } from "@/components/docs/copy-clipboard";
import { HTMLProps } from "react";

export function TabsPreview() {
  return (
    <section className="py-4 mt-4">
      <h2 className="text-xl font-bold mb-2">Tabs</h2>
      <div className="p-4 border rounded min-h-60 flex items-center justify-center">
        <DTabs className="w-full">
          <DTabsList classID="mb-8">
            <DTabsTrigger
              name="tabs-preview-container"
              value="tabs-preview-content"
              defaultOpen
            >
              Preview
            </DTabsTrigger>
            <DTabsTrigger
              name="tabs-preview-container"
              value="tabs-preview-code-usage"
            >
              Usage
            </DTabsTrigger>
            <DTabsTrigger
              name="tabs-preview-container"
              value="tabs-preview-code-customize"
            >
              Customize
            </DTabsTrigger>
            <DTabsTrigger
              name="tabs-preview-container"
              value="tabs-preview-code-primitive"
            >
              Primitive
            </DTabsTrigger>
          </DTabsList>
          <DTabsContent value="tabs-preview-content">
            <Tabs className="w-[400px] mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger name="tabs-preview" value="account" defaultOpen>
                  Account
                </TabsTrigger>
                <TabsTrigger name="tabs-preview" value="password">
                  Password
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                      {`Make changes to your account here. Click save when you're done.`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="@peduarte" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      {`Change your password here. After saving, you'll be logged out.`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save password</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </DTabsContent>
          <DTabsContent value="tabs-preview-code-usage" className="relative">
            <ToggleExpandCollapse id="toggle-preview-code-usage" />
            <ClientCopyClipboard
              content={tabsCodePreview}
              className="absolute right-4 top-4"
            />
            <CodeViewExpandable>
              <CodeViewer code={tabsCodePreview} />
            </CodeViewExpandable>
          </DTabsContent>
          <DTabsContent
            value="tabs-preview-code-customize"
            className="relative"
          >
            <ToggleExpandCollapse id="toggle-preview-code-customize" />
            <ClientCopyClipboard
              content={tabsCodeCustomize}
              className="absolute right-4 top-4"
            />
            <CodeViewExpandable>
              <CodeViewer code={tabsCodeCustomize} />
            </CodeViewExpandable>
          </DTabsContent>
          <DTabsContent
            value="tabs-preview-code-primitive"
            className="relative"
          >
            <ToggleExpandCollapse id="toggle-preview-code-primitive" />
            <ClientCopyClipboard
              content={tabsCodePrimitive}
              className="absolute right-4 top-4"
            />
            <CodeViewExpandable>
              <CodeViewer code={tabsCodePrimitive} />
            </CodeViewExpandable>
          </DTabsContent>
        </DTabs>
      </div>
    </section>
  );
}

function CodeViewExpandable({ children, ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className="overflow-hidden bg-black p-4 rounded-lg max-h-40 peer-checked:max-h-[600px] peer-checked:overflow-auto mt-4"
      {...props}
    >
      {children}
    </div>
  );
}

function ToggleExpandCollapse({ id }: { id: string }) {
  return (
    <>
      <input id={id} className="hidden peer" type="checkbox" />
      <label
        className={buttonVariants({
          variant: "secondary",
          className:
            "block peer-checked:hidden w-fit absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-1/2",
        })}
        htmlFor={id}
      >
        Expand
      </label>
      <label
        htmlFor={id}
        className={buttonVariants({
          variant: "secondary",
          className:
            "hidden peer-checked:block absolute left-1/2 -translate-x-1/2 bottom-4",
        })}
      >
        Collapse
      </label>
    </>
  );
}

const tabsCodePreview = `import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs className="w-[400px] mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger name="tabs-preview" value="account" defaultOpen>
          Account
        </TabsTrigger>
        <TabsTrigger name="tabs-preview" value="password">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
`;

const tabsCodeCustomize = `import * as TabsPrimitive from "@/components/primitives/tabs"

import { cn } from "@/components/lib";

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

`;

const tabsCodePrimitive = `import type { HTMLProps } from "react";
import { cn } from "@/components/lib";

export type TabsProps = HTMLProps<HTMLDivElement>;
export const Root = "div";

export type TabListProps = HTMLProps<HTMLDivElement>;
export const List = ({ className, ...props }: TabListProps) => (
  <div className={cn("flex peer", className)} {...props} />
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
      id={\`\${value}\`}
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
    <div id={\`\${value}-content\`} className={cn("hidden", className)} {...props}>
      {children}
    </div>
  </>
);

const contentStyle = ({ value }: { value: string }) => \`
.peer:has(#\${value}:checked) ~ #\${value}-content {
	display:block;
}`;
