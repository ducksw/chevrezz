let arr = JSON.parse(localStorage.getItem('name')) || [];
//let arrPass = JSON.parse(localStorage.getItem('pass')) || [];

let arr_image = [];

function register() {
  let input = document.getElementById('reg_input').value;
  let password = document.getElementById('reg_password').value;
  let result = document.getElementById('res')

  arr.push(input);
  //arrPass.push(password);

  if (input) {
    localStorage.setItem("name", JSON.stringify(arr))
    //localStorage.setItem("pass", JSON.stringify(arrPass))
    result.innerHTML = arr.join('<br/>');
  }

  window.location = "index.html";
}

function clear_storage() {
  localStorage.clear();
}

function up_image(){
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      let image_up = reader.result;
      arr_image.push(image_up);
      localStorage.setItem("image", image_up)
      //document.getElementById("img").src = image_up;
    }
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  let bd = localStorage.getItem("name")
  let image = localStorage.getItem("image")
  if (bd) {
    let result = document.getElementById('res')
    result.innerHTML = arr.join('<br/>');
  }

  if (image) {
    document.getElementById("img").src = image
  }
});


document.getElementById('clear').addEventListener('click', () => {
  let warning = prompt("ESTA SEGURO ELIMINAR TU CUENTA? S(SI) y N(NO)")

  if (warning.toLocaleUpperCase() == "SI" || warning.toLocaleUpperCase() == "S") {
    clear_storage()
    location.reload()
  } 
});
