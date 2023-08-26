const fname = document.getElementById('fname')
const mail = document.getElementById('mail')
const numb = document.getElementById('tel')
const message = document.getElementById('message')
const btn = document.getElementById('btn3')

function validate(){
    if(fname.value.trim() === ''){
        alert('Please enter your name')
        return false
    }else if(mail.value.trim() === ''){
        alert('Please enter your email')
        return false
    }else if(numb.value.trim() === ''){
        alert('Please enter your phone number')
        return false
    }else if(message.value.trim() === ''){
        alert('Please enter a message')
        return false
    }else{
        alert(`Thank you for your response ${fname.value}. Your message has been received`)
    }
}

const ham = document.getElementsByClassName('ham')[0]
const navbar = document.getElementsByClassName('navbar')[0]

ham.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})

