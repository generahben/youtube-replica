let signInButton = document.getElementById('signInButton')


signInButton.innerText = 'Sign Out'

signInButton.classList.add('bg-red-200', 'text-red-600')

//FUNCTION

function add(num1, num2) {
    console.log(num1 + num2)
}

function multiply(num1, num2) {
    console.log(num1 * num2)
}

add(13, 72)
add(15, 15)

multiply(2, 4)

//CONDITIONAL

//LOGCAL AND
// true && true = true
// true && false = false
// false && false = false
// false && true = false

//LOGCAL OR
// true || true = true
// true || false = true
// false || false = false
// false || true = true



























const M = 'male'
const F = 'female'

const bright = M
const david = F
const muiz = M
const joshua = F


if((bright == M) && ((david == M) || (muiz == M) && (joshua == M))) {
    
    console.log('Condition is true')
}