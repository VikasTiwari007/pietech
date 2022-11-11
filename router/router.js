const express = require("express");
const router = express.Router()
const user = require("../model/model")


//posting the request in our database
router.post("/user", async (req, res) => {

    try {
        const result = new user(req.body)
        await result.save();
        res.send(result);
    } catch (err) {
        res.send(err)

    }
})
//sorting by age
router.get("/", async (req, res) => {

    try {
        const result = await user.find().sort({ age: 1 })
        res.json(result);
    } catch (err) {
        res.send(err)

    }
})

//pagination
router.get("/page", async (req, res) => {
    try {
        let result = await user.find().limit(3).skip(2)
        res.json(result);
    } catch (err) {
        res.send(err)
    }
})
// finding by name
router.get("/:name", async (req, res) => {
    const name = req.params.name
    try {
        const result = await user.findOne({ name: name })
        res.send(result);
    } catch (err) {
        res.send(err)

    }
})








module.exports = router