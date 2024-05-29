const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNumbers = numbers.map((number) => number * 2);

console.log(doubleNumbers);

const doubleNumbers2 = [];

numbers.forEach((number) => {
    doubleNumbers2.push(number * 2);
}); 

console.log(doubleNumbers2);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
  ];

// Array of company names
const companyName = companies.map((company) => company.name);

console.log(companyName);

// Array of company names and categories
const companyDetails = companies.map((company) => {
    
    return {
    name: company.name,
    category: company.category
    }
});

console.log(companyDetails);

// Array of company name and age
const companyAge = companies.map((company) => {
    return {
        name: company.name,
        length: company.end - company.start + " years"
    }
}
);

console.log(companyAge);

// Chain of map methods
const squareAndDouble = numbers
    .map((number) => Math.sqrt(number))
    .map((sqrt) => sqrt * 2);

console.log(squareAndDouble);

// Chain of different methods
const evenDouble = numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * 2);

console.log(evenDouble);

