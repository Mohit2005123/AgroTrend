import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: "rgba(255, 255, 255, 1)",
  });

  const { authUser } = useAuthContext(); // Use AuthContext to get the user info

  const links1 = [
    { name: "Market Insights", to: "/market-insights" },
    { name: "Crop Recommendations", to: "/crop-recommendations", isActive: true },
    { name: "Weather Updates", to: "/weather" },
    { name: "Help & Support", to: "/help" },
    { name: "Activity", to: "/activity" },
    { name: "Logout", to: "/logout" },
  ];

  const links2 = [
    { name: "Home", to: "/" },
    { name: "Market Data", to: "/market-data", isActive: true },
    { name: "Chat with Experts", to: "/chat" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const opacity = Math.max(0.6, 1 - scrollTop / 200);
      setNavbarStyle({
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Navbar
        className="fixed top-0 left-0 right-0 z-50 shadow-md"
        css={navbarStyle}
      >
        <NavbarBrand className="flex items-center">
          <p className="font-bold text-inherit text-xl ml-2">
            <Link to="/">AgroTrend</Link>
          </p>
        </NavbarBrand>

        {/* Desktop Menu */}
        <NavbarContent className="hidden sm:flex gap-10" justify="center">
          {links2.map((link, index) => (
            <NavbarItem key={index} isActive={link.isActive}>
              <Link
                to={link.to}
                aria-current={link.isActive ? "page" : undefined}
                className={`text-lg ${link.isActive ? "text-secondary" : "text-foreground"}`}
              >
                {link.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Mobile Menu Button */}
        <NavbarContent className="sm:hidden" justify="end">
          <Button auto onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </Button>
        </NavbarContent>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-16 right-0 bg-white shadow-md p-4 w-48 rounded-lg z-50">
            <NavbarContent as="div" className="flex flex-col space-y-4">
              {links1.map((link, index) => (
                <NavbarItem key={index} isActive={link.isActive}>
                  <Link
                    to={link.to}
                    aria-current={link.isActive ? "page" : undefined}
                    className={`text-lg ${link.isActive ? "text-secondary" : "text-foreground"}`}
                  >
                    {link.name}
                  </Link>
                </NavbarItem>
              ))}
            </NavbarContent>
          </div>
        )}

        {/* User Avatar and Dropdown Menu */}
        <NavbarContent as="div" justify="end" className="hidden sm:flex items-center space-x-4">
          {authUser ? (
            <div className="flex items-center space-x-2">
              <p className="text-lg font-semibold">{authUser.name}</p>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name={authUser.name}
                    size="md"
                    src={authUser.avatarUrl || "https://i.pravatar.cc/150?u=a042581f4e29026704d"}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2 text-lg">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{authUser.email}</p>
                  </DropdownItem>
                  <DropdownItem key="settings" className="text-lg">
                    My Settings
                  </DropdownItem>
                  <DropdownItem key="team_settings" className="text-lg">
                    Team Settings
                  </DropdownItem>
                  <DropdownItem key="analytics" className="text-lg">
                    Analytics
                  </DropdownItem>
                  <DropdownItem key="system" className="text-lg">
                    System
                  </DropdownItem>
                  <DropdownItem key="configurations" className="text-lg">
                    Configurations
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback" className="text-lg">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger" className="text-lg">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link to="/login">
                <Button auto className="bg-blue-600 text-white">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button auto className="bg-green-600 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </NavbarContent>
      </Navbar>
    </div>
  );
}
