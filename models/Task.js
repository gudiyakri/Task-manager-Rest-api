const mongoose = require('mongoose');
const taskSchema = mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
});
module.exports = mongoose.model('Task',taskSchema);                                         