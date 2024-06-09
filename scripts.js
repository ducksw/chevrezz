var code = document.getElementById('code');
function token(l) {
  let save = ""; 
  let token = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let tokenLength = token.length;

  for (let i = 0; i < l; i++) {
    save += token.charAt(Math.random() * tokenLength);
  }

  return save;
}

var t = token(50)
code.innerHTML = `<b>${t}</b>` 

function direct() {
  /*
  let promp = prompt("Ingrese el Codigo");
  if (promp == t) {
    window.open("game.html", "_self");
  }
  */
  alert("Esta funcionalidad no esta activa");
}
