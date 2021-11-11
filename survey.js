//File generates a profile based on asking a series of questions

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

let profile = {};

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
  profile['Name'] = answer;// TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});






console.log(`${profile.Name} loves`);

