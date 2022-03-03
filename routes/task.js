const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// for finding data from database
//Get back all the user
/*
router.get('/',(req,res)=>{
    res.send('we are on task');
});

router.post('/',(req,res)=>{
    console.log(req.body);
})
*/
//SUBMITS A POST
router.post('/',(req,res)=>{
    const task = new Task({
        description:req.body.description,
        completed:req.body.completed
    });
    
    task.save()
    .then(data =>{
        res.json(data);
    })
    .catch(err =>{
        res.json({ message: err});
    });
})
/*
router.get('/:userId',(req,res)=>{
    res.send('The get Id Route');
})
*/
module.exports = router;