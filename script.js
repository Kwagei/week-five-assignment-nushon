var number = Math.floor(Math.random() * 100)
console.log(number);
var chances= 10;

document.getElementById("chances").innerHTML = "chances: " + chances;

document.getElementById("enter_buttn").onclick = function(){
    console.log("Hello");
    var user_input = document.getElementById("user_input").value;
    console.log(user_input);


    if(user_input == number) {
        document.getElementById("usertext").innerHTML = "You Win"
        document.getElementById("usertext").style= "color: Green;"
        document.getElementById("div2").style= "background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),  url(./images/congrat.jpg)"
        


        
    
    }else if(user_input > number){
        chances --;
        document.getElementById("chances").innerHTML = "chances: " + chances
        document.getElementById("usertext").innerHTML = "Your guess is high!"
        document.getElementById("usertext").style= "color: red;"
        console.log(user_input);
    }else if(user_input < number){
        chances --;
        document.getElementById("chances").innerHTML = "chances: " + chances
        document.getElementById("usertext").innerHTML = "Your guess is low!"
        document.getElementById("usertext").style= "color: orange;"

    }
    if(chances == 0){
        document.getElementById("usertext").innerHTML = "GAME OVER!"
        document.getElementById("usertext").style= "color: red;"
        
    }


}
    
   