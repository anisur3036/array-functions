const companies = [
	{name: 'Company One', category: 'Finance', start: 1981, end: 2003},
	{name: 'Company two', category: 'Retail', start: 1991, end: 2008},
	{name: 'Company Three', category: 'Auto', start: 1991, end: 2005},
	{name: 'Company Four', category: 'Retail', start: 2001, end: 2013},
	{name: 'Company Five', category: 'Technology', start: 1991, end: 2006},
	{name: 'Company Six', category: 'Technology', start: 2001, end: 2016},
	{name: 'Company Seven', category: 'Finance', start: 2011, end: 2015}
];


const ages = [33, 12, 15, 18, 23, 31, 15, 20, 33, 64, 42, 23];

for(let i = 0; i < companies.length; i++) {
	// 	console.log(companies[i]);
 }

// companies.forEach(company => console.log(company.name));



//Get 21 or Older 
let canMarrige = [];

for(let i = 0; i < ages.length; i++) {
	if(ages[i] >= 21) {
		canMarrige.push(ages[i]);
	}
}

//using filter
const canMarrige = ages.filter(age => {
	if (age >= 21) {
		return true
	}
});


const canMarrige = ages.filter(age => age >= 21);
// console.log(canMarrige);


const retailCompanies = companies.filter( company => {
	if(company.start <= 1991) {
		return true
	}
});

// console.log(retailCompanies);

retailCompanies.forEach( function(company, index) {
	console.log(company.name);
});

//Map Function
const companyNames = companies.map(company => {
	return `${company.name} [${company.start} - ${company.end}]`;
});
// console.log(companyNames);

const lifeTime = companies.map(company => {
	return company.name + ' - ' + (company.end - company.start);
});

// console.log(lifeTime);


//Sorting
const sortedCompanies = companies.sort( (c1, c2) => {
	if (c1.start > c2.start) {
		return 1;
	} else {
		return -1;
	}
});

const sortedCompanies = companies.sort( (a, b) => (a.start > b.start ? 1: -1));
const sortAges = ages.sort( (a, b) => (a < b ? 1: -1));

// console.log(sortAges);


let ageSum = 0;

for(let i = 0; i < ages.length; i++) {
	ageSum += ages[i];
}

const sumAges = ages.reduce((total, age) => total + age, 0);


const companiesLifeTime = companies.reduce(function(total, company) {
	return total + (company.end - company.start);
}, 0);

// console.log(companiesLifeTime);

const multiTask = ages
	.map(age => age*2)
	.filter(age => age >= 21)
	.sort((a, b) => b - a)
	.reduce((a, b) => a + b, 0)

console.log(multiTask);

