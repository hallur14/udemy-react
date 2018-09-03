const square = function (x){
  return x * x;
};

// const squareArrow = (x) => {
//   return x * x; 
// }

const squareArrow = (x) => x * x;

console.log(squareArrow(94));

const nameHallur = 'Hallur Olafsson';
const nameLisa = 'Lisa Feierstein';

const getFirstName = fullName => {
  return fullName.split(' ')[0];
}

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstName(nameHallur));
console.log(getFirstNameArrow(nameLisa));