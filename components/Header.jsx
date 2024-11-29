import Image from "next/image";
import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { Button as Uibutton} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="-my-10 pl-0 text-2xl font-bold text-yellow-300">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Description of image"
                width={200}
                height={50}
                objectFit="cover"
              />
            </Link>
          </div>

          <nav className="flex space-x-6">
            <a
              href="/"
              className="text-gray-700 hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 transition-all duration-500"
            >
              Home
            </a>
            <a
              href="/restaurants"
              className="text-gray-700 hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 transition-all duration-500"
            >
              Restaurants
            </a>
            <a
              href="/cuisines"
              className="text-gray-700 hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 transition-all duration-300"
            >
              Cuisines
            </a>
          </nav>
        </div>
        <div className="flex justify-center mx-6 pr-6">
          <SearchBar />
        </div>

        {/* Right Section with Login, Sign Up, Cart and Profile */}

        <div className="flex items-center space-x-6">
          <Link href="/login">
            <Button>Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>

          <a href="/cart" className="text-gray-700 hover:text-yellow-300">
            Cart
            <Image
              src="/cart.svg"
              alt="Description of image"
              width={30}
              height={30}
              objectFit="cover"
              className="fill-current"
            />
          </a>
          <Sheet>
      <SheetTrigger asChild>
        <Uibutton><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <circle
                cx="12"
                cy="7"
                r="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                d="M4 17c0-3 3-4 8-4s8 1 8 4"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg></Uibutton>
      </SheetTrigger>
      <SheetContent>
        {/* Header */}
        <SheetHeader>
          <SheetTitle className='mt-8'> Welcome, Pedro Duarte</SheetTitle>
        </SheetHeader>

        {/* User Information */}
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start">
            <p className="text-sm text-gray-600">Username:</p>
            <p className="font-semibold">@peduarte</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm text-gray-600">Email:</p>
            <p className="font-semibold">pedro.duarte@example.com</p>
          </div>
        </div>

        {/* Navigation Options */}
        <div className="grid gap-2 py-4">
          <Link href="/user-profile">
            <Uibutton variant="outline" className="w-full">
              Go to Profile
            </Uibutton>
          </Link>
          <Link href="/past-orders">
            <Uibutton variant="outline" className="w-full">
              View Past Orders
            </Uibutton>
          </Link>
          <Link href="/cart">
            <Uibutton variant="outline" className="w-full">
              Go to Cart
            </Uibutton>
          </Link>
        </div>

        {/* Close Button */}
        <SheetFooter>
          <SheetClose asChild>
            <Uibutton variant="ghost">Close</Uibutton>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
