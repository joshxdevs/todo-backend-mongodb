const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/user")

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { username, password } = req.body
    const exist = await User.findOne({ username })

    if (exist) {
        return res.status(401).json({ message: "User Already Exists" })
    }

    const hashed = await bcrypt.hash(password, 10)

    await User.create({ username, password: hashed })

    res.status(201).json({ message: "Signup Successfull" })
})

router.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username })
    if (!user) {
        return res.status(401).json({ message: "Invalid Credentials" })
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        return res.status(401).json({ message: "Invalid Credentials" })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

    res.json({token})
})

module.exports = router;