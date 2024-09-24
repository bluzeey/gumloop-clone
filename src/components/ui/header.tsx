"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  BookMarked,
  BookOpen,
  ChevronDown,
  CreditCard,
  Globe,
  Heart,
  Layers,
  LockKeyhole,
  MessagesSquare,
  Newspaper,
  NotebookPen,
  Puzzle,
  Youtube,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavItem {
  label: string
  content: { icon: React.ReactNode; label: string; link: string }[]
  icon?: React.ReactNode
}

const navItems: NavItem[] = [
  {
    label: "Use Cases",
    content: [
      {
        label: "Web Scraping",
        icon: <Globe className="h-4 w-4" />,
        link: "/ai-web-scraping",
      },
      {
        label: "SEO Marketing",
        icon: <Layers className="h-4 w-4" />,
        link: "/seo-marketing",
      },
      {
        label: "Document Processing",
        icon: <BookOpen className="h-4 w-4" />,
        link: "/document-processing",
      },
    ],
    icon: <Layers className="h-4 w-4 text-pink-400 md:h-6 md:w-6" />,
  },
  {
    label: "Resources",
    content: [
      {
        label: "Templates",
        icon: <BookOpen className="h-4 w-4" />,
        link: "/templates",
      },
      {
        label: "Chrome Extension",
        icon: <Puzzle className="h-4 w-4" />,
        link: "/browser-extension",
      },
      {
        label: "Discord Community",
        icon: <MessagesSquare className="h-4 w-4" />,
        link: "https://discord.gg/xtbrafmzC7",
      },
      {
        label: "Documentation",
        icon: <BookOpen className="h-4 w-4" />,
        link: "https://docs.gumloop.com/getting-started/introduction",
      },
      {
        label: "Youtube Channel",
        icon: <Youtube className="h-4 w-4" />,
        link: "https://www.youtube.com/@Gumloop_AI",
      },
      {
        label: "Changelog",
        icon: <NotebookPen className="h-4 w-4" />,
        link: "/changelog",
      },
    ],
    icon: <Layers className="h-4 w-4 text-pink-400 md:h-6 md:w-6" />,
  },
  {
    label: "Company",
    content: [
      {
        label: "Wall of Love",
        icon: <Heart className="h-4 w-4" />,
        link: "/love",
      },
      {
        label: "Blog",
        icon: <Newspaper className="h-4 w-4" />,
        link: "https://blog.gumloop.com/",
      },
      {
        label: "Handbook",
        icon: <BookMarked className="h-4 w-4" />,
        link: "https://blog.gumloop.com/handbook/",
      },
      {
        label: "About Us",
        icon: <BookMarked className="h-4 w-4" />,
        link: "https://blog.gumloop.com/about/",
      },
      {
        label: "Security Policies",
        icon: <LockKeyhole className="h-4 w-4" />,
        link: "https://trust.gumloop.com/",
      },
    ],
    icon: <Heart className="h-4 w-4 text-pink-400 md:h-6 md:w-6" />,
  },
]

export default function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState<string | null>(null)

  return (
    <header className="">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/gumloop_logo.svg" // Gumloop logo SVG path in the public directory
            alt="Gumloop Logo"
            className="h-12 w-auto"
            width={112}
            height={112} // Adjust size as needed
          />
        </Link>

        {/* Navigation Options */}
        <nav className="hidden space-x-6 md:flex">
          {navItems.map((item) => (
            <DropdownMenu key={item.label}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-2">
                  <div className="flex cursor-pointer items-center space-x-2">
                    <div className="mb-1 rounded-lg p-2">{item.icon}</div>
                    <p className="text-xs text-black md:text-sm">
                      {item.label}
                    </p>
                    <ChevronDown
                      className={`h-4 w-4 text-pink-400 transition-transform duration-300 ${
                        isOpen === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="ml-56 w-56">
                {item.content.map((subItem) => (
                  <DropdownMenuItem key={subItem.label}>
                    <Link
                      href={subItem.link}
                      className="group flex items-center space-x-2 text-neutral-700 transition-colors hover:text-pink-500"
                    >
                      {subItem.icon}
                      <span className="relative">
                        {subItem.label}
                        <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-pink-500 transition-transform group-hover:scale-x-100"></span>
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}

          {/* Pricing Tab */}
          <div className="relative">
            <Link
              className="flex items-center space-x-2 rounded-xl pr-2 transition-all"
              href="/pricing"
            >
              <div className="mb-1 rounded-lg p-2">
                <CreditCard className="h-4 w-4 text-pink-400 md:h-6 md:w-6" />
              </div>
              <span className="text-xs text-black md:text-sm">Pricing</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <ChevronDown className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>

        {/* Get Started Button */}
        <Button className="hidden h-10 items-center justify-center gap-1 space-x-2 rounded-md border border-[#f06293] bg-[#fff0f4] px-5 py-2 text-sm font-medium text-[#f06293] ring-offset-background transition-all duration-100 ease-in-out hover:bg-pink-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:inline-flex">
          Get Started
        </Button>
      </div>
    </header>
  )
}
