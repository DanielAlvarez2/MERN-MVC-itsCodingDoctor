const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    complete: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Todo', TodoSchema) // will create a 'todos' collection