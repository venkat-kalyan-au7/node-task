import Todo from "../models/todoModel"



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


export {
    addTodo
}