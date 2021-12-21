document.addEventListener("DOMContentLoaded", () => {


    let souscrire = localStorage.getItem("user");
    
    let el = document.querySelector(".el")
    let el2 = document.querySelector(".el2")

    el.innerText += ` ${souscrire}`;
    el.style.color = "green";
    el2.innerText += ` ${souscrire}`;

  
});
     