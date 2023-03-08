    // Starting from Day 2 of '30DAYS OF JAVASCRIPT'
    let challenge = ' 30 Days of Javascript '
    console.log(challenge);
    console.log(challenge.length);
    console.log(challenge.toUpperCase());
    console.log(challenge.toLowerCase());
    console.log(challenge.substring(0,1));
    console.log(challenge.substring(3,22));
    console.log(challenge.includes('String'));
    console.log(challenge.split(' '));
    console.log(challenge.replace('Javascript', 'Python'));
    console.log(challenge.charAt(15));
    console.log(challenge.lastIndexOf('a'));
    console.log(challenge.trim());
    console.log(challenge.startsWith(' '));
    console.log(challenge.endsWith(' '));
    console.log(challenge.repeat(2));


    let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
    console.log(company);
    console.log(company.split(','));

    let sent1 = 'You cannot end a sentence with because because because is a conjunction';
    console.log(sent1);
    console.log(sent1.lastIndexOf('because'));
    console.log(sent1.search('because'));

    let quote1 = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.';
    console.log(quote1);

    //  EXERCISE 3

    let quote2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
    let pattern = /love/gi;
    console.log(quote2.match(pattern));

    let quote3 = 'You cannot end a sentence with because because because is a conjunction';
    let pattern2 = /because/gi;
    console.log(quote3.match(pattern2));


