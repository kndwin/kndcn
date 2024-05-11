import { Button } from "@/components/shadcn-style/button";
import {
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn-style/popover";

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

        <section className="py-4">
          <h2 className="text-xl font-bold">Buttons</h2>
          <div className="flex space-x-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </section>
        <section className="py-4">
          <h2 className="text-xl font-bold">Popover</h2>
          <div className="flex space-x-4">
            <PopoverTrigger asChild>
              <Button>Bottom center</Button>
            </PopoverTrigger>
            <PopoverContent side="bottom" align="center" sideOffset={4}>
              <p>Random content</p>
            </PopoverContent>
          </div>
        </section>
      </div>
    </main>
  );
}
