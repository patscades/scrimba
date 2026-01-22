const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")

const conversionL = document.getElementById("l-conversion")
const conversionV = document.getElementById("v-conversion")
const conversionM = document.getElementById("m-conversion")

function mFt(m) {
    m = inputEl.value
    const sum = m * 3.204 
    return sum.toFixed(1)
}

function ftM(ft) {
    ft = inputEl.value
    const sum = ft * 0.304
    return sum.toFixed(1)
}

function lG(l) {
    l = inputEl.value
    const sum = l * 0.26 
    return sum.toFixed(1)
}

function gL(g) {
    g = inputEl.value
    const sum = g * 3.78 
    return sum.toFixed(1)
}

function kgLb(kg) {
    kg = inputEl.value
    const sum = kg * 2.2 
    return sum.toFixed(1)
}

function lbKg(lb) {
    lb = inputEl.value
    const sum = lb * 0.45 
    return sum.toFixed(1)
}


function render() {
    conversionL.innerHTML = `${inputEl.value} meters = ${mFt(inputEl.value)} feet | ${inputEl.value} feet = ${ftM(inputEl.value)} meters`

    conversionV.innerHTML = `${inputEl.value} liters = ${lG(inputEl.value)} gallons | ${inputEl.value} gallons = ${gL(inputEl.value)} liters`

    conversionM.innerHTML = `${inputEl.value} kilos = ${kgLb(inputEl.value)} pounds | ${inputEl.value} pounds = ${lbKg(inputEl.value)} kilos`
}

btnEl.addEventListener("click", function() {
    render()
})