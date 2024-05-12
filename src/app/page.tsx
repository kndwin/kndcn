import { Button, buttonVariants } from "@/components/shadcn-style/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn-style/popover";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/shadcn-style/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogTrigger,
} from "@/components/shadcn-style/alert-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn-style/accordion";
import { Label } from "@/components/shadcn-style/label";
import { Input } from "@/components/shadcn-style/input";

import { TabsPreview } from "@/components/docs/shadcn-preview/tabs";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto max-w-3xl">
        <header className="py-4">
          <h1 className="text-2xl font-bold">kndcn</h1>
          <p>{`shadcn without "use client": Server-side components but better*`}</p>
          <p>
            * Only supports the latest everything (React 19, Tailwind v4, Chrome
            125)
          </p>
        </header>

        <p>
          Experimental project to see if we can get the best of both worlds:
          server-side rendering and client-side interactivity.
        </p>

        <TabsPreview />
        <AccordionPreview />
        <PopoverPreview />
        <DialogPreview />
        <AlertDialogPreview />
      </div>
    </main>
  );
}

function AccordionPreview() {
  return (
    <section className="py-4 mt-4">
      <h2 className="text-xl font-bold mb-2">Accordion</h2>
      <div className="p-4 border rounded min-h-60 flex items-center justify-center">
        <Accordion className="w-80">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              {`Yes. It's animated by default, but you can disable it if you prefer.`}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

function AlertDialogPreview() {
  const id = "alert-dialog-preview";
  return (
    <section className="py-4 mt-4">
      <h2 className="text-xl font-bold mb-2">Alert Dialog</h2>
      <div className="p-4 border rounded min-h-60 flex items-center justify-center">
        <AlertDialog>
          <AlertDialogTrigger targetId={id} asChild>
            <Button>Open dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent id={id}>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogCancel targetId={id}>Cancel</AlertDialogCancel>
                <AlertDialogAction targetId={id}>Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
}

function DialogPreview() {
  const id = "dialog-preview";
  return (
    <section className="py-4 mt-4">
      <h2 className="text-xl font-bold mb-2">Dialog</h2>
      <div className="p-4 border rounded min-h-60 flex items-center justify-center">
        <Dialog>
          <DialogTrigger targetId={id} asChild>
            <Button>Open dialog</Button>
          </DialogTrigger>
          <DialogContent id={id}>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                {`Make changes to your profile here. Click save when you're done.`}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild targetId={id}>
                <Button>Save changes</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

function PopoverPreview() {
  return (
    <section className="py-4 mt-4">
      <h2 className="text-xl font-bold mb-2">Popover</h2>
      <div className="p-4 border rounded min-h-60 flex items-center justify-center">
        <Popover>
          <PopoverTrigger id="bottom-center" asChild>
            <Button className="w-32">Bottom center</Button>
          </PopoverTrigger>
          <PopoverContent
            id="bottom-center"
            side="bottom"
            align="center"
            sideOffset={4}
            className="w-80"
          >
            <PopoverContentExample />
          </PopoverContent>
        </Popover>
      </div>
    </section>
  );
}

function PopoverContentExample() {
  return (
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width">Width</Label>
          <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxWidth">Max. width</Label>
          <Input
            id="maxWidth"
            defaultValue="300px"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="height">Height</Label>
          <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxHeight">Max. height</Label>
          <Input
            id="maxHeight"
            defaultValue="none"
            className="col-span-2 h-8"
          />
        </div>
      </div>
    </div>
  );
}
