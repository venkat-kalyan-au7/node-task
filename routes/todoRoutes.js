import express from "express"

const router = express.Router()


import upload from "../helper/imageUpload"
import {addTodo} from "../controller/todoController"



router.post('/addtodo',upload.any(),addTodo)


module.exports = router