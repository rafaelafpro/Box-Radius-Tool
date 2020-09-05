const box = document.querySelector(".box")

const topLeftXInput = document.querySelector("#top-left-x")
const topLeftYInput = document.querySelector("#top-left-y")

const topRightXInput = document.querySelector("#top-right-x")
const topRightYInput = document.querySelector("#top-right-y")

const bottomRightXInput = document.querySelector("#bottom-right-x")
const bottomRightYInput = document.querySelector("#bottom-right-y")

const bottomLeftXInput = document.querySelector("#bottom-left-x")
const bottomLeftYInput = document.querySelector("#bottom-left-y")

let topLeftX = topLeftXInput.value
let topLeftY = topLeftYInput.value

let topRightX = topRightXInput.value
let topRightY = topRightYInput.value

let bottomRightX = bottomRightXInput.value
let bottomRightY = bottomRightYInput.value

let bottomLeftX = bottomLeftXInput.value
let bottomLeftY = bottomLeftYInput.value


function render(){
    box.style.borderRadius = `${topLeftX}% ${topRightX}% ${bottomRightX}% ${bottomLeftX}% / ${topLeftY}% ${topRightY}% ${bottomRightY}% ${bottomLeftY}%`    
}

render()

topLeftXInput.addEventListener("mousemove", ()=> {
    topLeftX = topLeftXInput.value
    render()
})

topLeftYInput.addEventListener("mousemove", ()=> {
    topLeftY = topLeftYInput.value
    render()
})

topRightXInput.addEventListener("mousemove", ()=> {
    topRightX = topRightXInput.value
    render()
})

topRightYInput.addEventListener("mousemove", ()=> {
    topRightY = topRightYInput.value
    render()
})


bottomRightXInput.addEventListener("mousemove", ()=> {
    bottomRightX = bottomRightXInput.value
    render()
})

bottomRightYInput.addEventListener("mousemove", ()=> {
    bottomRightY = bottomRightYInput.value
    render()
})


bottomLeftXInput.addEventListener("mousemove", ()=> {
    bottomLeftX = bottomLeftXInput.value
    render()
})

bottomLeftYInput.addEventListener("mousemove", ()=> {
    bottomLeftY = bottomLeftYInput.value
    render()
})