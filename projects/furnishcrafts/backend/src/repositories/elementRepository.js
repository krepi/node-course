import path from "path";
import fs from "fs";

const dataPath = path.join(path.resolve(), '/src/data/data.json');

async function readData() {
    const data = await fs.readFileSync(dataPath);
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

class ElementRepository {
    async getAllElements() {
        const data = await readData();
        return data.elements;
    }
    async getElementById(id) {
        const data = await readData();
        return data.elements.find(element => element.id === id);
    }
}

export default new ElementRepository();