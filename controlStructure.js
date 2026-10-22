const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter starting number: ", (startInput) => {
    rl.question("Enter ending number: ", (endInput) => {

        const start = Number(15);
        const end = Number(30);

        for (let i = start; i <= end; i++) {
            console.log(i);
        }

        rl.close();
    });
});