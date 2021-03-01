const inquirer = require('inquirer');
require('colors');

// inquirer
//   .prompt([
//   ])
//   .then(answers => {
//   })
//   .catch(error => {
//     if(error.isTtyError) {
//     } else {
//     }
//   });

const questions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tareas`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tares`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            },
        ]
    }
]

const question = [
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${'ENTER'.green} para continuar`,
    }
]


const inquirerMenu = async () => {
    console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una opción  ');
    console.log('=========================\n'.green);

    const { option } = await inquirer.prompt(questions)

    return option;

}

const pause = async () => {
    console.log();
    await inquirer.prompt(question)
}

const input = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Ingrese un valor'
                }

                return true;
            }
        }
    ]


    const { description } = await inquirer.prompt(question);

    return description;
}

module.exports = {
    inquirerMenu,
    pause,
    input
}