var orm=require("../config/orm")

var burger={
    allBurger:function(callback){
        orm.selectAll("burgers",function(res){
            callback(res)
        })
    },
    insertBurger:function(burgerObj, callback){
        orm.insertOne("burgers",burgerObj,function(res){
            callback(res)
        })
    },
    updateBurger:function(state,id,callback){
        orm.updateOne("burgers","burger_devoured",state,id,function(res){
            callback(res)
        })
    }
}

module.exports=burger