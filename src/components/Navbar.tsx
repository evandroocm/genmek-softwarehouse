import Link from "next/link";
import { Button } from "./ui/button";
import { Box, HomeIcon, LogIn } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default async function Navbar() {
  return (
    <div className="sticky top-0 w-full border-b bg-background/5 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-medium text-primary font-mono tracking-wider"
            >
              GenMek Software House
            </Link>
          </div>


          {/* Navbar components */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/projects">
                <HomeIcon size={18} />
                <span className="hidden lg:inline">Home</span>
              </Link>
            </Button>

            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/projects">
                <Box size={18} />
                <span className="hidden lg:inline">Item 2</span>
              </Link>
            </Button>
            
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/projects">
                <Box size={18} />
                <span className="hidden lg:inline">Item 3</span>
              </Link>
            </Button>

            <ModeToggle />

            <Button variant="default" className="flex items-center gap-2" asChild>
              <Link href="/contact">
                <span className="hidden lg:inline">Entrar em Contato</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}