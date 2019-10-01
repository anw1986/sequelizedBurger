$(document).ready(function () {
    console.log("ready!");


    $(".create-form").on("submit", function (event) {
        event.preventDefault()
        if ($("#burgerName").val().trim()==""){
            alert("Plese enter a name of the burger")
        }
        var newBurger ={
          burger_name: $("#burgerName").val().trim()  
        } 
        console.log(newBurger)


        // Send post request
        $.ajax("/api/burger",{
            type: "POST",
            data: newBurger
        }).then(function(result){
            console.log("created new burger")
            console.log(result)
            // Reload the page
            location.reload()
        }
        );

    });

    $(".devourBurger").on("click",function(){
        var burgerId=$(this).data("id")
        var burgerConsumed=$(this).data("consumed")
        console.log("Button value: "+burgerId+" consumed: "+burgerConsumed)

        var newConsumedState={
            burger_consumed: burgerConsumed
        }
        console.log(newConsumedState)
        $.ajax("/api/burger/"+burgerId,{
            type: "PUT",
            data: newConsumedState
        }).then(function(){
            console.log("Changed consumed state to: "+ burgerConsumed)
            location.reload()
        })
    })

});