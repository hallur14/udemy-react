var nameVar = 'Hallur';
nameVar = 'Lisa';
console.log('nameVar', nameVar);

let nameLet = 'Muggur';
nameLet = 'Natalia';
console.log('nameLet', nameLet);

const nameConst = 'Skuggi';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Hallur Olafsson';

if(fullName)
{
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
}

