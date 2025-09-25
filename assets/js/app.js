// let signInButton = document.getElementById('signInButton')

// signInButton.innerText = 'Sign Out'
// signInButton.classList.add('bg-red-200', 'text-red-600')

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

// const davidUncle = 'small man'

// switch (davidUncle) {
//     case 'small boy':
//         console.log('David uncle is a small boy')
//         break;
//     case 'medium boy':
//         console.log('David uncle is a medium boy')
//         break;
    
//     case 'big boy':
//         console.log('David uncle is a big boy')
//         break;

//     default:
//         console.log('David uncle is a girl')
//         break;
// }


// if (davidUncle == 'small boy') {
//     console.log('David uncle is a small boy')
// } else if(davidUncle == 'medium boy') {
//     console.log('David uncle is a medium boy')
// } else if(davidUncle == 'big boy') {
//     console.log('David uncle is a big boy')
// } else {
//     console.log('David uncle is animal')
// }




// if (davidUncle == 'medium boy') {
//     console.log('David uncle is a medium boy')
// }

// if (davidUncle == 'big boy') {
//     console.log('David uncle is a big boy')
// }

//LOOP
let spanElements = document.getElementsByTagName('span');

console.log(typeof spanElements)

// spanElements.forEach(span => {
//     span.classList.add('text-yellow-600')
// });

// for (let index = 0; index < spanElements.length; index++) {
    
//     const element = spanElements[index];

//     element.classList.add('text-yellow-600')
    
// }



//EVENT LISTENERS
// signInButton.addEventListener('click', () => {
//     alert('Are you sure you want to logout?')

//     signInButton.innerText = 'Sign In'
//     signInButton.classList.remove('bg-red-200', 'text-red-600')
// })

let navIcon = document.getElementById('nav-icon')

navIcon.addEventListener('mouseover', () => {
    const navElement = document.getElementsByTagName('nav')

    navElement[0].classList.toggle('hidden')
})

let signInButton = document.getElementById('signInButton')
const dialogElement = document.getElementById('loginForm')

signInButton.addEventListener('click', () => {

    console.log(dialogElement.getAttribute('open'))

    dialogElement.showModal()
})

document.getElementById('closeLoginForm').addEventListener('click', () => {
    dialogElement.close()
})