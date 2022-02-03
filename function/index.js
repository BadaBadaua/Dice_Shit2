var  player1 = prompt("Enter Player 1 name  :").toLowerCase();
player1 = player1.slice(0,1).toUpperCase()+player1.slice(1,player1.length); 

var  player2 = prompt("Enter Player 2 name  :").toLowerCase();
player2 = player2.slice(0,1).toUpperCase()+player2.slice(1,player2.length); 


var randomNum1 = Math.floor(Math.random()*5)+1;
var randomNum2 = Math.floor(Math.random()*5)+1;

function p1Dice(randomNum1){
    if(randomNum1 === 1){
       return document.querySelector(".p1-dice").setAttribute("src","./CSS - My Site Images/dice1.png");
    }
    if(randomNum1 === 2){
       return document.querySelector(".p1-dice").setAttribute("src","./CSS - My Site Images/dice2.png");
    }
    if(randomNum1 === 3){
       return document.querySelector(".p1-dice").setAttribute("src","./CSS - My Site Images/dice3.png");
    }
    if(randomNum1 === 4){
       return document.querySelector(".p1-dice").setAttribute("src","./CSS - My Site Images/dice4.png");
    }
    if(randomNum1 === 5){
      return  document.querySelector(".p1-dice").setAttribute("src","./CSS - My Site Images/dice5.png");
    }
}
function p2Dice(randomNum2){
    if(randomNum2 === 1){
      return document.querySelector(".p2-dice").setAttribute("src","./CSS - My Site Images/dice1.png");
    }
    if(randomNum2 === 2){
      return document.querySelector(".p2-dice").setAttribute("src","./CSS - My Site Images/dice2.png");
    }
    if(randomNum2 === 3){
      return document.querySelector(".p2-dice").setAttribute("src","./CSS - My Site Images/dice3.png");
    }
    if(randomNum2 === 4){
      return document.querySelector(".p2-dice").setAttribute("src","./CSS - My Site Images/dice4.png");
    }
    if(randomNum2 === 5){
     return document.querySelector(".p2-dice").setAttribute("src","./CSS - My Site Images/dice5.png");
    }
}

// console.log(randomNum1);
// console.log(randomNum2);

if(randomNum1 > randomNum2){
    document.querySelector(".top-container").innerText = "🏳️  "+player1 +" Wins  🏳️\n\n➡️Refersh Again⬅️\n✨For✨\nAnother Roll\n🎲";
    document.querySelector(".top-container").style.color = "green";
    document.querySelector(".p1").style.color=" green" ;
    p1Dice(randomNum1);
    p2Dice(randomNum2);
}
if(randomNum1 < randomNum2){
   document.querySelector(".top-container").innerText = "  🏴  "+player2+" Wins 🏴\n\n➡️Refersh Again⬅️\n✨For✨\nAnother Roll\n🎲"; 
   document.querySelector(".top-container").style.color = "green";
   document.querySelector(".p2").style.color=" green" ;
   p1Dice(randomNum1);
   p2Dice(randomNum2);
 }
if(randomNum2 === randomNum1){
    document.querySelector(".top-container").innerText = "🥺   DRAW  🥺";
    p1Dice(randomNum1);
    p2Dice(randomNum2);
}

