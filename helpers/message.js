require('colors');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const showMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log('========================='.green);
        console.log('  Seleccione una opción  '.green);
        console.log('=========================\n'.green);
        console.log(`${'1.'.green} Crear tareas`);
        console.log(`${'2.'.green} Listar tares`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir\n`);

        // const readline = require('readline').createInterface({
        //     input: process.stdin,
        //     output: process.stdout
        // });

        // readline.question('Seleccione una opción: ', (answer) => {
        //     rl.close();
        //     resolve(answer)
        // });

        rl.question('Seleccione una opción: ', (answer) => {
            if (answer === '0') {
                rl.close();
            } else {
                rl.pause();
            }
            resolve(answer)
        });

    })
}

const pause = () => {
    return new Promise(resolve => {
        // console.clear();
        // const readline = require('readline').createInterface({
        //     input: process.stdin,
        //     output: process.stdout
        // });

        // readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (answer) => {
        //     console.log(answer);
        //     rl.close();
        //     resolve()
        // });

        rl.question(`\nPresione ${'ENTER'.green} para continuar\n`, (answer) => {
            console.log(answer);
            rl.pause();
            resolve()
        });
    })
}



module.exports = {
    showMenu,
    pause
}