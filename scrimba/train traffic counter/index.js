let countNum = document.getElementById("count")
let addBtn = document.getElementById("add")
let saveBtn = document.getElementById("save")
let list = document.getElementById("list")
let status = document.getElementById("status")
let count = 0

function add() {
    count += 1
    countNum.textContent = count
    status.textContent = ""
}

function save() {
    list.textContent += count + " - "
    count = 0
    countNum.textContent = count
    status.textContent = "Salvo!"
}