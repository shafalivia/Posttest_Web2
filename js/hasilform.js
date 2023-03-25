let ambil = sessionStorage.getItem('form')
let objform = JSON.parse(ambil)

const user = objform.map(i => i.User)
const email = objform.map(i => i.Email)
const telp = objform.map(i => i.Telp)
const alamat = objform.map(i => i.Alamat)
const nama = objform.map(i => i.Nama)
const umur = objform.map(i => i.Umur)
const keluhan = objform.map(i => i.Keluhan)
const gender = objform.map(i => i.Gender)
const bayar = objform.map(i => i.Select)
const alergi = objform.map(i => i.Alergi)

const show1 = document.getElementById('tampil-user')
const show2 = document.getElementById('tampil-email')
const show3 = document.getElementById('tampil-telp')
const show4 = document.getElementById('tampil-alamat')
const show5 = document.getElementById('tampil-nama')
const show6 = document.getElementById('tampil-umur')
const show7 = document.getElementById('tampil-keluhan')
const show8 = document.getElementById('tampil-gen')
const show9 = document.getElementById('tampil-bayar')
const show10 = document.getElementById('tampil-alergi')

show1.innerHTML = user
show2.innerHTML = email
show3.innerHTML = telp
show4.innerHTML = alamat
show5.innerHTML = nama
show6.innerHTML = umur
show7.innerHTML = keluhan
show8.innerHTML = gender
show9.innerHTML = bayar
show10.innerHTML = alergi