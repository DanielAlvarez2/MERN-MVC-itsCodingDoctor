const express = require('express')
const router = express.Router()

const {getTodos, createTodo, deleteTodo, toggleTodoStatus} = require('../controllers/todoController.js')

router.get('/todos', getTodos) //api endpoint
router.post('/todo/new', createTodo)
router.delete('/todo/delete/:id', deleteTodo)
router.get('/todo/toggleStatus/:id', toggleTodoStatus)

module.exports = router
