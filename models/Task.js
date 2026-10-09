const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  title:{type:String, required:true},
  status:{type:String, default:'To Do', enum:['To Do','In Progress','Done']},
  project:{type:mongoose.Schema.Types.ObjectId, ref:'Project', required:true}
},{timestamps:true});
module.exports=mongoose.model('Task',TaskSchema);