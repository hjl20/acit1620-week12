
clickMeBtn = document.querySelector("#clickMe")

const alertUser = () => {
    alert("You clicked!")
    // clickMeBtn.removeEventListener("click", alertUser)
}

// clickMeBtn.addEventListener("click", alertUser, {once: true})


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

clickMeBtn.addEventListener("click", () => {
    img = document.querySelector("#shoppingCart")
    img.setAttribute("src", "images/shoppingCart.png")
    img.setAttribute("alt", "shopping cart")
    img.setAttribute("width", 150)
    img.setAttribute("height", 150)
})
