    // Day 3 of 30 Days of JavaScript

    // const now = new Date();
    // console.log(now);

    // // Getting Full year
    // console.log(now.getFullYear());

    // // Getting Month
    // console.log(now.getMonth());

    // // Getting Date
    // console.log(now.getDate());

    // // Getting Day
    // console.log(now.getDay());

    // // Getting Hours
    // console.log(now.getHours());

    // // Getting Minutes
    // console.log(now.getMinutes());

    // // Getting Seconds
    // console.log(now.getSeconds());

    // // Getting Time
    // console.log(now.getTime()); // this is the number of seconds passed from January 1, 1970 to March 9, 2023 09:22:41  OR
    // console.log(Date.now()); // Logs same value as above
    // console.log(now.getTime() === Date.now());

    // Formatting the values into a readable Format.
    const now2 = new Date();
    const year = now2.getFullYear();
    const month = now2.getMonth() + 1;
    const date = now2.getDate();
    const hours = now2.getHours();
    const minutes = now2.getMinutes();
    const seconds = now2.getSeconds();

    console.log(`${date}/${month}/${year}  ${hours}:${minutes}`);

    // Exercise 1

    // const firstName = 'Olamide';
    // const lastName = 'Iyanda';
    // const country = 'Nigeria';
    // const isMarried = 'No';
    // const year2 = now2.getFullYear();

    // console.log(typeof(firstName));
    // console.log(typeof(lastName));
    // console.log(typeof(country));
    // console.log(typeof(isMarried));
    // console.log(typeof(year2));

    // console.log(typeof('10') === typeof(10));
    // console.log(typeof(parseInt('9.8')) === typeof(10));

    // let w1 = 'python';
    // let w2 = 'jargon';
    // let w3 = 'dragon'
    // console.log(w1.length != w2.length);
    // console.log(w1.includes('on') || w3.includes('on'));

    // Exercise 2

    // Writing a function using a prompt to get values from the user and then calculating the area of a Triangle
    // calculateArea = () =>{
    //     let base = prompt('Input the value of the base')
    //     let height = prompt('Input the value of the height')

    //     let area = 0.5 * base * height;
    //     alert(`The area of the triangle is ${area}`);
    // }

    // calculateArea();


    // Writing a function that gets the sides of a triangle from the user and then uses it to calculate the perimeter of a triangle
    // calculatePeri = () =>{
    //     let s1 = Number(prompt('Input side1 here'));
    //     let s2 = Number(prompt('Input side2 here'));
    //     let s3 = Number(prompt('Input side3 here'));

    //     // creating an array and pushing the values of the sides into it
    //     const sides = [];
    //     sides.push(s1, s2, s3);
    //     // declaring the base value of total
    //     let total = 0;

    //     for (let i = 0; i < sides.length; i++) {
    //        total += sides[i];
    //     };

    //    alert(`The perimeter of the triangle is ${total}`)
    // }

    // calculatePeri();


    // Using promt to calculate the area and perimeter of a rectangle
    // const length = Number(prompt('Input length here'));
    // const width = Number(prompt('Input width here'));

    // // Function that calculates the area of a rectangle
    // rectArea = () =>{
    //     area = length * width;
    //     alert(`Area of rectangle is ${area}`)
    // }

    // rectArea();

    // // Function that calculates the perimeter of rectangle
    // rectPeri = () =>{
    //     peri = 2 * (length + width);
    //     alert(`Perimeter of the Rectangle is ${peri}`);
    // }

    // rectPeri();


    // Using promp to calculate the area and circumference of a Circle
    // const radius = prompt('Input the radius');
    // const pi = Math.PI;

    // circArea = pi * radius ** 2;
    // circum = 2 * pi * radius;

    // alert(`The Area and circumference of the Circle is ${circArea} and ${circum} respectively`);


    // Calculating and Comparing Slopes
    // y = 2 * x - 2
    // let m = 2;

    // x1 = 2;
    // y1 = 2;
    // x2 = 6;
    // y2 = 10;
    
    // slope = (y2 - y1) / (x2 - x1);
    // console.log(slope === m);


    // Calculating Quadratic Equations
    // let x = -3
    // y = x**2 + 6*x + 9;
    // console.log(y);
    // y is 0 when x is -3


    // Using tenary operators to check the length of my name and performing actions based on results
    // let myName = prompt('Input your name!');
    // myName.length > 7 ? console.log('Your name is long') : console.log('your name is short');


    // Comparison
    // let firstName = 'Abdulkareem';
    // let lastName = 'Mapelujo';
    // if (firstName.length > lastName.length) {
    //     console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
    // } else {
    //     console.log(`Your last name, ${lastName} is longer than your first name, ${firstName}`);
    // }

    

    // Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
    // const birthYear = Number(prompt('Enter your Birth year:'))

    // function to calculate the users age
    // getAge = () => {
    //     let thisyear = 2023;
    //     let newAge = thisyear - birthYear;
    //     let standardAge = 18;
    //     let remainder = standardAge - newAge;

    //     // checking if the inputed year corresponds with the standard age
    //     if (newAge >= standardAge) {
    //         alert(`you are ${newAge}, you are old enough to drive.`)
    //     } else {
    //         alert(`you are ${newAge}, you will be allowed to drive after ${remainder} years.`)
    //     }

    // }
    // getAge();


    // Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live.
    // const yearsLived =  Number(prompt('Enter number of years lived:'));
    // secondsInYear = 31536000;

    // secondsLived = yearsLived * secondsInYear;
    // alert(`you have lived ${secondsLived} seconds`);
    
