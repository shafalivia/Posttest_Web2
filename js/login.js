const form = document.getElementById('form')
const inuser = document.getElementById('inUser')
console.log(inuser.value)
const inpass = document.getElementById('inPass')

form.addEventListener("submit", function(a){
    a.preventDefault()
    
    let ambil = localStorage.getItem('user')
    let objuser = JSON.parse(ambil)

    const loc_user = objuser.map(i => i.User)
    const loc_pass = objuser.map(i => i.Pass)

    if(inuser.value ==  loc_user && inpass.value == loc_pass){
        alert('Yey Login')
        window.location.href = 'a_userhome.html'
    } else{
        alert('Akun tidak ada')
    }
})