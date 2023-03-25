const newEmail = document.getElementById('newEmail')
const newTelp = document.getElementById('newTelp')
const newUser = document.getElementById('newUser')
const newPass = document.getElementById('newPass')
const datauser = []

    form.addEventListener('submit', function (a) {
        a.preventDefault()

        datauser.push ({
            Email: newEmail.value,
            Telp: newTelp.value,
            User: newUser.value,
            Pass: newPass.value
        })

    // Ubah ke String
    let ubahString = JSON.stringify(datauser)
    localStorage.setItem('user', ubahString)

    alert('Akun anda sudah terdaftar, silahkan ke Halaman Login')
    window.location.href = 'a_login.html'
})