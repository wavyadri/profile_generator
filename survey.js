const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your name?', (name) => {
  rl.question('What is your favourite food?', (food) => {
    rl.question(
      'Who is your favourite musical artist or group currently?',
      (music) => {
        rl.question('What show/movie do you love to watch?', (film) => {
          rl.question('What is your instagram handle?', (ig) => {
            name = name.trim();
            food = food.trim();
            music = music.trim();
            film = film.trim();
            ig = ig.trim();

            const finalAnswer = `If you like ${food}, you and ${name} already have something in common. They can't stop listening to ${music} or watching ${film}. Total classics! Follow for more at @${ig}.`;
            console.log(finalAnswer);

            rl.close();
          });
        });
      }
    );
  });
});
