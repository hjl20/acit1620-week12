
clickMeBtn = document.querySelector("#clickMe")

const alertUser = () => {
    alert("You clicked!")
    // clickMeBtn.removeEventListener("click", alertUser)
}

clickMeBtn.addEventListener("click", alertUser, {once: true})


const pinkBackground = () => {
    document.body.classList.add("pink-bg")
}

const clickedText = () => {
    if (clickMeBtn.textContent == "Click Me!") {
        clickMeBtn.textContent = "clicked!"
    }
    else {
        clickMeBtn.textContent = "Click Me!"
    }
}

clickMeBtn.addEventListener("click", pinkBackground)
clickMeBtn.addEventListener("click", clickedText)
