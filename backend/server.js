import express from "express"
import cors from "cors"
import groceries from "./api/groceries.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/", groceries)
app.use("*", (req, rs) => res.status(404).json({ error: "not found}"}))

export default app