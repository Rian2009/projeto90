player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");


player1_score = 0;
player2_score = 0;

document.getElementById("player11_name").innerHTML = player1_name + " : ";
document.getElementById("player22_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Turno de Pergunta: " + player1_name;
document.getElementById("player_answer").innerHTML = "Turno de Resposta: " + player2_name;

function send()
{
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt (number1) * parseInt (number2);
console.log(actual_answer);


}
