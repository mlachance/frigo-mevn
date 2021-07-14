import express from "express"

const router = express.Router()

router.route("/test").get((req, res) => res.send("hello world"))

export default router