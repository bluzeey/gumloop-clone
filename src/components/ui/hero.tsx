import Image from "next/image"

import Flow from "./flow"

export default function Hero(): JSX.Element {
  return (
    <div className="mx-auto mt-48 flex w-full max-w-7xl flex-col p-8 pt-12 lg:flex-row lg:p-0 lg:pt-0">
      {/* Left Section */}
      <div className="flex h-full w-full flex-col gap-8 p-5 pt-14 lg:ml-14 lg:pl-12 lg:pt-0">
        <div className="flex h-full w-full flex-col gap-2">
          <h1 className="text-6xl font-semibold text-black">
            Automate any workflow
          </h1>
          <h1 className="stroke-current text-6xl font-semibold text-[#f06293]">
            with AI
          </h1>
        </div>
        <div className=" max-w-xl text-xl tracking-tighter text-black">
          Drag, drop, and deploy custom tools your business needs.
          <br />
          No AI expertise needed.
        </div>

        {/* Hidden on large screens */}
        <div className="center flex min-h-[350px] w-full md:min-h-[350px] lg:mr-10 lg:hidden lg:min-h-full lg:w-full">
          <div className="center flex h-[350px] w-full max-w-md md:h-[350px] lg:h-full lg:max-w-5xl">
            <div className="center flex h-full w-full">
              {/* Add your dynamic content or use a custom flow/diagram component */}
              <div
                className="react-flow"
                data-testid="rf__wrapper"
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 0,
                }}
              >
                <div
                  className="react-flow__renderer"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                  }}
                >
                  {/* Example Flow Content (can be replaced) */}
                  <div
                    className="react-flow__viewport react-flow__container"
                    style={{ transform: "translate(-100px, -5px) scale(1)" }}
                  >
                    <div className="react-flow__nodes">
                      <div className="react-flow__node react-flow__node-input nopan min-w-[200px] rounded-lg border border-gray-500 bg-[#89ccf6] bg-opacity-50 p-2 text-black shadow-lg">
                        <div className="flex items-center space-x-2">
                          <Image
                            src="/images/web_scraper.png"
                            alt="Node Icon"
                            width={24}
                            height={24}
                          />
                          <span className="font-semibold">Website Scraper</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="center flex w-full">
          <div className="center flex w-full flex-row gap-4 py-6 lg:justify-start lg:py-0">
            <button
              type="button"
              className="text-md inline-flex h-11 items-center justify-center gap-1 space-x-2 whitespace-nowrap rounded-md border border-[#f06293] bg-[#fff0f4] px-7 py-3 font-medium text-[#f06293] ring-offset-background transition-all duration-100 ease-in-out hover:bg-pink-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <span>Start Automating</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right h-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <button
              type="button"
              className="bg-warm-white flex h-11 w-full max-w-60 items-center justify-center gap-1 space-x-2 whitespace-nowrap rounded-md border border-input px-7 text-xs font-medium text-gray-500 ring-offset-background transition-all duration-300 hover:bg-gray-50 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:text-sm md:text-base"
            >
              <span>Book a demo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right hidden h-4 lg:block"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Backed by Section */}
        <div className="flex flex-col gap-y-10">
          <div className="center flex min-w-full lg:justify-start">
            <div className="flex flex-col">
              <span className="font-semibold text-secondary">Backed by</span>
              <div className="mt-1 flex items-center">
                <Image
                  src="/y_combinator.png"
                  alt="Y"
                  width={50}
                  height={50}
                  className="mr-1 h-8 w-8"
                />
                <span className="text-lg font-bold text-black">Combinator</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Shown only on large screens */}
      <div className="center hidden min-h-[250px] w-full md:min-h-[350px] lg:mr-10 lg:block lg:min-h-full lg:w-full">
        <div className="center flex h-[350px] w-full max-w-md md:h-[350px] lg:h-full lg:max-w-5xl">
          <div className="center flex h-full w-full">
            {/* Add your dynamic content or use a custom flow/diagram component */}
            <div
              className="react-flow"
              data-testid="rf__wrapper"
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                position: "relative",
                zIndex: 0,
              }}
            >
              <div
                className="react-flow__renderer"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                }}
              >
                {/* Example Flow Content (can be replaced) */}
                <div
                  className="react-flow__viewport react-flow__container"
                  style={{
                    transform:
                      "translate(-122.786px, 46.6935px) scale(1.48831)",
                  }}
                >
                  <Flow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Blur Elements */}
      <div className="hidden lg:block">
        <div className="blur-4xl absolute -left-1/4 bottom-1/2 -z-10 h-56 w-[700px] -rotate-[50deg] rounded-full bg-pink-400/30 opacity-60 md:opacity-100"></div>
        <div className="blur-4xl absolute -right-1/4 bottom-1/4 -z-10 h-56 w-[500px] rotate-[40deg] rounded-full bg-pink-300/40 opacity-60 md:opacity-100"></div>
      </div>
    </div>
  )
}
