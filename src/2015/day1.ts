import { getDataFromFile } from "./getDataFromFile";

const fileName = `${__filename.split('.')[0]}.txt`;

const input = getDataFromFile(fileName);

function getTheFloor(encruptedBuildingFloor: string) {
    const inputArr = encruptedBuildingFloor.split('');
    const basementPosition: number[] = [];
    const floorNumber = inputArr.reduce((acc, starting, index) => {
        starting === '(' ? acc += 1 : acc -= 1;
        if (acc === -1) {
            basementPosition.push(index + 1);
        }
        return acc;
    }, 0);
    return { floorNumber, basementFirstReachedOn: basementPosition[0] };
}

const output = getTheFloor(input);
console.log(output);
