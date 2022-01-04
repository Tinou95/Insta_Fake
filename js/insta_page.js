document.addEventListener("DOMContentLoaded", () => {


    const souscrire = localStorage.getItem("user");
    
    let element = document.querySelector(".el")
    let element2 = document.querySelector(".el2")

    element.innerHTML += `${souscrire}`;
    element.style.color = "green";
    element2.innerHTML += `${souscrire}`;

  
});
     