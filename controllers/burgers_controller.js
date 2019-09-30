var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router()

router.get("/", function (req, res) {
    burger.allBurger(function (data) {
        var hbsObject = {
            burgers: data
        };

        console.log(hbsObject)
        res.render("index",hbsObject)
    })
    

})

router.post("/api/burger",function(req,res){
    console.log(req.body)
    // res.json(req.body)
    burger.insertBurger(req.body,function(result){
        res.json(result)
    })
})


router.put("/api/burger/:id",function(req,res){
    var burgerId=req.params.id 
    console.log("burger ID: "+burgerId)
    console.log("State: "+req.body.burger_consumed)
    burger.updateBurger(req.body.burger_consumed,burgerId,function(result){
        if(result.changedRows==0){
            return res.status(404).end()
        }else{
            res.status(200).end()
        }
    })
})

module.exports = router