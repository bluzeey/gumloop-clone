import axios from "axios"

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const response = await axios.get(
        "https://api.gumloop.com/get_templates_saved_items",
        {
          headers: {
            x_auth_key: "arwn30IP3lx3",
          },
          params: {
            author_id: "FYcZQXMNZ9guCRWazGwy59",
            auth_key: "", // Add your auth key here
          },
        }
      )
      res.status(200).json(response.data)
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch tools" })
    }
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
