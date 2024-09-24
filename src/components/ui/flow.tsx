import { Background, Controls, ReactFlow } from "@xyflow/react"

import "@xyflow/react/dist/style.css"

const edges = [
  { id: "1-2", source: "1", target: "2", label: "to the", type: "step" },
]

const nodes = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 100, y: 10 },
    type: "input",
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 200, y: 100 },
  },
]

function Flow() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default Flow
