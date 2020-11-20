exports.DataValidation=(req,res,next)=>{
    
    req.check('title','title Field Is Required').notEmpty()
    req.check("targetDate","Date is not valid").notEmpty()
    
    
    const errors = req.validationErrors()
    if(errors){
        const firstError = errors.map(error=>error.msg)[0]
        return res.status(400).json({error:firstError})
    }
    next()
}