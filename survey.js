const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (name) => {

  rl.question("What's an activity you like doing? ", (activity) => {
    
    rl.question("What do you listen to while doing that? ", (music) => {

      rl.question("Which meal is your favourite? (ie: brunch, dinner, etc) ", (meal) => {

        rl.question("What's your favourite thing to eat for that meal? ", (food) => {

          rl.question("Which sport is your absolute favourite? ", (sport) => {

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (power) => {

              console.log("");
              console.log(`${name} likes ${activity} and while they're doing that they like listening to ${music}.\n${name}'s favourite meals of the day is ${meal}, and favourite food is ${food}.\n${name}'s favourite sport is ${sport} and their super power is ${power}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});




