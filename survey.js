const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your insta handle? ', (answer) => {
  console.log(`Thank you for your valuable feedback: @${answer}`);

  rl.close();
});
