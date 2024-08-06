let arr = JSON.parse(localStorage.getItem('name')) || [];
let arr_code = JSON.parse(localStorage.getItem('code')) || [];
let arr_comment = JSON.parse(localStorage.getItem('comment')) || [];
let arr_fecha = JSON.parse(localStorage.getItem('fechaa')) || [];

let arr_image = [];

function register() {
  let input = document.getElementById('reg_input').value;
  let codee = document.getElementById('reg_code').value;
  let comments = document.getElementById('comment').value;
  let warning = document.getElementById('warning');
  let join = document.getElementById('join');
  //let result = document.getElementById('res')

  arr.push(input);
  arr_code.push(code);
  arr_comment.push(comments);

  if (input == "" && codee == "") {
    alert("completa los campos");
    return;
  } else {
    localStorage.setItem("name", JSON.stringify(arr))
    localStorage.setItem("code", JSON.stringify(arr_code))
    localStorage.setItem("comment", JSON.stringify(arr_comment))
    warning.innerHTML = "Se esta creando su cuenta, esto puede tardar un poco..."
    join.style.display = "none";
    //result.innerHTML = arr.join('<br/>');
  }
}

function clear_storage() {
  localStorage.clear();
}

function up_image() { 
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      let image_up = reader.result;
      arr_image.push(image_up);
      localStorage.setItem("image", image_up)
      //document.getElementById("img").src = image_up;
      location.reload();
    }
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  let bd = localStorage.getItem("name")
  let image = localStorage.getItem("image")
  if (bd) {
    //let result = document.getElementById('res')
    //result.innerHTML = arr.join('<br/>');
  }
  if (image) {
    document.getElementById("img").src = image
    document.getElementById("foto").src = image;
  }
});

/*
document.getElementById('clear').addEventListener('click', () => {
  let warning = prompt("ESTA SEGURO ELIMINAR TU CUENTA? S(SI) y N(NO)")

  if (warning.toLocaleUpperCase() == "SI" || warning.toLocaleUpperCase() == "S") {
    clear_storage()
    location.reload()
  } 
});
*/