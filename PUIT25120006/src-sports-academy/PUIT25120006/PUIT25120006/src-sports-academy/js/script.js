
document.addEventListener("DOMContentLoaded", () => {

    let visits = localStorage.getItem("visits");

    if(!visits){
        visits = 0;
    }

    visits++;

    localStorage.setItem("visits", visits);

    const counter = document.getElementById("counter");

    if(counter){
        counter.innerHTML = "Visitors: " + visits;
    }

});
