var express = require("express");
// var burger = require("../models/burger.js");
var db=require("../models")
var router = express.Router()

router.get("/", function (req, res) {

    db.Burger.findAll({}).then(function(result){
        // console log the result
        // test the result array and pass it to render as an object to the 
        // res.render
        console.log(result)
        console.log(result.length)
        console.log(result[0].dataValues.burger_name)
        res.render("index",{result})
        // res.json(result)
    })

})

router.post("/api/burger",function(req,res){
    console.log("Name of the burger to be posted: "+req.body.burger_name)
    // res.json(req.body)
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function(newRecord){
        res.json(newRecord)
    })
    
})


router.put("/api/burger/:id",function(req,res){
    var burgerId=req.params.id 
    console.log("burger ID: "+burgerId)
    console.log("State: "+req.body.burger_consumed)
    // burger.updateBurger(req.body.burger_consumed,burgerId,function(result){
    //     if(result.changedRows==0){
    //         return res.status(404).end()
    //     }else{
    //         res.status(200).end()
    //     }
    // })
    db.Burger.update({
        burger_devoured: req.body.burger_consumed
    },{
    where: {
        id: burgerId
    }
    }).then(function(dbuser){
        res.json(dbuser)
        console.log(dbuser)
    })
})

module.exports = router