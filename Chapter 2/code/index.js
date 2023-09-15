//**CLass */

class Person {

}

var p = new Person()
console.log(p)

var p2 = {
    lastname: 'Nguyen',
    firstname: 'Van',
    sayHello() {
        return  console.log('Hello ' + this.firstname + ' ' + this.lastname)
    }
}

p2.sayHello()

var p3 = {
    firstname: 'Van',
    lastname: 'Nguyen',
    display() {
        console.log("The persons last name = " + this.lastname)
    }
}

console.log(p3)
p3.lastname = 'Tran'
p3.display()
console.log(p3)

class Person2 {
    lastname = ''
    name = ''
    age = 0

    constructor(lastname, name, age) {
        this.lastname = lastname
        this.name = name
        this.age = age
    }

    display() {
        console.log(
            'The person name = ' + this.name + ' ' + this.lastname + ' ' + this.age
        )
    }
}

var p = new Person2('Nguyen', 'Van', 20)
 console.log(
        'Before The person name = ' + p.name + ' ' + p.lastname + ' ' + p.age
 )
 p.display()

var p6 = p
p6.city = 'HCM'

console.log(
    'After The person name = ' + p.name + ' ' + p.lastname + ' ' + p.age + ' ' + p.city
)

var p7 = {...p, country: 'Vietnam'}
console.log(p7)
