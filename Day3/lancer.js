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
