// #### CLASS

class Person {
  constructor (name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  speak () {
    this.name = 'abc';
    console.log('My name is : ' + this.name);
  }

  eat (meal) {
    this.speak()
    console.log('I am current eating : ' + meal);
  }
}

class UniquePerson extends Person {
  constructor (name, age, height, skinColor, eyeColor) {
    super(name, age, height);
    this.skinColor = skinColor;
    this.eyeColor = eyeColor;
  }

  dance (meal) {
    this.eat(meal)
  }
}

const Ebot = new Person('Ebot', 20, 1.60);
Ebot.eat('Fufu and Eru');

const Max = new UniquePerson('Max', 20, 1.60, 'blue', 'yellow');
Max.dance('Rice  and stew');
