//=============================Метод объекта==================================

// 1. Метод объекта

// способы создания метода объекта
// const user = {
//     name: 'Alex',
//     age: 32,
//     //  1й способ
//     sayHi() {
//         return `все привет, меня зовут ${this.name}`
//     },
//     getAge(){
//         return `мой возраст ${this.age} года`
//     }
//     //  2й способ
//     // sayHi: function (){
//     //     return 'все привет'
//     // }
// }

//  3й способ
// user.sayHi = function () {
//     return "всем привет"
// }

//  4й способ
// function sayHi() {
//     return 'всем привет'
// }
// user.sayHi = sayHi

//  5й способ
// const sayHi = function (){
//     return 'всем привет'
// }
// user.sayHi = sayHi

// console.log(user.sayHi())
// console.log(user)

//=============================this==================================

// this -  контекст вызова. Равен глобальному оъекту/

// Что это такое?
// this - это обьект перед точкой, в момент вызова

// Какой тип данных?
// зачастую это объект

// Чему равен?
// console.log(this === global) -  в Node.js => global
// console.log(this === window) -  в браузере => window

// для чего это?
const user = {
    name: 'Alex',
    age: 32,
    sayHi() {
        return `все привет, меня зовут ${this.name}`
    },
    getAge(inc1, inc2) {
        return `мой возраст ${this.age + inc1 + inc2} года`
    },
    getFullInfo() {
        return `Имя: ${this.name}, Возраст: ${this.age}`
    }
}
user.getUser = function () {
    return this
}

const user1 = {
    name: 'Dima',
    age: 23
}
// console.log(user.sayHi.call(user1))


// console.log(user.getUser())
// console.log(user.sayHi())
// console.log(user.getAge())

// доказательство что это такое


//=============================call, bind, apply==================================

// что за методы?    методы функций
// для чего нужны?
// что принимают в качестве параметров?

// call
// console.log(user.getAge.call(user1, 10, 10)) //принимает пареметры числа через запятую

// разница между call -vs- apply

// apply
// console.log(user.getAge.apply(user1, [10, 10]))  // принимает параметром массив

// bind
// console.log(user.getFullInfo())
// const userFullInfo = user.getFullInfo.bind(user1, 10)
// const userFullInfo = user.getAge.bind(user1, 12,1)
// console.log(userFullInfo())

//=============================Случаи потери контекста==================================
const cat = {
    type: 'british',
    method1: () => this.type,
    method2: function () {
        const fn = () => this.type
        return fn()
    }
}
// console.log(cat.method2())  //  british

const arrow1 = () => {
    return this.type
}
const arrow2 = function () {
    return this.type
}
// console.log(arrow1.call(cat))  //  undefined
// console.log(arrow2.call(cat))  // british

//=============================Функция-конструктор==================================

// Функция-конструктор

// для чего нужна

// Правила при работе с функцией конструктор
// 1. имя функции начинается с большой буквы
// 2. при её вызове использовать ключевое слово new

// Базовая запись
// function Person(name, age, isMan = true) {
//     this.name = name
//     this.age = age
//     this.isMan = isMan
// }

// работа под капотом
// function Person(name, age, isMan) {
//     obj = {}
//     obj.name = name
//     obj.age = age
//     obj.isMan = isMan
//     return obj
// }

// const person1 = new Person('Alex', 32, )
// const person2 = new Person('Dima', 35, true)
// const person3 = new Person('Dasha', 25, false)
// console.log(person1)
// console.log(person2)
// console.log(person3)

// Разница по сравнению с обычной функцией (что возвращают)
// function car(){
//     return 123  // 123
// }
// function Car(){
//     return 123   //  Car {}
// }
// const car1 = car()
// const car2 = new Car()
// console.log(car1)  // 123
// console.log(car2)  //  Car {}
// Что делать, если нужно добавить свойство?


// ---------------------------------- Задачи -----------------------------------------------


// 1. Создайте объект car, у которого есть свойство brand и метод getBrand,
// который выводит название марки машины.
// Вызовите метод getBrand как метод объекта car.

// const car = {
//     brand: 'BMW',
//     getBrand(){
//         return this.brand
//     }
// }
// console.log(car.getBrand())

// 2. Создайте объект counter, у которого есть свойство count и методы increment, decrement и reset,
// которые увеличивают, уменьшают, зануляют (сбрасывает) значение счетчика соответственно.
// Используйте ключевое слово this для обращения к свойству count.

// const counter={
//     count: 0,
//     increment(){
//         return ++this.count
//     },
//     decrement(){
//         return this.count --
//     },
//     reset(){
//         return this.count = 0
//     }
// }
//
// console.log(counter.increment())
// console.log(counter.decrement())
// console.log(counter.reset())


// 3. Создайте объект person, у которого есть свойства name и age.
// Создайте метод greet, который выводит сообщение с именем и возрастом персоны.
// Используйте метод bind для создания новой функции,
// которая будет связывать значение this с объектом person.

const person = {
    name: 'Alex',
    age: 32,
}

function greet() {
    return `Меня зоову ${this.name} и мне ${this.age} года`
}

const personGreet = greet.bind(person)
console.log(personGreet())

// 4. Создайте объект calculator, у которого есть свойства x и y и методы сложения и умножения этих чисел.
// Создайте другой объект user, у которого есть свойства a и b.
// Используйте метод call или apply для вызова методов объекта calculator с аргументами из объекта user.

const calculator = {
    x: 5,
    y: 2,
    sum(){
        return this.x + this.y
    },
    mul(){
        return this.x * this.y
    }
}

const user2={
    x: 20,
    y: 50
}

// console.log(calculator.sum.call(user2))

