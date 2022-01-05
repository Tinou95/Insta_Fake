document.addEventListener("DOMContentLoaded", () => {


  const exprEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
  const exprPassword = /^[a-zA-Z0-9._-]{2,20}$/

  const functionForm = () => {

    


    let affiche = document.querySelector(".warnOrSucces")
    let email = document.querySelector("#email")
    let emaill = " votremail@gmail.com"
    let password = document.querySelector("#password")
 
  
      if (exprEmail.test(email.value) && exprPassword.test(password.value)) {
          affiche.classList.add("reussi")
          affiche.classList.remove("echec")
          affiche.innerText = "Connection réussie"
          localStorage.setItem("user", emaill) 
          sessionStorage.setItem("user", "sessionid")
          document.location.assign("insta_page.html")

      }
      else if (!exprEmail.test(email.value) ) {
          affiche.classList.add("echec")
          affiche.innerText = "Mail invalide"
          affiche.classList.remove("reussi")
      } else if (!exprPassword.test(password.value)) {
          affiche.classList.add("echec")
          affiche.innerText = "Mot de passe invalide"
          affiche.classList.remove("reussi")
      } else {
          affiche.classList.add("echec")
          affiche.innerText = "Mail et mot de passe incorrecte"
          affiche.classList.remove("reussi")
      }
  
  }


  let button = document.querySelector("#rgstr_btn")
  button.addEventListener("click", (e) => {
    e.preventDefault();
    functionForm();
});





  })
  