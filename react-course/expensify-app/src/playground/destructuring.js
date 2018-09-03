// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'NYC',
//     temp: 90
//   }
// };

// const { name, age } = person;

// console.log(`${name} is ${age}`);

// const book = {
//   title: 'Pepperoni book',
//   author: 'Sverrinzki Sigurdsson',
//   publisher: {
//     name: 'Pingu'
//   }
// };

// const { title, author} = book;
// const { name: publisher } = book.publisher;

// console.log(`${title} is a great book by ${author}, published by ${publisher}`);

const address = ['333 S Pepperoni Street', 'Philly', 'Transilvania', '10002'];


const [street, city, state, zip] = address;
console.log(`You are in ${city} ${state}` );

