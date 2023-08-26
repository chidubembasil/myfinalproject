alert('Please sign in if your have an account else sign up')

// sign up
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const pin = document.getElementById('pin')
const pin1 = document.getElementById('pin1')
const mail = document.getElementById('email')
const btn = document.querySelector('button')

function signing(){
    if(fname.value.trim() === ''){
        alert('Enter your first name')
        return false
    }else if(lname.value.trim() === ''){
        alert('Enter your last name')
        return false
    }else if(pin.value.trim() === ''){
        alert('Enter your paswword')
        return false
    }else if(pin1.value.trim() === ''){
        alert('Enter your paswword')
        return false
    }else if(!(pin1.value.trim() === pin.value.trim()) ){
        alert('Passwords are not the same')
        return false
    }else if(mail.value.trim() === ''){
        alert('Enter your email')
        return false
    }else{
        alert('Your details have been saved')
    }

}

// sign in
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const password = document.getElementById('password')

function loging(){
    if(firstName.value.trim() === ''){
        alert('Enter your first name')
        return false
    }else if(lastName.value.trim() === ''){
        alert('Enter your last name')
        return false
    }else if(password.value.trim() === ''){
        alert('Enter your paswword')
        return false
    }else{
        alert(`Welcome back ${firstName.value} `)
    }

}
// sign in and sign up page
const signup = document.getElementById('form1')
const signin = document.getElementById('form2')
const sign1 = document.getElementById('sign1')
const sign2 = document.getElementById('sign2')

function chooseOne(){
    signin.style.display = 'none'
    signup.style.display = 'block'
}
sign1.addEventListener('click', chooseOne)

function chooseTwo(){
    signup.style.display = 'none'
    signin.style.display = 'block'
}
sign2.addEventListener('click', chooseTwo)

// hamburger toggle
const ham = document.getElementsByClassName('ham')[0]
const navbar = document.getElementsByClassName('navbar')[0]

ham.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})

