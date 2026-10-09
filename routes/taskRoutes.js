const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/project/:projectId', async (req,res)=>{
  const tasks=await Task.find({project:req.params.projectId});
  res.json(tasks);
});

router.post('/', async (req,res)=>{
  const task=await Task.create({
    title:req.body.title,
    status:req.body.status || 'To Do',
    project:req.body.project
  });
  res.json(task);
});

router.put('/:id', async (req,res)=>{
  const task=await Task.findByIdAndUpdate(
    req.params.id,
    {status:req.body.status},
    {new:true}
  );
  res.json(task);
});

router.delete('/:id', async (req,res)=>{
  await Task.findByIdAndDelete(req.params.id);
  res.json({msg:'Deleted'});
});

module.exports=router;