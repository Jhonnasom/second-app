'use strict'
var express=require('express');
const { getProject } = require('../controllers/project');
var ProjectController=require('../controllers/project');

var router=express.Router();

router.get('/home',ProjectController.home);
router.post('/test',ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?',ProjectController,getProject);
router.get('/projects',ProjectController.getProjects);
router.put('/project/:id',ProjectController.updateProject);


module.exports=router;

