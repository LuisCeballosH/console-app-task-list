const fs = require('fs');
const save = (data) => {
    fs.writeFileSync('./db/data.json', JSON.stringify(data))
}
const read = () => {
    if (!fs.existsSync('./db/data.json')) {
        return
    }

    const data = JSON.parse(fs.readFileSync('./db/data.json', { encoding: 'utf-8' }));

    return data
}

module.exports = {
    save,
    read
}