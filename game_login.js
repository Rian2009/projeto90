function adduse()
{
jogador1_none=document.getElementById("jogador1").value;
jogador2_none=document.getElementById("jogador2").value;
localStorage.setItem("player1_name", jogador1_none);
localStorage.setItem("player2_name", jogador2_none);
window.location="gamepage.html";
}



