class Person {
  constructor (name = 'Anonymous', age = 0){
    this.name = name;
    this.age = age;
  }

  getGreeting(){
    return `Hi, I am ${this.name}.`;
  }

  getDescription(){
   return `${this.name} is ${this.age} years old and he is kewl!`
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name , age);
    this.major = major;
  }

  hasMajor(){
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    
    if(this.hasMajor()){
      description += ` Their major is ${this.major}.`
    } 
    return description;
  }
}

// Add support for home Location
// Override getGreeting
// If there is home location return  Hi. Iam Hallur, I'm visiting from {home location}
// If it does not exist say Hi. I am Hallur.

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting(){
    let greeting = super.getGreeting();
    
    if(!!this.homeLocation){
      greeting += ` I am from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Traveler('Hallur Olafsson', 28, 'Reykjavik');
const other = new Traveler();

console.log(me.getGreeting());
console.log(other.getGreeting());