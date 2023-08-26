alert('Click on the logo to go back to the home page')

const first = document.getElementById('fname')
const last = document.getElementById('lname')
const mail = document.getElementById('mail')
const number = document.getElementById('numb')
const locate = document.getElementById('locate')
const city = document.getElementById('city')
const state = document.getElementById('state')
const cname = document.getElementById('cname')
const cnumber = document.getElementById('cnumber')
const month = document.getElementById('month')
const cvv = document.getElementById('cvv')
const btn = document.querySelector('button')

function validate(){
    if (first.value.trim() === ''){
        alert('Enter your first name')
        return false
    }else if(last.value.trim() === ''){
        alert('Enter your last name')
        return false
    }else if(number.value.trim() === ''){
        alert('Enter your Phone number ')
        return false
    }else if(!(number.value.length === 11 )){
        alert('Incorrect Phone Number ')
        return false
    }else if(mail.value.trim() === ''){
        alert('Enter your email ')
        return false
    }else if(locate.value.trim() === ''){
        alert('Enter your address ')
        return false
    }else if(city.value.trim() === ''){
        alert('Enter your city')
        return false
    }else if(state.value.trim() === ''){
        alert('Enter your state')
        return false
    }else if(cname.value.trim() === ''){
        alert('Enter your card name')
        return false
    }else if(cnumber.value.trim() === ''){
        alert('Enter your card number')
        return false
    }else if(!(cnumber.value.length === 16)){
        alert('Incorrect card number')
        return false
    }else if(month.value.trim() === ''){
        alert('Enter the expiry month')
        return false
    }else if(cvv.value.trim() === ''){
        alert('Enter your cvv number')
        return false
    }else if(!(cvv.value.length === 3 || cvv.length === 4)){
        alert('Incorrect cvv')
        return false
    }else{
        alert(`Thank you for your purchase ${fname.value} ${lname.value}.\n Your Purchase will be come in the next 48 hours. \n Note: Refund is available between 48Hrs of purchase after 48hrs of purchase product can't be taken back.`)
    }
}

btn.addEventListener('click', validate)

const ham = document.getElementsByClassName('ham')[0]
const navbar = document.getElementsByClassName('navbar')[0]

ham.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})


