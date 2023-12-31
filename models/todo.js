import mongoose from "mongoose";
const Schema = mongoose.Schema

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model('Todo', todoSchema)
export default Todo