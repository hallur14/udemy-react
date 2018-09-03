// arguement object - no longer bound with arrow functions

const add = (a, b) => {
  return a + b;
}

// this keyword - no longer bound

const user = {
  name: 'Hallur',
  cities: ['Rvk', 'NYC', 'Akureyri'],
  printPlacesLived(){
    const cityMessages = this.cities.map((city) => {
      return city;
    });
    return cityMessages;
  }
}

console.log(user.printPlacesLived());

const multiplier = {
  numbers : [1, 2, 3, 4, 5],
  multiplyBy : 1138,

  multiply(){
    return this.numbers.map((num) => num * this.multiplyBy);
  }


  // multiplyBy - single number
  // multiply - return a new array where the numbers have been multiplied


}

console.log(multiplier.multiply());