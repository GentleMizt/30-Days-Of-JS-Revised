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

    console.log(`${date}/${month}/${year}  ${hours}:${minutes}`);

    // Exercise 1

    const firstName = 'Olamide';
    const lastName = 'Iyanda';
    const country = 'Nigeria';
    const isMarried = 'No';
    const year2 = now2.getFullYear();

    console.log(typeof(firstName));
    console.log(typeof(lastName));
    console.log(typeof(country));
    console.log(typeof(isMarried));
    console.log(typeof(year2));

    console.log(typeof('10') === typeof(10));
    console.log(typeof(parseInt('9.8')) === typeof(10));

    let w1 = 'python';
    let w2 = 'jargon';
    let w3 = 'dragon'
    console.log(w1.length != w2.length);
    console.log(w1.includes('on') || w3.includes('on'));

    // Exercise 2
    
    // Writing a function using a prompt to get values from the user and then calculating the area of a Triangle
    calculateArea = () =>{
        let base = prompt('Input the value of the base')
        let height = prompt('Input the value of the height')

        let area = 0.5 * base * height;
        alert(`The area of the triangle is ${area}`);
    }

    calculateArea();