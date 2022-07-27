const express= require('express')
const { deleteOne } = require('../models/Person')
const router= express.Router()
const Person =require('../models/Person')

//add Person
router.post('/newPerson', (req,res)=>{
    let newPerson = new Person(req.body)
    newPerson.save((err,data)=>{
        err? console.log(err) : res.send('person was added')
    })
})

//get persons @Get
router.get ('/', (req,res)=> {
     Person.find(  {}, (err,data)=>{
        err? console.log(err) : res.json(data)
})
})
// get persons by one
router.get('/:favoriteFoods', (req,res)=>{
    Person.findOne( {favoriteFoods:req.params.favoriteFoods},(err,data)=>{
        err ? console.log(err) : res.json(data)
    } )
})
// get persons by id
router.get( '/:id', (req, res)=>{
    Person.findById( {_id:req.params.id}, (err,data)=>{
        err ? console.log(err) : res.json(data)
    })
})
// update person @put
router.put('/update/:id', (req,res)=>{
    Person.findByIdAndUpdate({_id:req.params.id},{...req.body},(err,data)=>{
        err ? consolr.log(err) : res.json(data)
    })
})
//delete person by id @delete
router.delete ('/RemovePerson/:_id', (req,res)=>{
    Person.findOneAndRemove({_id:req.params.id}, (err,msg)=>{
        err ? console.log(err): res.json ({msg:'contact was removed'})
    })
})
// delete person by document
router.delete ('/RemovePerson/:name', (req,res)=>{
    Person.remove({name:req.params.name} , (err, msg)=>{
        err ? console.log(err) : res.json ({msg:good})
    })
})
// Search Query Helpers @Get
router.get ('/:favoriteFoods', (req,res)=>{
    Person.find({favoriteFoods:req.params.favoriteFoods})
    .sort({name:1})
    .limit(2)
    .select({age:0})
    .exec (err,data) =>{
        err ? console.log(err) : res.json(data)
    }
    
})


module.exports= router