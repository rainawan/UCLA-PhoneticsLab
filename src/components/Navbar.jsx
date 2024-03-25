import React from "react";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
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
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <div className="inline-block w-full">
      {/* <Nav className="bg-gray-700 pb-2" position="static" height="fit"> */}
      <Nav
        // className="bg-gray-700 pb-2"
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link to="/" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/people" href="#">
              People
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Customers
            </Link>
          </NavbarItem>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={<ChevronDown fill="currentColor" size={16} />}
                  radius="sm"
                  variant="light"
                >
                  Features
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                // startContent={icons.scale}
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                // startContent={icons.activity}
              >
                Usage Metrics
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Nav>
    </div>
  );
};

export default Navbar;
