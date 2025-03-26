const express = require("express")
const app = express()
const cors=require("cors")
const PORT = process.env.PORT || 3000;

const myname = "Ishaan"
const mypass = "123"
app.use(cors())
app.use(express.json())
app.listen(PORT, () => {
    console.log("Server started")
})
app.use(express.urlencoded({extended:true}))
app.post("/login", (req, res) => {
    const {username,password}=req.body
    if (username === myname && password === mypass)
    {
        res.send(true)

    }
    else {
        res.send(false)
    }
})
app.get("/", (req, res) => {
    res.send("Backend is running successfully! 🎉");
});