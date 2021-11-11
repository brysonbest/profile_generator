//File generates a profile based on asking a series of questions
//practicing nested callbacks

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What is your name? (or Nickname)? ', (name) => {
  rl.question('What is an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('What is your favourite meal? ', (meal) => {
        rl.question('What is your favourite thing to eat in that meal? ', (foodItem) => {
          rl.question('What is your favourite sport? ', (sport) => {
            rl.question('What is your superpower? That is - what are you amazing at? ', (superpower) => {
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${foodItem} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});