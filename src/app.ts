import express from "express"
const app = express();

app.get("/", (req, res) => {
    res.send("Khanh Dep Trsdjfsdnf sfmsdjasd fasd")
})

app.listen(8080, () => {
    console.log("Server is running on 8080 PORt")
})