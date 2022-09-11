const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);


const printProfileData = (profileDataArr) => {
  console.log(profileDataArr);
};

printProfileData(profileDataArgs);

// Using function expression syntax
const addNums = function(numOne, numTwo) {
  return numOne + numTwo;
};

// Using new arrow function syntax
const addNums = (numOne, numTwo) => {
  return numOne + numTwo;
};
