function addUser(){
  document.getElementById("player_1_input").value;
  document.getElementById("player_2_input").value;

  localStorage.setItem("player_1_input");
  localStorage.setItem("player_2_input");

  window.location("game_login.html");

}