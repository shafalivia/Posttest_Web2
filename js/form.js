const nama = document.getElementById('nama')
const user = document.getElementById('user')
const email = document.getElementById('email')
const telp = document.getElementById('telp')
const alamat = document.getElementById('alamat')
const umur = document.getElementById('umur')
const keluhan = document.getElementById('keluhan')

const alergi = document.getElementById('alergi') //Textarea
const select = document.getElementById('select') //Select

//Radio
const gender = document.getElementsByName('gender') 
const pilihgen = Array.from(gender).find((radio) => radio.checked)

const dataform = []

form.addEventListener('submit', function(a) {
    a.preventDefault()

    dataform.push ({
        Nama : nama.value,
        User : user.value,
        Email : email.value,
        Telp : telp.value,
        Alamat : alamat.value,
        Umur : umur.value,
        Keluhan : keluhan.value,
        Gender : pilihgen.value,
        Alergi : alergi.value,
        Select : select.value
    })

    let ubahString = JSON.stringify(dataform)
    sessionStorage.setItem('form', ubahString)

    alert('Tiket pasien telah dibuat.')
    window.location.href = 'hasilform.html'
})   