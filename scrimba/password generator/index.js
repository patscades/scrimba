let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let generate1 = []
let generate2 = []
let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generate() {
    generate1 = []
    generate2 = []
    for (let i = 0;i < 15;i++) {
        let random1 = Math.floor( Math.random() * characters.length )
        let random2 = Math.floor( Math.random() * characters.length )
        generate1.push(characters[random1])
        generate2.push(characters[random2]) 
    }
    render()
}

function render() {
    password1.textContent = generate1.join("")
    password2.textContent = generate2.join("")
}

