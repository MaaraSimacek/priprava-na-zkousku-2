class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHello() {
        console.log(`Ahoj, jsem ${this.name} a je mi ${this.age} let.`)
    }
}
const zvire = new Animal('Žofka', 72)
console.log(zvire)
zvire.sayHello()


class Dog extends Animal {
    constructor(name, age, color, breed) {
        super(name, age)
        this.color = color
        this.breed = breed
    }

    bark() {
        console.log('Haf')
    }
}

const pes = new Dog('Dorča', 7, 'bílá', 'lagotto')
console.log(pes)
pes.sayHello()
pes.bark()


class Cat extends Animal {
    constructor(name, age, color, lifes) {
        super(name, age)
        this.color = color
        this.lifes = lifes
    }

    meow() {
        console.log('Mňau')
    }

    die() {
        this.lifes--
        console.log(`Zbývá mi ${this.lifes} životů.`)
    }

    sayHello() {
        console.log(`Čus, jsem ${this.name}, jsem ${this.color} kočka a mám ${this.lifes} životů.`)
    }

}

const kocka = new Cat('Mourek', 6, 'strakatá', 9)
console.log(kocka)
kocka.sayHello()
kocka.meow()
kocka.die()
kocka.die()
kocka.die()