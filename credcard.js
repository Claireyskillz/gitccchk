// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

//function to check if an individual credit card number is valid
 const validateCred = (cardNo) => {

  let reversedArray = cardNo.reverse();

//console.log('reversed Array' + reversedArray);
  const oddIndex = [];
  const sumArray = [];

    const sortOdds = (num) => {
    if (num*2 < 9) {
    sumArray.push(num*2)
    } else  {
    sumArray.push((num*2)-9)
    }
  };

  for (let i=0; i<cardNo.length; i++) {
     
    if ((i)%2==1) {
    oddIndex.push(reversedArray[i]);
    } else if ((i)%2==0) {
    sumArray.push(reversedArray[i]);
    }
  };

// console.log('even indices (straight to sumArr) = ' + sumArray);
// console.log('odd indices = ' + oddIndex);

  oddIndex.forEach(sortOdds);

// console.log('Sum array total(with processed odds) = ' + sumArray);


//total of the numbers in sumArray
  const sum = sumArray.reduce((total, amount) => total + amount); 

//console.log('Sum of sumArray' + sum);

//modulocalc
    const moduloCalc = (sum) => {
      if (sum % 10 == 0 ) {
        //console.log(true)
        return true;
      } else {
       //console.log(false)
       return false;
      }
    };
    return moduloCalc(sum);
 };

//the result of validate cred is in a 'return' format and therefore to get the result you need to console.log
//console.log(validateCred(valid3));

//PART 4 .----------------------------
//find invalid cards in batch array.. finished but backwards?!?!?!


const findInvalidCards = (batchOfCards) => {
 
let invalidCardNumbers = [];
  for (let i=0; i<batchOfCards.length; i++) {

//prints card number plus is true or false   
  //console.log('The card ' + batchOfCards[i] + ' is ' + validateCred(batchOfCards[i]));

//if statement to push true arrays to invalidCardNumbers

let result = validateCred(batchOfCards[i])

    if (result == false) {
      batchOfCards[i].reverse();
      invalidCardNumbers.push(batchOfCards[i]);
    };

  }

return invalidCardNumbers;
}; 

//to check part 4 works
  //  console.log(findInvalidCards(batch));




// PART 5 --------------- NYF.


//To create an input for Part 5
const invalidCardNumberArr = (findInvalidCards(batch));
//console.log(invalidCardNumberArr);


const idInvalidCardCompanies = (batchOfCards) => {
  let naughtyCompanies = [];
  for (let i=0; i<batchOfCards.length; i++) {
 
if (batchOfCards[i][0] == 3) {
  if (naughtyCompanies.indexOf('Amex') == -1) {
  naughtyCompanies.push('Amex')};
} else if (batchOfCards[i][0] == 4) {
  if (naughtyCompanies.indexOf('Visa') == -1) {
  naughtyCompanies.push('Visa')};
} else if (batchOfCards[i][0] == 5) {
  if (naughtyCompanies.indexOf('MasterCard') == -1) {
  naughtyCompanies.push('MasterCard')};
} else if (batchOfCards[i][0] == 6) {
  if (naughtyCompanies.indexOf('Discover') == -1) {
  naughtyCompanies.push('Discover')};
} else { return 'Company not found'};
  }
console.log(naughtyCompanies);  

  };

idInvalidCardCompanies(invalidCardNumberArr);