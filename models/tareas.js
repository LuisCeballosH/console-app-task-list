const Task = require("./task");

class Tareas {
    listO = {}

    constructor() {
        this.listO = {}
    }

    get listArray() {
        const listA = []
        Object.keys(this.listO).forEach(key => {
            listA.push(this.listO[key]);
        })

        return listA;
    }

    create(description = '') {
        const task = new Task(description);
        this.listO[task.id] = task;
    }

    load(tareas = []) {
        tareas.forEach(task => {
            this.listO[task.id] = task;
        })
    }

    delete(id) {
        if (this.listO[id]) {
            delete this.listO[id];
        }
    }

    toggle(ids = []) {

        ids.forEach(id => {
            const tarea = this.listO[id];
            if (!tarea.completed) {
                tarea.completed = new Date().toISOString();
            }
        })

        this.listArray.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this.listO[tarea.id].completed = null;
            }
        })


    }

    list(tareas = []) {
        console.log();
        this.listArray.forEach((task, i) => {
            const idx = `${i + 1}.`.green
            const { description, completed } = task;
            const state = completed ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${idx} ${description} :: ${state}`);
        })
    }

    listCompletadaPendiente(value = true) {
        console.log();
        let i = 0
        this.listArray.forEach((task) => {
            i++;
            const { description, completed } = task;
            const state = completed ? 'Completada'.green : 'Pendiente'.red;
            if (value) {
                if (completed) {
                    console.log(`${(i + '.').toString().green} ${description} :: ${state} :: ${completed.green}`);
                }
            } else {
                if (!completed) {
                    console.log(`${(i + '.').toString().green} ${description} :: ${state}`);
                }
            }
        })
    }
}

module.exports = Tareas