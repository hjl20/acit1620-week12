
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

// clickMeBtn.addEventListener("click", () => {
//     bodyTag = document.querySelector("body")
    
//     newBtn = document.createElement("button")
//     newBtnText = document.createTextNode("purple")
//     newP = document.createElement("p")
//     newPText = document.createTextNode("SOME TEXT HERE")

//     newBtn.classList.add("newBtn")
//     newBtn.appendChild(newBtnText)
//     newP.classList.add("newP")
//     newP.appendChild(newPText)

//     bodyTag.appendChild(newBtn)
//     bodyTag.appendChild(newP)

// })

// clickMeBtn.addEventListener("mouseover", e => {
//     console.
//     if (e.target.classList.includes("newBtn") || e.target.classList.includes("newP")) {
//         e.target.classList.toggle("green-bg")
//     } 

// })

const buttonContainer = document.querySelector(".button-container")

const changeBGGreen = e => {
    if (e.target.tagName === "BUTTON") {
        e.target.classList.toggle("green-bg")
    }
}

const changeBtnColor = e => {
    if (e.target.tagName === "BUTTON") {
        switch (e.target.textContent) {
            case "red":
                e.target.classList.toggle("red-color")
                break
            case "blue":
                e.target.classList.toggle("blue-color")
                break
            case "white":
                e.target.classList.toggle("white-color")
                break
            case "yellow":
                e.target.classList.toggle("yellow-color")
                break
            default:
                console.log(e.target)
                break
        }
    }
}

buttonContainer.addEventListener("mouseover", changeBGGreen)
buttonContainer.addEventListener("click", changeBtnColor)
