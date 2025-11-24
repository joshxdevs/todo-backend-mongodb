const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/authRoutes")
const todoRoutes = require("./routes/todoRoutes")

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB Connected")
}).catch(err => console.log(err))

app.use("/auth", authRoutes)
app.use("/", todoRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`)
})