// let buffer = Buffer.alloc(4)
// let buffer = Buffer.from([1, 2, 3, 4])
let buffer = Buffer.from('como me les va')


// console.log(buffer)

let abc = Buffer.alloc(26)

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97
    
}

console.log(abc.toString())