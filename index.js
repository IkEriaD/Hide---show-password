const eyeicon = document.querySelector('.eyeicon');
const password = document.querySelector('.password');

// eyeicon.addEventListener('click', (e) => {
//   eyeicon.onclick = function() {
//   if(password.type == 'password') {
//     password.type = 'text';
//     this.classList.toggle('fa-eye');
//   } else {
//     password.type = 'password';
//     this.classList.toggle('fa-eye');
//   }
// }
// })

// OR this..... . ... ... ...

eyeicon.onclick = function() {
  if(password.type == 'password') {
    password.type = 'text';
    this.classList.toggle('fa-eye');
  } else {
    password.type = 'password';
    this.classList.toggle('fa-eye');
  }
}