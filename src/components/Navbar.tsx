import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full h-16 px-4">
        <div className="text-lg font-bold">Genmek Software House</div>

        <ModeToggle />
    </div>
  )
}
