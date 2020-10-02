const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (source) => {
  return tutorials.map(title => {
<<<<<<< HEAD
    return title.split(" ")
                .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ");
=======
    let words = title.split(" ");
    words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return words.join(" ");
>>>>>>> c2b760c4f87c5efc7d94f0b67395ab88cf43ad4b
  });
};

