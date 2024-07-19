let arr_name = JSON.parse(localStorage.getItem('name')) || [];
let arr_cod = JSON.parse(localStorage.getItem('code')) || [];
let arr_commen = JSON.parse(localStorage.getItem('comment')) || [];

let dt = new Date();
var fecha = dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear()

var perfil = {
  name: arr_name,
  code: arr_cod,
  comment: arr_commen,
  date: fecha
}

function perfill() {
  let user = document.getElementById('c_user');
  let code = document.getElementById('c_code');
  let create = document.getElementById('c_create');
  let coment = document.getElementById('c_comment');
  let warning = document.getElementById('warning');

  user.innerHTML = perfil.name
  code.innerHTML = perfil.code
  create.innerHTML = perfil.date
  coment.innerHTML = perfil.comment
}

//document.getElementById('create').setAttribute('onclick', 'get_name()');
function get_name() {
  let getname = arr_name.toString();
  let count = document.getElementById('create');
  let join_btn = document.getElementById('join'); 

  if (getname.length > 1) {
    count.innerHTML = `<span style="color: red;">ya tienes cuenta</span>`
    count.style.textDecoration = 'line-through'
    count.style.cursor = 'default';
    join_btn.style.display = "none";
    warning.innerHTML = `<span style="font-weight: bold; font-size: 18px;">YA TIENES UNA CUENTA</span>`
    return;
  }
}


get_name()

perfill();

