let login = document.querySelector(".login")
function focusInput(){
  let input = document.querySelector(".username")
  setTimeout(() => {
    input.focus()
  }, 500);
}
login.addEventListener("click",() =>{
  Swal.fire(
    'Read Below !',
    'You Can Make Login Form By Yours Because I Have Not Learnt PHP ( This Message For System Management )',
    'error'
  )
})
let contactButton = document.querySelector(".contactButton")
function contactFocus(){
  let input = document.querySelector(".contactFocus")
  setTimeout(() => {
    input.focus()
  }, 500);
}
contactButton.addEventListener("click",() =>{
  Swal.fire(
    'Read Below !',
    'You Can Make Login Form By Yours Because I Have Not Learnt PHP ( This Message For System Management )',
    'error'
  )
})


  // Run on page load
  window.onload = function () {
        
    // If localStorage is storing default values (ex. name), exit the function and do not restore data
    // if (localStorage.getItem('username') == "username") {
    //   return;
    // }




    var username = localStorage.getItem('username');
    if (username !== null) $('.username').val(username);

    var password = localStorage.getItem('password');
    if (password !== null) $('.password').val(password);

    
  }


  window.onbeforeunload = function () {

    localStorage.setItem("username", $('.username').val());
    localStorage.setItem("password", $('.password').val());
  
  }
  function myFunction() {
  var show = document.getElementById("myInput");
  if (show.type === "password") {
      show.type = "text";
  } else {
      show.type = "password";
  }
}

