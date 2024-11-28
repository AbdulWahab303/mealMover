import Image from "next/image";
import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Left Section with Logo and Navigation Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="-my-10 pl-0 text-2xl font-bold text-yellow-300">
            <Image
              src="/logo.svg"
              alt="Description of image"
              width={200}
              height={50}
              objectFit="cover"
            />
          </div>

          {/* Nav Links */}
          <nav className="flex space-x-6">
            <a
              href="#restaurants"
              className="text-gray-700 hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 transition-all duration-500"
            >
              Restaurants
            </a>
            <a
              href="#cuisines"
              className="text-gray-700 hover:text-yellow-300 border-b-2 border-transparent hover:border-yellow-300 transition-all duration-300"
            >
              Cuisines
            </a>
          </nav>
        </div>

        {/* Centered Search Bar */}
        <div className="flex justify-center mx-6 pr-6">
          <SearchBar />
        </div>

        {/* Right Section with Login, Sign Up, Cart and Profile */}

        <div className="flex items-center space-x-6">
          <Button>Login</Button>
          <Button>Sign Up</Button>

          {/* Cart SVG Icon */}
          <a href="#cart" className="text-gray-700 hover:text-yellow-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h18M3 3l1.5 16h15L21 3M5 6h14M9 9h6M9 12h6M9 15h6M9 18h6"
              />
            </svg>
          </a>

          {/* User Profile SVG Icon */}
          <a href="#profile" className="text-gray-700 hover:text-yellow-300">
            <Image
              src="/cart.svg"
              alt="Description of image"
              width={30}
              height={30}
              objectFit="cover"
              className="fill-current"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
