"use client"; 
import { Menu, X, Moon, Sun } from "lucide-react";
import * as React from "react"; 
import { cn } from "../../lib/utils";
import { Button } from "./button";   
import { Toggle } from "./toggle";
import { useTheme } from "../ThemeProvider";
import { useLanguage } from "../LanguageContext";
import { useEffect, useState } from "react";
import { Language } from "../../translations";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Dialog } from "./dialog";
import VoiceDemo from "../VoiceDemo";
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
  { name: "Nuestros Servicios", href: "#dashboard" },
  { name: "Quienes Somos", href: "#about" },
  { name: "FAQs", href: "#faqs" },
  { name: "Recursos", href: "#recursos" },
];

const services = [
  {
    title: "Asistente de voz",
    href: "#dashboard",
    description: "Sistemas de voz inteligentes para atención telefónica y control automatizado.",
  },
  {
    title: "Automatización",
    href: "#dashboard",
    description: "Optimización de flujos de trabajo repetitivos para ahorrar tiempo.",
  },
  {
    title: "Chatbots agentes",
    href: "#dashboard",
    description: "Agentes conversacionales avanzados que gestionan pedidos 24/7.",
  },
  {
    title: "Funnels de venta",
    href: "#dashboard",
    description: "Diseño de embudos optimizados para maximizar el ROI y captación.",
  },
  {
    title: "Desarrollo Web",
    href: "#dashboard",
    description: "Plataformas digitales modernas y escalables para tu negocio.",
  },
  {
    title: "CRM personalizado",
    href: "#dashboard",
    description: "Sistemas de gestión de clientes para mejorar el ciclo de ventas.",
  },
  {
    title: "Ciberseguridad",
    href: "#dashboard",
    description: "Protección integral de activos digitales y datos sensibles.",
  },
];

