const express = require("express")
const Todo = require("../models/todo")
const auth = require("../middleware/authMiddleware")

const router = express.Router();

router.post("/todo", auth, async (req, res) => {
    const { title } = req.body;

    const todo = await Todo.create({
        title,
        userId: req.userId
    })

    res.json({ message: "Todo Created", todo })

})

router.get("/todos", auth, async (req, res) => {
    const todos = await Todo.find({ userId: req.userId })
    res.json({ todos })
})

router.delete("/todo/:id", auth, async (req, res) => {
    await Todo.findOneAndDelete({ _id: req.params.id, userId: req.userId });

    res.json({ message: "Todo deleted" });
})

module.exports = router;