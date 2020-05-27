var username;
var websocket;
username = prompt("Entrez votre pseudo");


createWebSocket();

function createWebSocket() {
  websocket = new WebSocket('ws://localhost:12345');
}

function sendMessage() {
  let data = document.getElementById("message").value;
  document.getElementById("message").value = "";
  websocket.send(username+" :"+data);
}

websocket.onopen = function() {
  console.log('Connexion établie');
  websocket.send(username+" a rejoint le canal de discussion");
}

websocket.onmessage = function(event) {
  let tchat = document.getElementById("texte");
  tchat.setAttribute("disabled",false);
  tchat.append(event.data+"\n");
  tchat.setAttribute("disabled",true);
}

websocket.onclose = function() {
  console.log('Communication terminée');
}