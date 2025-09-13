import express from "express"

require('dotenv').config()

const app = express();
//config view engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.listen(8080, () => {
    console.log(`Server is running on ${PORT} PORT`)
    console.log(`My env is ${process.env.PORT}`)
})