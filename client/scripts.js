let arr = JSON.parse(localStorage.getItem('name')) || [];

function get_data() {
  const name = document.getElementById('user');
  let image_data = localStorage.getItem('image')

  user.innerHTML = `<span>${arr.join(' ')}</span>`;
  document.getElementById('img').src = image_data

  // UI
  user.style.marginLeft = '5px';
  user.style.color = 'red';
}

get_data();


