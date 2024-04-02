import { Link, Outlet } from "react-router-dom"
import {

  CircleUser,
  Menu,
  Package2,


} from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


function Navbar() {
  return (
    <>

<header className="fixed w-full top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
  <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
    <Link
      href="#"
      className="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
      <Package2 className="h-6 w-6" />
      <span className="sr-only">Acme Inc</span>
    </Link>
    <Link
      href="#"
      className="text-foreground transition-colors hover:text-foreground"
    >
      Dashboard
    </Link>
    <Link
      href="#"
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      Orders
    </Link>
    <Link
      href="#"
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      Products
    </Link>
    <Link
      href="#"
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      Customers
    </Link>
    <Link
      href="#"
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      Analytics
    </Link>
  </nav>
  <Sheet>
    <SheetTrigger asChild>
      <Button
        variant="outline"
        size="icon"
        className="shrink-0 md:hidden"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <nav className="grid gap-6 text-lg font-medium">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link href="#" className="hover:text-foreground">
          Dashboard
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground"
        >
          Orders
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground"
        >
          Products
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground"
        >
          Customers
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground"
        >
          Analytics
        </Link>
      </nav>
    </SheetContent>
  </Sheet>
  <div className="flex items-center gap-4 ml-auto ">

    <DropdownMenu className="">
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</header>

<Outlet></Outlet>
</>
  )
}

export default Navbar

