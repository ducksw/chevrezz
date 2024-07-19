let arr_get = JSON.parse(localStorage.getItem('name')) || [];


function get_data() {
  const name = document.getElementById('user');
  let image_data = localStorage.getItem('image')

  user.innerHTML = `<span id="name-form" onclick="act()">${arr_get.join(' ')}</span>`;
  document.getElementById('img').src = image_data

  // UI
  user.style.marginLeft = '5px';
  user.style.color = 'red';
}

function modal() {
  let foc = document.getElementById('box-login');
  foc.style.visibility = "visible";
}

function act() {
  let perfil = document.getElementById('perfil');
  perfil.style.visibility = "visible";
}

function exit() {
  let exit = document.getElementById('exit');
  let foc = document.getElementById('box-login');
  foc.style.visibility = "hidden";
}

function exitt() {
  let exitt = document.getElementById('exitt');
  let perfil = document.getElementById('perfil');
  perfil.style.visibility = "hidden";
}


function token(l) {
  let save = ""; 
  let token = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let tokenLength = token.length;

  for (let i = 0; i < l; i++) {
    save += token.charAt(Math.random() * tokenLength);
  }

  return save;
}

function copiar() {
  let result = document.getElementById('codigo').innerHTML 
  navigator.clipboard.writeText(result)
  return 0;
}

var code = token(20) 

document.getElementById('codigo').innerHTML = code;

get_data();