const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isDemoOpen, setIsDemoOpen] = React.useState(false);
  const { t, language, setLanguage } = useLanguage();

  const menuItems = [
    { name: t.nav.services, href: "#dashboard" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.faqs, href: "#faqs" },
    { name: t.nav.resources, href: "#recursos" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoElement = (
    <img 
      src="/images/logo.png" 
      alt="IlustricIA Logo" 
      className="w-40 h-auto object-contain"
      referrerPolicy="no-referrer"
    />
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        data-state={menuState && "active"}
        className={cn(
          "w-full px-3 md:px-4 transition-all duration-300",
          isScrolled ? "py-1 md:py-2" : "py-2 md:py-4"
        )}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-300 max-w-7xl",
            isScrolled &&
              "bg-white/70 dark:bg-black/50 max-w-5xl rounded-2xl border border-black/10 dark:border-white/10 backdrop-blur-xl px-4 shadow-lg"
          )}
        >
          <div className="relative flex items-center justify-between gap-1.5 py-0">
            <div className="flex items-center gap-2 md:gap-8">
              <Link
                to="/"
                aria-label="home"
                className="flex gap-2 items-center shrink-0 leading-none"
              >
                <img 
                  src="/images/logo.png" 
                  alt="IlustricIA Logo" 
                  className="w-20 md:w-32 h-auto object-contain block transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </Link>
            </div>

            <div className="hidden lg:flex flex-1 justify-center">
              <Menus isScrolled={isScrolled} />
            </div>

            <div className="flex items-center gap-1.5 md:gap-3">
              {/* Desktop & Mobile Buttons */}
              <div className="flex items-center gap-1.5">
                <HashLink 
                  smooth
                  to="/#roi"
                  className={cn(
                    "px-2 py-1 md:px-4 md:py-2 text-[9px] md:text-xs border rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap",
                    isScrolled 
                      ? "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60 hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white"
                      : "border-white/30 bg-white/10 text-white hover:bg-white/20"
                  )}
                >
                  {t.nav.contact}
                </HashLink>
                <div className="relative group shrink-0">
                  <div className="absolute inset-0 -m-1 rounded-full bg-black dark:bg-gray-100 opacity-10 dark:opacity-40 filter blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-20 dark:group-hover:opacity-60 group-hover:blur-xl"></div>
                  <button 
                    onClick={() => setIsDemoOpen(true)}
                    className={cn(
                      "relative z-10 px-2 py-1 md:px-4 md:py-2 text-[9px] md:text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer block whitespace-nowrap",
                      isScrolled
                        ? "text-white dark:text-black bg-black dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-300 hover:bg-black/90 dark:hover:from-gray-200 dark:hover:to-gray-400"
                        : "text-black bg-white hover:bg-white/90"
                    )}
                  >
                    {t.nav.demo}
                  </button>
                </div>
              </div>

              <Dialog isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)}>
                <VoiceDemo />
              </Dialog>

              <div className={cn(
                "flex items-center gap-3",
                menuState ? "absolute top-full left-0 w-full bg-white dark:bg-neutral-900 p-4 border-b border-black/10 dark:border-white/10 lg:static lg:w-auto lg:bg-transparent lg:border-none lg:p-0" : "static"
              )}>
                <div className={cn(
                  "lg:flex items-center gap-3",
                  menuState ? "flex flex-col w-full" : "hidden"
                )}>
                  <div className="lg:hidden w-full">
                    <ul className="space-y-4 text-base py-4 border-t border-black/5 dark:border-white/5">
                      {menuItems.map((item, index) => (
                        <li key={index}>
                          <HashLink
                            smooth
                            to={item.href}
                            onClick={() => setMenuState(false)}
                            className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm block duration-150"
                          >
                            <span>{item.name}</span>
                          </HashLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0 items-center">
                    <LanguageSwitcher currentLanguage={language} setLanguage={setLanguage} isScrolled={isScrolled} />
                    <ModeToggle />
                  </div>
                </div>
                
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className={cn(
                    "relative z-20 block cursor-pointer p-1 md:p-2 lg:hidden transition-colors",
                    isScrolled || menuState ? "text-black dark:text-white" : "text-white"
                  )}
                >
                  {menuState ? <X size={18} /> : <Menu size={18} />}
                </button>
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
    title: "Contact",
    href: "#",
    description:
      "Get in touch for UI design inquiries, support, and seamless collaboration opportunities.",
  },
];

export function Menus({ isScrolled }: { isScrolled?: boolean }) {
  const { t } = useLanguage();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(), 
              "bg-transparent text-xs h-8 transition-colors",
              isScrolled 
                ? "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                : "text-white/70 hover:text-white"
            )}
          >
            <HashLink smooth to="/#dashboard">{t.nav.services}</HashLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(), 
              "bg-transparent text-xs h-8 transition-colors",
              isScrolled 
                ? "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                : "text-white/70 hover:text-white"
            )}
          >
            <HashLink smooth to="/#about">{t.nav.about}</HashLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(), 
              "bg-transparent text-xs h-8 transition-colors",
              isScrolled 
                ? "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                : "text-white/70 hover:text-white"
            )}
          >
            <HashLink smooth to="/#faqs">{t.nav.faqs}</HashLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(), 
              "bg-transparent text-xs h-8 transition-colors",
              isScrolled 
                ? "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                : "text-white/70 hover:text-white"
            )}
          >
            <HashLink smooth to="/#recursos">{t.nav.resources}</HashLink>
          </NavigationMenuLink>
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

function LanguageSwitcher({ currentLanguage, setLanguage, isScrolled }: { currentLanguage: Language; setLanguage: (lang: Language) => void; isScrolled: boolean }) {
  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
  ];

  return (
    <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-full border border-black/5 dark:border-white/5">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={cn(
            "px-2 py-1 text-[10px] font-bold rounded-full transition-all duration-200",
            currentLanguage === lang.code
              ? "bg-black dark:bg-white text-white dark:text-black shadow-sm"
              : "text-neutral-500 hover:text-black dark:hover:text-white"
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}

export { Header };
