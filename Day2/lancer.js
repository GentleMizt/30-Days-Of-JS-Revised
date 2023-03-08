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

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    
    // replacing all the special characters with a space.
    let cleanedSentence = sentence.replace(/[^a-zA-Z]+/g, ' ').toLowerCase();
    console.log(cleanedSentence);

    // spliting the cleaned sentence into an array of words.
    let words = cleanedSentence.split(' ');
    console.log(words);

    // creating an object to store the count of filtered words.
    let wordCount ={};

    // looping through the cleaned sentence and assigning words to the word count object and counting it, then assigning a count number to it.
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (!wordCount[word]) {
            wordCount[word] = 0;
        }
        wordCount[word]++;
    }

    // setting the base value of the highestCount as well as the mostFrequentWord
    let highestCount = 0;
    let mostFrequentWord = '';

    // looping through each word in the wordCount object, increasing the count, setting the most occured word
    for (const word in wordCount){
        if (wordCount[word] > highestCount) {
            mostFrequentWord = word;
            highestCount = wordCount[word];
        }
    }

    console.log(`The most frequently occured word in the sentence is ${mostFrequentWord}`);



