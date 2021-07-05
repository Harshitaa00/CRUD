const express = require('express');
const  Mongoose  = require('mongoose');
const Student = require('../model/student');
const router = express.Router();

router.get('/students', (req,res)=>{
    Student.find()
    .then(result=>{
        res.status(200).json({
            studentData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });  
});
//get data byId
/*router.get('/:id',(req,res)=>{
    //console.log(req.params.id);
    Student.findById(req.params.id)
    .then(result=>{
        res.statusCode(200).json({
            student:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

*/
router.post('/students', (req,res)=>{

    //console.log("inside post of student")
    const student = new Student({
        
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        gender:req.body.gender
    });
    //console.log(req.body.phone);
    student.save()
    .then(result=>{
        console.log(result);
         res.status(200).json({
            newStudent:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
    //console.log(req.body);
});

//delete data
router.delete('/:id',(req,res)=>{
     console.log(req.params.id);
    Student.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message:'product deleted',
            result:result 
        });
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})

//PUT request : update data to the database
router.put('/:id',(req,res)=>{
    console.log(req.params.id)
    Student.findOneAndUpdate({id:req.param.id},{
        $set:{
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        gender:req.body.gender 
        }
    })
.then(result=>{
    res.status(200).json({
        updated_product:result
    })
})
.catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
})
})
module.exports = router; 