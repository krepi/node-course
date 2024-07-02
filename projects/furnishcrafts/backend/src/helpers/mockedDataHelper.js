import path from "path";
import fs from "fs";

const dataPath = path.join(path.resolve(), '/src/data/data.json');

export const readData = async () => {
    const data = await fs.promises.readFile(dataPath);
    return JSON.parse(data);
}

export const writeData = async (data) => {
    await fs.promises.writeFile(dataPath, JSON.stringify(data, null, 2));
}