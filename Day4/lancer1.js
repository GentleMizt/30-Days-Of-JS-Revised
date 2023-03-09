    // Day 4 of 30 Days of JavaScript

    // EXERCISE 1
    // Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

    // const yourAge = Number(prompt('Enter your Age:'));
    // let standardAge = 18;
    // let remainder = standardAge - yourAge;

    // // using the If else Statement
    // if (yourAge >= standardAge) {
    //     alert('You are old enough to drive');
    // } else if (yourAge < standardAge){
    //     alert(`you are left with ${remainder} years to drive`);
    // }  else{
    //     alert('Go Home!');
    // }

    // Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
    // const myAge = 19;
    // const yourAge = Number(prompt('Enter your age:'));
    // const uOlder = yourAge - myAge;
    // const iOlder = myAge - yourAge;

    // if (yourAge > myAge) {
    //     console.log(`You are ${uOlder} years older than me.`);
    // } else if (myAge > yourAge){
    //     console.log(`I am ${iOlder} years older than you.`);
    // }


    // If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
    // Using if/else statement
    // let a = 4;
    // let b = 3;

    // if (a > b) {
    //     console.log(`${a} is greater than ${b}`);
    // } else {
    //     console.log(`${b} is greater than ${a}`);
    // }

    // Using tenary operators
    // let a = 4;
    // let b = 3;

    // a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`);


    // Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
    // let num = Number(prompt('Enter a Number here'));

    // // Checking if the number is an even number
    // let checkNO = num % 2
    
    // if (checkNO === 0) {
    //     console.log(`${num} is an even number`);
    // } else {
    //     console.log(`${num} is an Odd number`);
    // }


    // EXERCISE 2
    // Write a code which can give grades to students according to theirs scores:
        // 90-100, A
        // 70-89, B
        // 60-69, C
        // 50-59, D
        // 0-49, F

    // let scores = Number(prompt('Input your Score'));

    // assignScore = scores =>{
    //     if (scores >= 90 && scores <= 100) {
    //         console.log('Your Grade is A');
    //     }  
    //     else if (scores >= 70 && scores <= 89) {
    //         console.log('Your Grade is B');
    //     }
    //     else if (scores >= 60 && scores <= 69) {
    //         console.log('Your Grade is C');
    //     }
    //     else if (scores >= 50 && scores <= 59) {
    //         console.log('Your Grade is D');
    //     }
    //     else if (scores >= 0 && scores <= 49){
    //         console.log('Your Grade is F');
    //     }
    // }

    // assignScore(scores);


    // Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

    // September, October or November, the season is Autumn.
    // December, January or February, the season is Winter.
    // March, April or May, the season is Spring
    // June, July or August, the season is Summer

    
    
    let userInput = prompt('Input the Month here');
    let season = ['Autumn', 'Winter', 'Spring', 'Summer'];
    checkSeason = userInput =>{
        if (userInput === 'September' || userInput === 'October' || userInput === 'November') {
            console.log(season[0]);
        }
    }

    checkSeason();