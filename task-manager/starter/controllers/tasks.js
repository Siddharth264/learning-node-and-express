const Task = require('../models/Task');


const getAllTasks = (req,res) => {
    res.send('all items from cc')
}

const createTask = async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
    //res.json(req.body)
}

const getTask = (req,res) => {
    res.json({id:req.params.id})
}

const updateTask = (req,res) => {
    res.send('update Task')
}

const deleteTask = (req,res) => {
    res.send('delete Task')
}

module.exports = { getAllTasks, createTask, deleteTask, getTask, updateTask}