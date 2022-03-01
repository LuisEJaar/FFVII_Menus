document.querySelector("#cloudC").style.order = "1"
document.querySelector("#barretC").style.order = "2"



const menuButton = document.querySelectorAll(".menuButton")
for (let button of menuButton) {
    button.addEventListener('click',defCurrentMenu)
}

let currentMenuItem = "item"

function defCurrentMenu (e) {
    currentMenuItem = e.target.id
}

const characterButton = document.querySelectorAll(".characterButton")
for (let button of characterButton) {
    button.addEventListener('click',defCurrentCharacter)
}

let currentCharacter = "cloud"

function defCurrentCharacter (e) {
    currentCharacter = e.target.id
    console.log(`Current Character is ${currentCharacter}`)
}

document.addEventListener("keydown",checking) 

function checking (e) {
    if(e.key === "Enter") {
        if (currentMenuItem === "item") {
            item()
        } else if (currentMenuItem === "magic") {
            magic()
        } else if (currentMenuItem === "equip") {
            equip()
        } else if (currentMenuItem === "status") {
            statusM()
        } else if (currentMenuItem === "order") {
            order()
        } else if (currentMenuItem === "limit") {
            limit()
        } else if (currentMenuItem === "config") {
            config()
        } else if (currentMenuItem === "save") { 
            save()
        } else {
            quit()
        }
    }
}

function item () {
    console.log("user hit enter on item")
}

function magic () {
    console.log("user hit enter on magic")
}

function equip () {
    console.log("user hit enter on equip")
}

function statusM () {
    console.log("user hit enter on status")
}

function order () {
    //disable main menu
    const fieldset = document.querySelector('.menuFieldset')
    fieldset.disabled = true;
    //make the config pointer blink
    const configPointer = document.querySelector('.configPointer')
    configPointer.classList.add("activeMenu")
    //show the pointer to the left
    const orderChange = document.querySelector('.orderChange')
    orderChange.style.display = "block" 
    //listen for enter key

    document.addEventListener("keydown",toggleOrder) 
    //toggle class for order
    
    let firstSelect = "";
    function toggleOrder (e) {
        //when you select a character during order it should leave the pointer blinking
        if (e.key === "c" && firstSelect === ""){
            firstSelect = currentCharacter
            const orderPointer = document.querySelector(`.${currentCharacter}TempPointer`)
            orderPointer.classList.toggle("activeMenu")
            orderPointer.classList.toggle("tempPointer")
        //if you select the same
        } else if(e.key === "c" && firstSelect === currentCharacter) {
            document.querySelector(`.${currentCharacter}Picture`).classList.toggle("bck")

            const orderPointer = document.querySelector(`.${currentCharacter}TempPointer`)
            orderPointer.classList.toggle("activeMenu")
            orderPointer.classList.toggle("tempPointer")
            firstSelect = ""
        //if you select different
        } else if (e.key === "c" && firstSelect !== currentCharacter) {
        //change the order
            //change the order of the character boxes
            const firstOrder = document.getElementById(`${firstSelect}C`)
            const currentOrder = document.getElementById(`${currentCharacter}C`)
            let placeholder = firstOrder.style.order
            firstOrder.style.order = currentOrder.style.order
            currentOrder.style.order = placeholder

            //change the order of the associated radio inputs
            const firstOrderPointer = document.getElementById(`${firstSelect}Pointer`)
            const currentOrderPointer = document.getElementById(`${currentCharacter}Pointer`)
            firstOrderPointer.style.order = firstOrder.style.order
            currentOrderPointer.style.order = currentOrder.style.order

            //remove the flashing finger from the previous first selection
            const orderPointer = document.querySelector(`.${firstSelect}TempPointer`)
            orderPointer.classList.toggle("activeMenu")
            orderPointer.classList.toggle("tempPointer")
            
            //check the radio input of the second selected item
            document.querySelector(`#${firstSelect}`).checked = true
            currentCharacter = firstSelect
            firstSelect = ""
            console.log(currentCharacter)
        }
        //if you hit escape
        else if (e.key === "Escape") {
            orderChange.style.display = "none"
            fieldset.disabled = false;
            configPointer.classList.remove("activeMenu")
        } 
    }
}

function limit () {
    console.log("user hit enter on limit")
}

function config () {
    
    console.log("user hit enter on config")
}

function save () {
    console.log("user hit enter on save")
}

function quit () {
    console.log("user hit enter on quit")
}