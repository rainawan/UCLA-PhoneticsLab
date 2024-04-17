import React from "react";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import ChevronDown from "./ChevronDown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    { label: "Home", route: "/" },
    // { label: "Language Acquisition Lab", route: "/langacquisition" },
    {
      label: "People",
      dropdownItems: [
        { label: "Current Members", route: "/people/current_members" },
        { label: "Former Members", route: "/people/former_members" },
        { label: "Local Colleagues", route: "/people/local_colleagues" },
      ],
    },
    {
      label: "Research",
      dropdownItems: [
        { label: "Grants", route: "/research/grants" },
        { label: "Disserations", route: "/research/dissertations" },
      ],
    },
    // {
    //   label: "Resources",
    //   dropdownItems: [
    //     { label: "Resources", route: "/resources/resources" },
    //     { label: "Databases", route: "/resources/databases" },
    //     { label: "Illustrations", route: "/resources/illustrations" },
    //   ],
    // },
    // {
    //   label: "Teaching",
    //   dropdownItems: [
    //     { label: "Courses", route: "/teaching/courses" },
    //     { label: "Materials", route: "/teaching/materials" },
    //   ],
    // },
  ];

  const renderNavbarItem = (item, index) => (
    <React.Fragment key={`${item.label}-${index}`}>
      {item.dropdownItems ? (
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"
                endContent={<ChevronDown fill="currentColor" size={16} />}
                radius="sm"
                variant="light"
              >
                {item.label}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label={item.label} itemClasses={{ base: "gap-4" }}>
            {item.dropdownItems.map((dropdownItem, idx) => (
              <DropdownItem key={`${dropdownItem.label}-${idx}`}>
                <Link to={dropdownItem.route}>{dropdownItem.label}</Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      ) : (
        <NavbarItem>
          <Link to={item.route}>{item.label}</Link>
        </NavbarItem>
      )}
    </React.Fragment>
  );

  return (
    <div className="inline-block w-full">
      <Nav
        className="bg-darkblue h-20"
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        {/* web navbar */}
        <NavbarContent
          className="hidden sm:flex gap-4 text-white"
          justify="center"
        >
          {menuItems.map((item, index) => renderNavbarItem(item, index))}
        </NavbarContent>

        {/* mobile navbar */}
        <NavbarMenu className="bg-blue text-white">
          {menuItems.map((item, index) => renderNavbarItem(item, index))}
        </NavbarMenu>
      </Nav>
    </div>
  );
};

export default Navbar;
