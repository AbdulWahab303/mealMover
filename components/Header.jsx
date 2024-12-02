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
import { useSession,signOut } from "next-auth/react";
import { useCart } from "@/context/cartContext";

const Header = (props) => {
  const {data:session}=useSession();
  const {cartCount}=useCart();
  
  return (
    <header className="bg-yellow-200 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
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
            <Link
              href="/"
              className="text-gray-700 hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 transition-all duration-500"
            >
              Home
            </Link>
            <Link
              href="/restaurants"
              className="text-gray-700 hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 transition-all duration-500"
            >
              Restaurants
            </Link>
            <Link
              href="/search"
              className="text-gray-700 hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 transition-all duration-300"
            >
              Search
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-6">
          {
            session?(
                <Button onClick={()=>signOut({
                  callbackUrl:"/"
                })}>Logout</Button>
            ):(
              <>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
          </>
            )
          }

          <Link href="/cart" className="text-gray-700 hover:text-yellow-300">
            Cart
            <Image
              src="/cart.svg"
              alt="Description of image"
              width={30}
              height={30}
              objectFit="cover"
              className="fill-current"
            />
            <span className="top-10 right-98 bg-yellow-700 text-white text-xs font-bold rounded-full px-2 py-0.5">
              {cartCount}
            </span>
          </Link>
          <Sheet>
      <SheetTrigger asChild>
        <Uibutton disabled={!session}><svg
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
        <SheetHeader>
          <SheetTitle className='mt-8'> Welcome, {session?session.user.name:''}</SheetTitle>
        </SheetHeader>

        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start">
            <p className="text-sm text-gray-600">Username:</p>
            <p className="font-semibold">{session?session.user.username:''}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm text-gray-600">Email:</p>
            <p className="font-semibold">{session?session.user.email:''}</p>
          </div>
        </div>

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
