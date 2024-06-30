import path from "path";
import fs from "fs";

const dataPath = path.join(path.resolve(), '/data/data.json');

function readData() {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

class ElementRepository {
    getAllElements() {
        const data = readData();
        return data.elements;
    }
}

export default new ElementRepository();