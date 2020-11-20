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


const ByDate=asyncHandler(async(req,res)=>{
    const query = await Todo.find({targetDate:req.params.targetDate})

    if(query){
        res.json({
            query
        })
    }

    else {
        res.status(404)
        .json({
            message:'Search Item not Found'
        })
      }

    
})





const viewSingleTodo=asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)
  
    if (todo) {
      res.json(todo)
    } else {
      res.status(404)
      .json({
          message:'Unable to get the requested Todo'
      })
    }
  })



const getTodoByTitle=asyncHandler(async(req,res)=>{
    const query = await Todo.find({title:req.params.title})

    if(query){
        res.json({
            query
        })
    }

    else {
        res.status(404)
        .json({
            message:'Search Item not Found'
        })
      }

    
})




  const updateTodo = asyncHandler(async (req, res) => {

    Todo.findOneAndUpdate({
        _id:req.params.id
    },{
        $set:req.body
    },{
        new:true
    },(err,todoUpdated)=>{
        if(err){
            return res.status(400).json({
                err
            })
        }
        else{
            res.json({
                message:'Todo Updated',
                todoUpdated
            })
        }
    })

   
  })



const deleteTodo=asyncHandler(async(req,res)=>{

    Todo.deleteOne({_id:req.params.id},(err,done)=>{
        if(err){
            res.status(400).json({
                message:'Un able to delete'
            })
        }
        else{
            res.json({
                message:'Todo Deleted'
            })
        }
    })
})


const deleteCompletedTodos= asyncHandler(async(req,res)=>{

    var filter = {status:'done'}

    Todo.deleteMany(filter,(err,sucess)=>{
        if(err){
            res.status(400).json({
                message:'Unable to delete completed Todos'
            })
        }
        else{
            res.json({
                message:'Completed Todos are deleted successfully'
            })
        }
    })


})






export {
    addTodo,
    listOfTodos,
    viewSingleTodo,
    updateTodo,
    deleteTodo,
    deleteCompletedTodos,
    getTodoByTitle,
    ByDate
   
}