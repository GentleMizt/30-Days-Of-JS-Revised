    // Day 3 of 30 Days of JavaScript

    const now = new Date();
    console.log(now);

    // Getting Full year
    console.log(now.getFullYear());

    // Getting Month
    console.log(now.getMonth());

    // Getting Date
    console.log(now.getDate());

    // Getting Day
    console.log(now.getDay());

    // Getting Hours
    console.log(now.getHours());

    // Getting Minutes
    console.log(now.getMinutes());

    // Getting Seconds
    console.log(now.getSeconds());

    // Getting Time
    console.log(now.getTime()); // this is the number of seconds passed from January 1, 1970 to March 9, 2023 09:22:41  OR
    console.log(Date.now()); // Logs same value as above
    console.log(now.getTime() === Date.now());