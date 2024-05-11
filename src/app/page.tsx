import { Button } from "@/components/shadcn-style/button";
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
} from "@/components/shadcn-style/dialog";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto max-w-xl">
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

        <ButtonPreview />
        <PopoverPreview />
        <DialogPreview />
      </div>
    </main>
  );
}

function DialogPreview() {
  return (
    <section className="py-4">
      <h2 className="text-xl font-bold">Dialog</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogClose>Close </DialogClose>
          </DialogHeader>
          <p>Random content</p>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ButtonPreview() {
  return (
    <section className="py-4">
      <h2 className="text-xl font-bold">Buttons</h2>
      <div className="flex space-x-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </section>
  );
}
function PopoverPreview() {
  return (
    <section className="py-4">
      <h2 className="text-xl font-bold">Popover</h2>
      <div className="flex space-x-4">
        <Popover>
          <PopoverTrigger id="top-start" asChild>
            <Button className="w-32">Top start</Button>
          </PopoverTrigger>
          <PopoverContent
            id="top-start"
            side="top"
            align="start"
            sideOffset={4}
          >
            <p>Random content</p>
          </PopoverContent>
        </Popover>
        <PopoverTrigger id="top-center" asChild>
          <Button className="w-32">Top center</Button>
        </PopoverTrigger>
        <PopoverContent
          id="top-center"
          side="top"
          align="center"
          sideOffset={4}
        >
          <p>Random content</p>
        </PopoverContent>
        <PopoverTrigger id="top-end" asChild>
          <Button className="w-32">Top end</Button>
        </PopoverTrigger>
        <PopoverContent id="top-end" side="top" align="end" sideOffset={4}>
          <p>Random content</p>
        </PopoverContent>
      </div>
      <div className="flex space-x-4 my-4">
        <PopoverTrigger id="left-center" asChild>
          <Button className="w-32">Left center</Button>
        </PopoverTrigger>
        <PopoverContent
          id="left-center"
          side="left"
          align="center"
          sideOffset={4}
        >
          <p>Random content</p>
        </PopoverContent>
        <div className="w-32" />
        <PopoverTrigger id="right-center" asChild>
          <Button className="w-32">Right center</Button>
        </PopoverTrigger>
        <PopoverContent
          id="right-center"
          side="right"
          align="center"
          sideOffset={4}
        >
          <p>Random content</p>
        </PopoverContent>
      </div>
      <div className="flex space-x-4">
        <PopoverTrigger id="bottom-start" asChild>
          <Button className="w-32">Bottom start</Button>
        </PopoverTrigger>
        <PopoverContent
          id="bottom-start"
          side="bottom"
          align="start"
          sideOffset={4}
        >
          <p>Random content</p>
        </PopoverContent>
        <PopoverTrigger id="bottom-center" asChild>
          <Button className="w-32">Bottom center</Button>
        </PopoverTrigger>
        <PopoverContent
          id="bottom-center"
          side="bottom"
          align="center"
          sideOffset={4}
        >
          <p>Random content</p>
        </PopoverContent>
        <PopoverTrigger id="bottom-end" asChild>
          <Button className="w-32">Bottom end</Button>
        </PopoverTrigger>
        <PopoverContent
          id="bottom-end"
          side="bottom"
          align="end"
          sideOffset={4}
        >
          <p>Random content</p>
        </PopoverContent>
      </div>
    </section>
  );
}
