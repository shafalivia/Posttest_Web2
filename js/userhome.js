let ambil = localStorage.getItem('user')
let objuser = JSON.parse(ambil)
const user = objuser.map(i => i.User)

const hasil = document.getElementById('tampil')
hasil.innerHTML = user