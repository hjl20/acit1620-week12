
clickMeBtn = document.querySelector("#clickMe")

const alertUser = () => {
    alert("You clicked!")
    clickMeBtn.removeEventListener("click", alertUser)
}

clickMeBtn.addEventListener("click", alertUser)
