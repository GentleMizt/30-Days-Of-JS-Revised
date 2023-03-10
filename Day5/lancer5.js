    // DAY 5
    console.log('Day 5 of 30 Days of JavaScript');

    const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
    const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits

    console.log('Numbers:', numbers.length);
    console.log('Fruits:', fruits.length);
    // console.log(numbers.toString());

    // Manipularing an Array

    // Using Array Constructors
    const arr = Array(5).fill('Allah');
    console.log(arr);

    // Using concat method
    const firstList = [1, 2, 3]
    const secondList = [4, 5, 6]
    const thirdList = firstList.concat(secondList)

    console.log(thirdList) // [1, 2, 3, 4, 5, 6]

    // Slicing Array Elements
    // Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
    console.log(thirdList.slice(2,5));

    // Splice method in array
    // Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
    console.log(thirdList.splice(1, 5));

    // Shift Method in array
    // Removing one array element in the beginning of the array.

    // unshift: Adding array element in the beginning of the array.


    // EXERCISE 1
    let arr1 = Array();             //1
    arr1 = [1,2,3,4,5,6,7];         //2
    console.log(arr1);
    console.log(`The first, middle and last elements in the array are ${arr1[0]}, ${arr1[3]}, ${arr1[6]} respectively.`);       //5

    const mixedDataTypes = [
        'lancer',
        18,
        true,
        { 
            firstName: 'Abdulkareem',
            lastName: 'Mapelujo'
        },
        hobbies = ['reading', 'coding', 'gaming', 'reading mangas', 'watching animes'],
        'Nabasf'
    ]
    console.log(mixedDataTypes.length);

    const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
    console.log(itCompanies);
    console.log(itCompanies.length);
    console.log(`The first, middle and last companies in the array are ${itCompanies[0]}, ${itCompanies[3]}, ${itCompanies[6]} respectively.`);       //5
    for (let i = 0; i < itCompanies.length; i++) {
        console.log(itCompanies[i].toUpperCase());
    }
    console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT Companies`);

    // if (itCompanies.includes('Shell')) {
    //     console.log('Shell is available');
    // } else {
    //     console.log('Company not found');
    // }
