"use client"; 
import { Menu, X, Moon, Sun } from "lucide-react";
import * as React from "react"; 
import { cn } from "../../lib/utils";
import { Button } from "./button";   
import { Toggle } from "./toggle";
import { useTheme } from "../ThemeProvider";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

const menuItems = [
  { name: "Manifesto", href: "#manifesto" },
  { name: "Servicios", href: "#dashboard" },
  { name: "ROI", href: "#roi" },
];

const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoElement = (
    <div className="relative w-5 h-5 flex items-center justify-center">
      <span className="absolute w-1.5 h-1.5 rounded-full bg-black dark:bg-gray-200 top-0 left-1/2 transform -translate-x-1/2 opacity-80"></span>
      <span className="absolute w-1.5 h-1.5 rounded-full bg-black dark:bg-gray-200 left-0 top-1/2 transform -translate-y-1/2 opacity-80"></span>
      <span className="absolute w-1.5 h-1.5 rounded-full bg-black dark:bg-gray-200 right-0 top-1/2 transform -translate-y-1/2 opacity-80"></span>
      <span className="absolute w-1.5 h-1.5 rounded-full bg-black dark:bg-gray-200 bottom-0 left-1/2 transform -translate-x-1/2 opacity-80"></span>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        data-state={menuState && "active"}
        className={cn(
          "w-full px-3 md:px-4 transition-all duration-300",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-300",
            isScrolled &&
              "bg-white/70 dark:bg-black/50 max-w-5xl rounded-2xl border border-black/10 dark:border-white/10 backdrop-blur-xl px-4 shadow-lg"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-3 py-2">
            <div className="flex w-full justify-between lg:w-auto">
              <a
                href="#"
                aria-label="home"
                className="flex gap-2 items-center"
              >
                {logoElement}
                <span className="font-bold text-sm tracking-tight text-black dark:text-white">IlustricIA</span>
              </a>
              <div className="flex gap-2">
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className="relative z-20 block cursor-pointer p-2 lg:hidden text-black dark:text-white"
                >
                  {menuState ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden lg:block size-fit">
              <Menus />
            </div>

            <div className={cn(
              "lg:flex items-center justify-end gap-4",
              menuState ? "flex flex-col w-full mt-4 lg:mt-0 lg:w-auto" : "hidden"
            )}>
              <div className="lg:hidden w-full">
                <ul className="space-y-4 text-base py-4 border-t border-black/5 dark:border-white/5">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm block duration-150"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0 items-center">
                <ModeToggle />
                <button className="px-4 py-2 text-xs border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60 rounded-full hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white transition-colors duration-200 cursor-pointer">
                  LogIn
                </button>
                <div className="relative group">
                  <div className="absolute inset-0 -m-1 rounded-full bg-black dark:bg-gray-100 opacity-10 dark:opacity-40 filter blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-20 dark:group-hover:opacity-60 group-hover:blur-xl"></div>
                  <button className="relative z-10 px-4 py-2 text-xs font-semibold text-white dark:text-black bg-black dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-300 rounded-full hover:bg-black/90 dark:hover:from-gray-200 dark:hover:to-gray-400 transition-all duration-200 cursor-pointer">
                    Signup
                  </button>
                </div>
                <Button
                  variant={"secondary"}
                  asChild
                  className={cn(
                    "rounded-full px-6 text-xs",
                    isScrolled && "lg:hidden"
                  )}
                >
                  <a
                    href="#roi"
                  >
                    <span>Book an Intro call</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Docs",
    href: "#",
    description:
      "Explore our comprehensive UI design and components docs, empowering integration.",
  },  
  {
    title: "Colors",
    href: "#",
    description:
      "Vibrant, accessible color palette for intuitive, seamless UI design and components.",
  },  
  {
    title: "Blocks",
    href: "#",
    description: "Modular, flexible UI blocks for intuitive, seamless design and robust functionality.",
  },
  {
    title: "UI",
    href: "#",
    description:
      "Stunning UI component showcase for inspiring, seamless design exploration.",
  },
  {
    title: "Blogs",
    href: "#",
    description:
      "Engaging UI design blogs with insights for seamless component integration.",
  },
  {
    title: "Contact",
    href: "#",
    description:
      "Get in touch for UI design inquiries, support, and seamless collaboration opportunities.",
  },
];

export function Menus() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent text-xs text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white")}
          >
            <a href="#manifesto">Manifesto</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent text-xs text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white")}
          >
            <a href="#dashboard">Servicios</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent text-xs text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white")}
          >
            <a href="#roi">ROI</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-xs text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white">
            Recursos
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-2">
            <ul className="grid gap-3 md:grid-cols-2 lg:w-[400px] bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-xl p-4">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href={href}>
          <div className="text-sm leading-none font-medium text-black dark:text-white">{title}</div>
          <p className="text-neutral-500 dark:text-neutral-400 line-clamp-2 text-xs leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="flex flex-col justify-center">
      <div>
        <Toggle
          className="group bg-neutral-100 dark:bg-neutral-900 data-[state=on]:hover:bg-neutral-200 dark:data-[state=on]:hover:bg-neutral-800 cursor-pointer size-9 rounded-full"
          pressed={theme === "dark"}
          onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <Moon
            size={16}
            className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100 text-white"
            aria-hidden="true"
          />
          <Sun
            size={16}
            className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0 text-black"
            aria-hidden="true"
          />
        </Toggle>
      </div>
    </div>
  );
}

export { Header };
