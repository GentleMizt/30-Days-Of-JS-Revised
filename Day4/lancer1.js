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

    const myAge = 19;
    const yourAge = Number(prompt('Enter your age:'));
    const uOlder = yourAge - myAge;
    const iOlder = myAge - yourAge;

    if (yourAge > myAge) {
        console.log(`You are ${uOlder} years older than me.`);
    } else if (myAge > yourAge){
        console.log(`I am ${iOlder} years older than you.`);
    }