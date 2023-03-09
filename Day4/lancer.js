    // Day 4 of 30 Days of JavaScript

    // EXERCISE 1
    // Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

    const yourAge = Number(prompt('Enter your Age:'));
    let standardAge = 18;
    let remainder = standardAge - yourAge;

    // using the Switch Method
    switch (standardAge) {
        case yourAge >= standardAge:
            'You are old enough to drive'
            break;
        case yourAge < standardAge:
            `you are left with ${remainder} years to drive`
        default:
            break;
    }