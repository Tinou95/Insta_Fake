document.addEventListener("DOMContentLoaded", () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if ( username == "Formget" && password == "formget#123"){
  alert ("Login successfully");
  window.location = "insta_page.html";
  return false;
  }

  });
  