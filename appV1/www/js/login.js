// screen.orientation.onchange = function() {
//     console.log(screen.orientation.type);
// };

document.addEventListener("deviceready", onDeviceReady, false);

function onClickButton() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (!(email.value === "admin" && password.value == "admin")) {
    window.location.assign("home.html");
  } else {
    alert("something wrong please try again");
  }
}

function onDeviceReady() {
  window.screen.orientation.lock("portrait");
}
