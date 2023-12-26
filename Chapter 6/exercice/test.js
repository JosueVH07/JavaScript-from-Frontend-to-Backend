var fs = require('fs')
var colors = require('colors')

var mod1 = require('module1')
console.log('mod1 =', mod1)

var total = mod1.add(1, 28)
console.log('total = ', total)

var totalMult = mod1.mult(2, 28)
console.log('total multiplication = ', totalMult)

var data = fs.readFileSync('file1.txt', 'utf-8')
console.log('File content: ', data)


fs.readFile('file1.txt', 'utf-8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log('data: ', data)
    }
})

console.log('colors = ', colors)