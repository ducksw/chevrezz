//document.getElementById('join').setAttribute('onclick', 'joinn()')

function codee(c) {
  let save = ""; 
  let token = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let tokenLength = token.length;

  for (let i = 0; i < c; i++) {
    save += token.charAt(Math.random() * tokenLength);
  }

  return save;
}

function id() {
  let cod = codee(10)
  let ID = document.getElementById('code').value = cod;
  const f = new Date()
  let create = document.getElementById('create');
  let fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
  create.innerHTML = fecha
  localStorage.setItem('cod', ID)
  localStorage.setItem('creation', fecha);
}
id()

function loginn() {
  let input = document.getElementById('reg_input').value 
  let comment = document.getElementById('comment').value 
  let create = document.getElementById('create').value 
  let cheems = document.getElementById('cheems');

  if (input == "") {
    alert("necesitas un nombre");
  } else {
    localStorage.setItem('name', input)
    localStorage.setItem('coment', comment)
    cheems.style.display = "flex";
    setTimeout(function() {
      window.open("index", "_self")
    },3000)
  }
}

function exit() {
  let ex = document.getElementById('box-login');
  ex.style.visibility = "hidden"
}

function view() {
  let ex = document.getElementById('box-login');
  ex.style.visibility = "visible"
}

window.onload = function() {
  let get_namee = localStorage.getItem('name');
  let namee = document.getElementById('namee');
  if (get_namee) {
    namee.innerHTML = `<a href="">${get_namee}</a>`
  }
}

/*
function up_image() {
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      let image_up = reader.result;
      //arr_image.push(image_up);
      localStorage.setItem("image", image_up)
      document.getElementById("foto").src = image_up;
    }
  }
}
*/

