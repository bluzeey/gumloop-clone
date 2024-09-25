import React from "react"
import Image from "next/image"
import { Handle, Position } from "@xyflow/react"

import "@xyflow/react/dist/style.css"

// Dynamic Custom Node Component
const CustomNode = ({ data }: any) => {
  const { label, backgroundColor, gradientColor, iconSrc } = data

  return (
    <div
      className="react-flow__node-input nopan selectable min-h-[40px] min-w-[220px] rounded-2xl rounded-lg border border-gray-300 px-[10px] py-[7px] text-black shadow-sm focus:ring-2 focus:ring-pink-200"
      style={{
        background: `linear-gradient(${gradientColor}, ${gradientColor}), white`,
      }}
    >
      {/* Top Handle (optional, add based on node type) */}
      <Handle
        type="target"
        position={Position.Top}
        className="react-flow__handle react-flow__handle-top nodrag nopan target connectable connectablestart connectableend connectionindicator"
        style={{ background: "#555" }}
      />

      <div
        className="flex items-center space-x-3 rounded-lg bg-white"
        style={{
          background: `linear-gradient(${gradientColor}, ${gradientColor}), white`,
        }}
      >
        {/* Icon Container */}
        <div className="rounded-full p-1" style={{ backgroundColor }}>
          <Image
            alt="Node Icon"
            loading="lazy"
            width="28"
            height="28"
            src={`https://gumloop.com` + iconSrc} // Dynamic icon based on node
            style={{ color: "transparent" }}
          />
        </div>
        {/* Label */}
        <span className="font-semibold text-black">{label}</span>
      </div>

      {/* Bottom Handle */}
      <Handle
        type="source"
        position={Position.Bottom}
        className=" nopan source connectable connectablestart connectableend connectionindicator"
        style={{ background: "#555" }}
      />
    </div>
  )
}

export default CustomNode
