import { readFileSync } from 'fs';

export function getDataFromFile(fileName: string) {
    return readFileSync(fileName, {encoding: 'utf-8'});
}