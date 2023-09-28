const getAllTasks = (req,res) => {
    res.send('all items from cc')
}

const createTask = (req,res) => {
    res.send('create Task')
}

const getTask = (req,res) => {
    res.send('get single Task')
}

const updateTask = (req,res) => {
    res.send('update Task')
}

const deleteTask = (req,res) => {
    res.send('delete Task')
}

module.exports = { getAllTasks, createTask, deleteTask, getTask, updateTask}