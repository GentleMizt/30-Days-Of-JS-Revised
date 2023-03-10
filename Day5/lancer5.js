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