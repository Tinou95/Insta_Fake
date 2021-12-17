document.addEventListener("DOMContentLoaded", () => {


  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
 


  
  const sign_in = () => {
 
  if ( email == "quentin@gmail.com" && password == "quentin#123"){
  alert ("Login successfully");
  window.location = "insta_page.html";
  return false;

  }
}





  })
  