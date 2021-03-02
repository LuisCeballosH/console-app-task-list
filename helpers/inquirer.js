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

const listDelete = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        let idx = `${i + 1}.`.green

        return {
            value: tarea.id,
            name: `${idx} ${tarea.description}`
        }
    })

    choices.unshift({
        value: '0',
        name: '0. '.green + 'Cancelar'
    })

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]


    const { id } = await inquirer.prompt(questions);

    return id;

}

const checkList = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        let idx = `${i + 1}.`.green

        return {
            value: tarea.id,
            name: `${idx} ${tarea.description}`,
            checked: tarea.completed ? true : false
        }
    })

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]


    const { ids } = await inquirer.prompt(question);

    return ids;

}

const confirm = async (message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question);
    return ok;
}

module.exports = {
    inquirerMenu,
    pause,
    input,
    listDelete,
    confirm,
    checkList
}