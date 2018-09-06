
let goal = Math.floor(Math.random() * Math.floor(120 - 19) + 19);
let total = 0;
let ruby = this.number = Math.floor(Math.random() * Math.floor(12 - 1) + 1);
let diamond = this.number = Math.floor(Math.random() * Math.floor(12 - 1) + 1);
let opal = this.number = Math.floor(Math.random() * Math.floor(12 - 1) + 1);
let amber = this.number = Math.floor(Math.random() * Math.floor(12 - 1) + 1);
let wins = 0;
let losses = 0;

function newRandoGem(){
     ruby = Math.floor(Math.random() * Math.floor(12 - 1) + 1);
     diamond = Math.floor(Math.random() * Math.floor(12 - 1) + 1);
     opal = Math.floor(Math.random() * Math.floor(12 - 1) + 1);
     amber = Math.floor(Math.random() * Math.floor(12 - 1) + 1);
    
}
function newRandoGoal() {
    goal = Math.floor(Math.random() * Math.floor(120 - 19) + 19);
    return goal;
}

$(document).ready(function (){
  
    
        $("#total").html(`Current Total = ${total}`);

        $("#goal").html(`Your Goal is: ${goal}`);

        $("#wins").html(`Wins: ${wins}`);

        $("#losses").html(`Losses: ${losses}`);


})
$("#ruby").click(function () {
    total = total + ruby ;
    $("#total").html(`Current Total = ${total}`);
    if(total > goal)
    {
        
        losses ++;
        total = 0;
        
        alert("You Lose");
        newRandoGoal();
        newRandoGem();
        

    }else if (total == goal)
    {
        alert("You Win!");
        wins++;
        total = 0
        newRandoGoal();
    }
    $("#total").html(`Current Total = ${total}`);
    $("#goal").html(`Your Goal is: ${goal}`);
    $("#wins").html(`Wins: ${wins}`);
    $("#losses").html(`Losses: ${losses}`);

})

$("#diamond").click(function () {
    total = total + diamond ;
    $("#total").html(`Current Total = ${total}`);
    if(total > goal)
    {
        
        losses ++;
        total = 0;
        
        alert("You Lose");
        newRandoGoal();
        newRandoGem();
        

    }else if (total == goal)
    {
        alert("You Win!");
        wins++;
        total = 0
        newRandoGoal();
    }
    $("#total").html(`Current Total = ${total}`);
    $("#goal").html(`Your Goal is: ${goal}`);
    $("#wins").html(`Wins: ${wins}`);
    $("#losses").html(`Losses: ${losses}`);

})

$("#opal").click(function () {
    total = total + opal ;
    $("#total").html(`Current Total = ${total}`);
    if(total > goal)
    {
        
        losses ++;
        total = 0;
        
        alert("You Lose");
        newRandoGoal();
        newRandoGem();
        

    }else if (total == goal)
    {
        alert("You Win!");
        wins++;
        total = 0
        newRandoGoal();
    }
    $("#total").html(`Current Total = ${total}`);
    $("#goal").html(`Your Goal is: ${goal}`);
    $("#wins").html(`Wins: ${wins}`);
    $("#losses").html(`Losses: ${losses}`);
})

$("#amber").click(function () {
    total = total + amber ;
    $("#total").html(`Current Total = ${total}`);
    if(total > goal)
    {
        
        losses ++;
        total = 0;
        
        alert("You Lose");
        newRandoGoal();
        newRandoGem();
        

    }else if (total == goal)
    {
        alert("You Win!");
        wins++;
        total = 0
        newRandoGoal();
    }
    $("#total").html(`Current Total = ${total}`);
    $("#goal").html(`Your Goal is: ${goal}`);
    $("#wins").html(`Wins: ${wins}`);
    $("#losses").html(`Losses: ${losses}`);

})



