import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="w-full shadow-md bg-white/80 backdrop-blur-lg sticky top-0 z-50 transition">
      <div className="hidden sm:flex items-center justify-between px-4 py-1 bg-blue-50 border-b border-blue-100 text-xs">
        <div className="container mx-auto flex justify-between">
          <span className="flex items-center gap-2 text-blue-700">
            <FaPhone />
            <span className="font-semibold ">Phone:</span>
            <span className="tracking-wide">+91 98765 43210</span>
          </span>
          <div className="flex gap-2">
            <Button
              variant="link"
              className="text-blue-700 px-0 py-0 hover:underline flex items-center gap-1"
            >
              <FaUserLarge className="text-base" />
              Login/Register
            </Button>

            <Button
              variant="link"
              className="text-blue-700 px-0 py-0 hover:underline"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <nav className="container mx-auto flex flex-wrap items-center justify-between  py-3 md:py-4">
        <div className="flex items-center gap-2 z-10">
          <span className="bg-blue-100 rounded-full p-2">
            <svg
              width="28"
              height="28"
              fill="none"
              className="text-blue-700"
              viewBox="0 0 24 24"
            >
              <rect
                x="3"
                y="7"
                width="18"
                height="10"
                rx="3"
                fill="currentColor"
                className="opacity-20"
              />
              <rect
                x="3"
                y="7"
                width="18"
                height="10"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="7.5" cy="12" r="1.2" fill="currentColor" />
              <circle cx="16.5" cy="12" r="1.2" fill="currentColor" />
            </svg>
          </span>
          <p className="text-2xl font-extrabold text-blue-700 tracking-tight select-none">
            SellPoint
          </p>
        </div>
        <div className="flex md:hidden z-20">
          <details className="relative">
            <summary className="list-none cursor-pointer focus:outline-none px-2 py-1 rounded hover:bg-blue-100 transition-colors flex items-center">
              <svg
                className="w-7 h-7 text-blue-700"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>
            <div className="absolute right-0 mt-2 w-52 bg-white shadow-xl rounded-lg border border-blue-100 py-4 flex flex-col gap-2 animate-fade-down z-50">
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col gap-1">
                  <NavigationMenuItem>
                    <NavigationMenuLink className="block px-4 py-2 text-gray-700 rounded hover:bg-blue-50 transition font-medium">
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="block px-4 py-2 text-gray-700 rounded hover:bg-blue-50 transition font-medium">
                      Category
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="block px-4 py-2 text-gray-700 rounded hover:bg-blue-50 transition font-medium">
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="block px-4 py-2 text-gray-700 rounded hover:bg-blue-50 transition font-medium">
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <hr className="my-1 border-blue-100" />
              <Button className="w-11/12 mx-auto bg-blue-700 text-white hover:bg-blue-800">
                Login
              </Button>
              <Button
                variant="outline"
                className="w-11/12 mx-auto border-blue-700 text-blue-700 hover:bg-blue-50"
              >
                Cart
              </Button>
            </div>
          </details>
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink className="nav-link">
                  <span className="px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700 transition font-semibold">
                    Home
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="nav-link">
                  <span className="px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700 transition font-semibold">
                    Category
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="nav-link">
                  <span className="px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700 transition font-semibold">
                    About
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="nav-link">
                  <span className="px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-700 transition font-semibold">
                    Contact
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:flex items-center ml-6 gap-3">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow">
            Login
          </Button>
          <Button
            variant="outline"
            className="border-blue-700 text-blue-700 font-semibold hover:bg-blue-50"
          >
            Cart
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
