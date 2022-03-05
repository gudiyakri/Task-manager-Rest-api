const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
/*
router.post('/',(req,res)=>{
    console.log(req.body);
}
*/
//SUBMITS A POST
router.post('/',(req,res)=>{
    const task = new Task({
        description:req.body.description,
        completed:req.body.completed,
        date:req.body.date
    });
    
    task.save()
    .then(data =>{
        res.json(data);
    })
    .catch(err =>{
        res.json({ message: err});
    });
})
//for finding data from database
//Get back all the user


router.get('/',async(req,res)=>{
    try{
       const task =await Task.find();
       res.json(task);
    }catch(err){
        res.json({ message :err});
    }
});

//find by id
router.get('/:taskId',async(req,res)=>{
    try{
        const task =await Task.findById(req.params.taskId);
        res.json(task); 
    }
    catch(err){
        res.json({ message : err});
    }
});
//Delete by id
router.delete('/:taskId',async(req,res)=>{
    try{
        const removeTask = await Task.remove({_id:req.params.taskId});
        res.json(removeTask)
    }
    catch(err){
        res.json({message :err});
    }
});
//update only one document
router.patch('/:taskId',async(req,res)=>{
    try{
       const updateTask =await Task.updateOne(
           { _id:req.params.taskId},
           {$set:{description:req.body.description}}
       ) ;
       req.json(updateTask);
    }catch(err){
        res.json({ message: err});
    }
});
    
module.exports = router;