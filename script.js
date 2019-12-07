;;
"use strict"

/* Дано К1, E(R0) - random
* Вывести XOR(K1+E(R0)) */

function print(arr) {
    let str = ''
    arr.forEach((e, index) => {
        if (((index) % 6 == 0) && index != 0) str += ' ' + e
        else str += e
    });
    console.error(str)
    return str
}

// K1 - random 48 bit
let K1Arr = []
let K1 = ''

while (K1Arr.length < 48) {
    K1Arr.push(Math.round(Math.random()))
}
K1 = K1Arr.join('')

console.group('K1')
console.log('K1Arr', K1Arr)
console.log('K1', K1)
console.log('K1.length', K1.length)
console.groupEnd()

// ER0 - random 48 bit
let ER0Arr = []
let ER0 = ''

while (ER0Arr.length < 48) {
    ER0Arr.push(Math.round(Math.random()))
}
ER0 = ER0Arr.join('')

console.group('ER0')
console.log('ER0Arr', ER0Arr)
console.log('ER0', ER0)
console.log('ER0.length', ER0.length)
console.groupEnd()

// TEST
// K1 = '000110110000001011101111111111000111000001110010'
// ER0 = '011110100001010101010101011110100001010101010101'

// XOR

let i = 0
let XORArr = []
let XOR = ''
while (i < K1.length) {
    XORArr.push((K1[i] ^ ER0[i]))
    i++
}
i = 0




console.group('XOR')
console.log('XORArr', XORArr)
console.log('XORArr.length', XORArr.length)
console.log('XOR', XOR)
console.groupEnd()

document.getElementById('K1').innerHTML = print(K1Arr)
document.getElementById('E(R0)').innerHTML = print(ER0Arr)
document.getElementById('XOR(K1, E(R0))').innerHTML = print(XORArr)

// 011000 010001 011110 111010 100001 100110 010100 100111