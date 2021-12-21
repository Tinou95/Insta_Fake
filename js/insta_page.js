document.addEventListener("DOMContentLoaded", () => {


    let submit_log = localStorage.getItem("user");
    
    let el = document.querySelector(".el")
    let el2 = document.querySelector(".el2")

    el.innerText += ` ${submit_log}`;
    el.style.color = "green";
    el2.innerText += ` ${submit_log}`;

    localStorage.clear();
    sessionStorage.clear();
});
     