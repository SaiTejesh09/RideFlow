import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";


export default function Home() {
  return (
   <div>
    <Button variant="destructive" className="px-6 py-3 text-lg">
          Click me
        </Button>
        <UserButton />
   </div>
  );
}
