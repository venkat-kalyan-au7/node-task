import Todo from "../models/todoModel"
import asyncHandler from "express-async-handler"


const addTodo=(req,res)=>{
    let todo = new Todo({
        title:req.body.title,
        description:req.body.description,
        image:req.files[0].filename,
        targetDate:req.body.targetDate,
        status:req.body.status
    })

    todo.save((err,todo)=>{
        if(err){
            return res.status(400).json({
                message:'Failed to add todo',
                
            })
        }
        else{
            return res.status(200).json({
                message:"Todo added successfully",
                todo
            })
        }
    })
}


const listOfTodos=async (req, res) => {
   
    const { page = 1, limit = 10 } = req.query;
  
    try {
     
      const todos = await Todo.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
  
     
      const count = await Todo.countDocuments();
  
      
      res.json({
        todos,
        totalPages: Math.ceil(count / limit),
        currentPage: page
      });
    } catch (err) {
      res.status(400).json({
          message:'Unable to fetch data',
          err
      })
    }
}


export {
    addTodo,
    listOfTodos
}