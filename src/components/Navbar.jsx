import React from "react";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
// import "./Navbar.css";
import phonetics_logo from "../assets/phonetics_logo.jpeg";
import "tailwindcss/tailwind.css";

const Navbar = () => {
  return (
    <div className="inline-block w-full">
      <Nav className="bg-gray-700 pb-2" position="static" height="fit">
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link to="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Customers
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Nav>
      {/* <Nav
        className="bg-gray-700 pb-2"
        position="static"
        height="fit"
        shouldHideOnScroll
      >
        <div className="flex-col w-full">
          <NavbarContent className="py-3">
            <NavbarBrand className="max-w-[7rem]">
              <Link
                to="/"
                className="font-bold text-lg text-white hover:text-gray-300"
              >
                <img src={phonetics_logo} alt="" className="w-[5rem] ml-2" />
              </Link>
            </NavbarBrand>
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
          </NavbarContent>
        </div>
      </Nav>
      <Outlet /> */}
    </div>
  );
};

export default Navbar;
