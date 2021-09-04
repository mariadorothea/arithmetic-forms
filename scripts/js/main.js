const addNums = () => {
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    const sum = parseInt(num1) + parseInt(num2)
    document.getElementById('result1').innerHTML = sum
}

const btnAdd = document.getElementById('add')

btnAdd.addEventListener('click', addNums)

const multiplyNums = () => {
    const num3 = document.getElementById('num3').value
    const num4 = document.getElementById('num4').value
    const multiply = num3 * num4
    document.getElementById('result2').innerHTML = multiply
}

const btnMultiply = document.getElementById('multiply')
btnMultiply.addEventListener('click', multiplyNums)

const divideNums = () => {
    const num5 = document.getElementById('num5').value
    const num6 = document.getElementById('num6').value
    const divide = num5 / num6
    document.getElementById('result3').innerHTML = divide
}

const btnDivide = document.getElementById('divide-float')
btnDivide.addEventListener('click', divideNums)

const divideNumsFixed = () => {
    const num7 = document.getElementById('num7').value
    const num8 = document.getElementById('num8').value
    const divideFixed = (num7 / num8).toFixed(2)
    document.getElementById('result4').innerHTML = divideFixed
}

const btnDivideFixed = document.getElementById('divide-fixed')
btnDivideFixed.addEventListener('click', divideNumsFixed)

const subtractNums = () => {
    const num9 = document.getElementById('num9').value
    const num10 = document.getElementById('num10').value
    const subtract = num9 - num10
    document.getElementById('result5').innerHTML = subtract
}

const btnSubtract = document.getElementById('subtract')
btnSubtract.addEventListener('click', subtractNums)

const leftOver = () => {
    const num11 = document.getElementById('num11').value
    const num12 = document.getElementById('num12').value
    const modulo = num11 % num12
    document.getElementById('result6').innerHTML = modulo
}

const btnModulo = document.getElementById('modulo')
btnModulo.addEventListener('click', leftOver)

const btnReset = document.querySelector('.clear-field')

function clearFields() {
    window.location.reload()
}

btnReset.addEventListener('click', clearFields)
