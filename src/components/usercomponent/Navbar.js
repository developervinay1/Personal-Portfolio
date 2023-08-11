"use client";

import * as React from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react/dist/esm/icons";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";
import { Button } from "../ui/button";

const components = [
  {
    title: "Clones",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Real World",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Html Css",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

export function Navbar() {
  return (
    <div className="fixed top-0 w-full left-0">
      <div className="flex justify-between items-center min-h-[90px] max-w-7xl m-auto">
        <div>
          <h1 className="font-bold">vsandhu.dev</h1>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <Link
              href="/"
              legacyBehavior
              passHref
              style={{ backgroundColor: "transparent" }}
            >
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                style={{ backgroundColor: "transparent" }}
              >
                Home
              </NavigationMenuLink>
            </Link>
            <Link
              href="#about"
              legacyBehavior
              passHref
              style={{ backgroundColor: "transparent" }}
            >
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                style={{ backgroundColor: "transparent" }}
              >
                About
              </NavigationMenuLink>
            </Link>
            <NavigationMenuItem>
              <NavigationMenuTrigger style={{ backgroundColor: "transparent" }}>
                Projects
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  style={{ backgroundColor: "transparent" }}
                >
                  Skills
                </NavigationMenuLink>
              </Link>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  style={{ backgroundColor: "transparent" }}
                >
                  Education
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="space-x-4 flex items-center">
          <Button variant="outline" size="icon">
            <PhoneCall className="h-4 w-4" />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef((props, ref) => {
  const { className, title, children, ...otherProps } = props;

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...otherProps}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
