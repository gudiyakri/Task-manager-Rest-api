const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// for finding data from database
//Get back all the user


router.get('/',async(req,res)=>{
    try{
       const user =await User.find();
       res.json(user);
    }catch(err){
        res.json({ message :err});
    }
});


/*router.get('/',(req,res)=>{
    res.send('we are on users');
});

router.post('/',(req,res)=>{
    console.log(req.body);
})
*/
//SUBMITS A POST
router.post('/',async(req,res)=>{
   // router.post('/',async(req,res)=>{
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        age:req.body.age
    });
//execute it by post POST->localhost:3005/task

   /* try{
        const savedUser = await user.save();
        res.json(saveUser);
    }catch (err) {
res.json({ message: err });
    }
*/
    
   /* router.get('/',  (req,res) =>{
        const_id = req.params.id//Access the id provided
        user.findById(_id).then((user) =>{
            if(!user){
                return res.status(404).send()
            }
            res.send(user)
        }).catch((e) =>{
            res.status(500).send()
        })
    })
    */
// save data into database
user.save()
.then(data =>{
    res.json(data);
})
.catch(err =>{
    res.json({ message: err});
});
})



/*
router.get('/:userId',async(req,res)=>{
    try{
        const user=await User.findById(req.params.userId);
        res.json({user})

    }catch(err){
        res.json({message:err})
    }

});
*/

/*
app.get('/:id', (req, res) => {
    const _id = req.params.id // Access the id provided
    User.findById(_id).then((user) => {
    if (!user) {
    return res.status(404).send()
    }
    res.send(user)
    }).catch((e) => {
    res.status(500).send()
    })
   })

*/

//find by id
router.get('/:userId',async(req,res)=>{
    try{
        const user =await User.findById(req.params.userId);
        res.json(user); 
    }
    catch(err){
        res.json({ message : err});
    }
});
//Delete by id
router.delete('/:userId',async(req,res)=>{
    try{
        const removeUser = await User.remove({_id:req.params.userId});
        res.json(removeUser)
    }
    catch(err){
        res.json({message :err});
    }
});
//update only one document
router.patch('/:userId',async(req,res)=>{
    try{
       const updateUser =await User.updateOne(
           { _id:req.params.userId},
           {$set:{name:req.body.name}}
       ) ;
       req.json(updateUser);
    }catch(err){
        res.json({ message: err});
    }
});


module.exports = router;