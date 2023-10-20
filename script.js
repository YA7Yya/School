let login = document.querySelector(".login");


function focusInput(){
  let input = document.querySelector(".username")
  setTimeout(() => {
    input.focus()
  }, 500);
}
login.addEventListener("click",() =>{
  Swal.fire(
    'Read Below !',
    '( This Message For System Management ) Make Login Form By Yours ',
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
    ' ( This Message For System Management ) You Can Make Login Form By Yours ',
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

function welcomeNotify() {
  Swal.mixin({
    toast: !0,
    position: "top-center",
    showConfirmButton: !1,
    timer: 3000,
    timerProgressBar: !0,
  }).fire({
    
    icon: "success",
    title: "Welcome Back ❤",
  })
}