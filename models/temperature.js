module.exports=function(sequelize,DataTypes){
    var Temperature=sequelize.define("Temperature",{

        temp_description:{
            type: DataTypes.STRING
        }

        // burger_name:{
        //     type:DataTypes.STRING,
        //     allowNull: false,
        //     validate:{len: [1,250]}
        // },

        // burger_devoured:{
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false
        // }

    },{
        freezeTableName: true
    })



    // Temperature.associate=function(models){
    //     Temperature.belongsTo(models.Burger,{
    //         foreignKey:{
    //             allowNull:false
    //         }
    //     })
    // }

    return Temperature
}