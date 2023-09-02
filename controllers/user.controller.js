const User = require('../models/user.model');

// get all user.
const getAllUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ users })
    } catch (error) {
        res.status(404).json({
            message: "not found",
            error: error.message
        })
    }
};

// create a new user.
const createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const user = await User({ name, email, age });
        await user.save().then((user) => {
            res.status(201).json({
                message: "user has been created.",
                user: user
            })
        })
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
};

// update user.
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = { name, email, age } = req.body;
        const result = await User.findByIdAndUpdate({ _id: userId },
            { $set: userData },
            { new: true });
        res.status(200).json({
            message: "user update sucessful.",
            user: result
        })
    } catch (error) {
        res.status(404).json({
            message: "not update user.",
            error: error.message
        })
    }
};


// delete user by id.
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await User.findByIdAndDelete({ _id: userId })
        res.status(200).json({
            message: "user delete sucessful.",
            user
        })
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
};
module.exports = { getAllUser, createUser, updateUser, deleteUser };