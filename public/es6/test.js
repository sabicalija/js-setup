'use strict';
// es6 feature: block-scoped "let" declaration
const sentences = [
    { subject: 'Hello', verb: 'is', object: 'great' },
    { subject: 'World', verb: 'is', object: 'not' },
];

// es6 feature: object destructuring 
function say({ subject, verb, object}) {
    // es feature: template strings
    console.log(`${subject} ${verb} ${object}`);
}

// es6 feature: for..of
for(let s of sentences) {
    say(s);
}