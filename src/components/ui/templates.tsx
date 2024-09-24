import React from "react"

import toolsData from "../../data/tools.json"
import Card from "./card" // Updated import path

// Transform toolsData to match the expected structure
const transformedData = toolsData.map((item) => item.declaration)

const Templates: React.FC = () => {
  return (
    <div className="">
      <div className="flex w-full max-w-xl flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h4 className="text-center text-6xl uppercase text-black text-primary">
            Flow templates
          </h4>
          <h1 className="text-center text-6xl font-semibold text-black">
            Skip the learning curve.
          </h1>
        </div>
        <div className="text-center text-xl text-black">
          Leverage our community&apos;s efforts with pre-built workflows.
        </div>
      </div>
      <Card data={toolsData} />
    </div>
  )
}

export default Templates
