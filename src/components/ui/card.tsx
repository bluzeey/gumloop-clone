import React, { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface KeyOperator {
  key: string
  value: (string | number)[]
}

interface Tool {
  description: string
  key_operators: KeyOperator[]
  name: string
}

type ToolsData = Tool[]

interface CardProps {
  data: ToolsData
}

const Card: React.FC<CardProps> = ({ data }) => {
  const [colors, setColors] = useState<string[]>([])

  useEffect(() => {
    const colorOptions = [
      "text-teal-700",
      "text-blue-700",
      "text-green-700",
      "text-yellow-700",
      "text-orange-700",
      "text-red-700",
      "text-purple-700",
      "text-pink-700",
      "text-brown-700",
    ]

    // Generate a random color for each item in the data
    const generatedColors = data.slice(0, 4).map(() => {
      const randomIndex = Math.floor(Math.random() * colorOptions.length)
      return colorOptions[randomIndex]
    })

    setColors(generatedColors)
  }, [data])

  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {data.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="group relative flex transform flex-col justify-between rounded-md border-2 border-gray-200 bg-white p-6 transition-transform duration-500 hover:scale-105 hover:ring hover:ring-pink-100"
          >
            {/* Circle buttons */}
            <div className="absolute left-2 top-2 flex flex-row items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-red-300"></span>
              <span className="h-2 w-2 rounded-full bg-yellow-300"></span>
              <span className="h-2 w-2 rounded-full bg-green-300"></span>
            </div>

            <div className="grid h-full w-full grid-cols-5 gap-4">
              <div className="col-span-3 flex h-full flex-col justify-between pt-5">
                <div className="flex flex-col">
                  {/* Apply dynamic Tailwind color for each card */}
                  <h3
                    className={`text-[32px] font-semibold leading-normal ${
                      colors[index] || "text-black"
                    }`}
                  >
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-300"
                    >
                      {item.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-col gap-x-3 py-3">
                  <div className="mt-4 flex flex-nowrap overflow-hidden py-4">
                    {item.key_operators &&
                      item.key_operators.map((operator, opIndex) => (
                        <div key={opIndex} className="mr-2 flex items-baseline">
                          <div className="rounded-full bg-white/60 p-2 shadow-md">
                            <Image
                              alt={operator.key}
                              loading="lazy"
                              width="28"
                              height="28"
                              src={`https://gumloop.com/images/${operator.value[0]}`}
                              className="m-1 h-10 w-10"
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="col-span-2 flex items-center justify-center">
                <ArrowUpRight className="absolute right-4 top-4 text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
