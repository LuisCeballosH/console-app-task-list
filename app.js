const { save, read } = require('./helpers/db');
const { inquirerMenu, pause, input, listDelete, confirm, checkList } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

require('colors');

console.clear();

const main = async () => {

    let answer = ''
    const tareas = new Tareas();

    const tareasDb = read();

    if (tareasDb) {
        tareas.load(tareasDb)
    }

    // await pause();

    do {
        answer = await inquirerMenu();
        switch (answer) {
            case '1':
                const description = await input('Description: ');
                tareas.create(description);
                break;

            case '2':
                tareas.list();
                break;

            case '3':
                tareas.listCompletadaPendiente(true);
                break;

            case '4':
                tareas.listCompletadaPendiente(false);
                break;

            case '5':
                const ids = await checkList(tareas.listArray);
                tareas.toggle(ids)
                break;

            case '6':
                const id = await listDelete(tareas.listArray);
                if (id !== '0') {
                    const ok = await confirm('¿Estaá seguro?');
                    console.log({ ok });
                    if (ok) {
                        tareas.delete(id);
                        console.log('Tarea Borrada');
                    }
                }
                break;

            default:
                break;
        }

        save(tareas.listArray);
        await pause();
    } while (answer !== '0');

}

main();