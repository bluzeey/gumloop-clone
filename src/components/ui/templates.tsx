"use client"

import React, { useState } from "react"
import { ChevronRight, Search } from "lucide-react" // Importing Lucide icons

import toolsData from "../../data/tools.json"
import Card from "../ui/card" // Import the Card component

const Templates: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const transformedToolsData = toolsData.map((tool) => ({
    ...tool,
    key_operators: Object.entries(tool.key_operators).map(([key, value]) => ({
      key, // Assuming 'name' should be 'key'
      value, // Assuming 'values' should be 'value'
    })),
  }))

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="space-y-2">
          <h4 className="text-center text-xl uppercase text-black text-primary">
            Flow templates
          </h4>
          <h1 className="text-6xl font-semibold text-black">
            Skip the learning curve.
          </h1>
        </div>
        <div className="text-xl text-black">
          Leverage our community&apos;s efforts with pre-built workflows.
        </div>
        <div className="flex w-full max-w-7xl flex-col gap-5">
          {" "}
          {/* Adjusting width */}
          {/* Search Bar (UI only) */}
          <div className="relative w-full rounded-md border border-gray-300 bg-white shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="form-input block w-full rounded-md border-gray-300 py-3 pl-10 pr-10 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Search our prebuilt templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* Categories (scrollable UI for different categories) */}
          <div className="relative flex w-full flex-col gap-y-2 rounded-md">
            <div className="relative">
              <button className="absolute right-0 top-1/2 z-10 mx-2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-80 p-1 shadow-md backdrop-blur-sm">
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
              <div className="scrollbar-hide w-19/20 relative flex gap-2 overflow-x-auto">
                <div className="flex-shrink-0 cursor-pointer rounded-lg">
                  <a className="group flex flex-row items-center justify-start gap-x-3 rounded-md border-2 px-4 py-2 text-xs font-semibold leading-6 transition-all duration-300 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-400">
                    <Search className="h-4 w-4" />
                    Featured
                  </a>
                </div>
                <div className="flex-shrink-0 cursor-pointer rounded-lg">
                  <a className="group flex flex-row items-center justify-start gap-x-3 rounded-md border-2 px-4 py-2 text-xs font-semibold leading-6 transition-all duration-300 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-400">
                    <Search className="h-4 w-4" />
                    Web Scraping
                  </a>
                </div>
                <div className="flex-shrink-0 cursor-pointer rounded-lg">
                  <a className="group flex flex-row items-center justify-start gap-x-3 rounded-md border-2 px-4 py-2 text-xs font-semibold leading-6 transition-all duration-300 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-400">
                    <Search className="h-4 w-4" />
                    Document Processing
                  </a>
                </div>
                <div className="flex-shrink-0 cursor-pointer rounded-lg">
                  <a className="group flex flex-row items-center justify-start gap-x-3 rounded-md border-2 px-4 py-2 text-xs font-semibold leading-6 transition-all duration-300 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-400">
                    <Search className="h-4 w-4" />
                    Browser Extension
                  </a>
                </div>
                <div className="flex-shrink-0 cursor-pointer rounded-lg">
                  <a className="group flex flex-row items-center justify-start gap-x-3 rounded-md border-2 px-4 py-2 text-xs font-semibold leading-6 transition-all duration-300 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-400">
                    <Search className="h-4 w-4" />
                    SEO/Marketing
                  </a>
                </div>
                <div className="flex-shrink-0 cursor-pointer rounded-lg">
                  <a className="group flex flex-row items-center justify-start gap-x-3 rounded-md border-2 px-4 py-2 text-xs font-semibold leading-6 transition-all duration-300 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-400">
                    <Search className="h-4 w-4" />
                    Sales/CRM
                  </a>
                </div>
                <div className="flex-shrink-0 cursor-pointer rounded-lg">
                  <a className="group flex flex-row items-center justify-start gap-x-3 rounded-md border-2 px-4 py-2 text-xs font-semibold leading-6 transition-all duration-300 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-400">
                    <Search className="h-4 w-4" />
                    Media/News
                  </a>
                </div>
                <div className="flex-shrink-0 cursor-pointer rounded-lg">
                  <a className="group flex flex-row items-center justify-start gap-x-3 rounded-md border-2 px-4 py-2 text-xs font-semibold leading-6 transition-all duration-300 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-400">
                    <Search className="h-4 w-4" />
                    HR/Hiring
                  </a>
                </div>
                <div className="flex-shrink-0 cursor-pointer rounded-lg">
                  <a className="group flex flex-row items-center justify-start gap-x-3 rounded-md border-2 px-4 py-2 text-xs font-semibold leading-6 transition-all duration-300 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-400">
                    <Search className="h-4 w-4" />
                    Financial Analysis
                  </a>
                </div>
                <div className="flex-shrink-0 cursor-pointer rounded-lg">
                  <a className="group flex flex-row items-center justify-start gap-x-3 rounded-md border-2 px-4 py-2 text-xs font-semibold leading-6 transition-all duration-300 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-400">
                    <Search className="h-4 w-4" />
                    Education
                  </a>
                </div>
                <div className="flex-shrink-0 cursor-pointer rounded-lg">
                  <a className="group flex flex-row items-center justify-start gap-x-3 rounded-md border-2 px-4 py-2 text-xs font-semibold leading-6 transition-all duration-300 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-400">
                    <Search className="h-4 w-4" />
                    Legal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards (Rendering cards without transformation) */}
      <Card data={transformedToolsData} />
    </div>
  )
}

export default Templates
