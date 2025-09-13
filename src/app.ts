import express from "express"
require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send("KhHeheheh sd")
})

app.listen(8080, () => {
    console.log(`Server is running on ${PORT} PORT`)
    console.log(`My env is ${process.env.PORT}`)
})