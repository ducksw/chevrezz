/*
var code = document.getElementById('code');
const random = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
code.innerHTML = random.toUpperCase();
*/

let arr = JSON.parse(localStorage.getItem('name')) || [];

function direct() {
  alert("AUN NO ES FUNCIONAL");
}

function get_data() {
  const name = document.getElementById('user');
  user.innerHTML = `<a href="perfil.html">${arr.join(' ')}</a>`;

  // UI
  user.style.marginLeft = '5px';
  user.style.color = 'red';
}

get_data();
