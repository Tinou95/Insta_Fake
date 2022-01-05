document.addEventListener("DOMContentLoaded", () => {


    const souscrire = localStorage.getItem("user");
    
    let element = document.querySelector(".element")
    let element2 = document.querySelector(".element2")

    element.innerHTML += `${souscrire}`;
    element.style.color = "green";
    element2.innerHTML += `${souscrire}`;

  
});
     