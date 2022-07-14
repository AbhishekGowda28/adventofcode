import { getDataFromFile } from './getDataFromFile';

const fileName = `${__filename.split('.')[0]}.txt`;

let data = getDataFromFile(fileName);

type Location = {
    x: number;
    y: number;
};

function numberOfPresents(directions: string, numberOfSanta=1) {
    const houses = directions.split("");
    const santa: Location = { x: 0, y: 0 };
    const roboSanta: Location = { x: 0, y: 0 };
    const locatioSet:Set<string> = new Set();
    
    locatioSet.add(`${santa.x}${santa.y}`);
    
    houses.forEach((house, index) => {
        
        const personMoving = index % numberOfSanta === 0 ? santa : roboSanta;

        switch (house) {
            case '^': {
                personMoving.y += 1;
                break;
            }
            case 'v': {
                personMoving.y -= 1;
                break;
            }
            case '>': {
                personMoving.x += 1;
                break;
            }
            case '<': {
                personMoving.x -= 1;
                break;
            }
        }
        
        locatioSet.add(`${personMoving.x}${personMoving.y}`);
        
    });

    return { houseWithAtleastOnePresent: locatioSet.size };
};


// Getting wrong answer for part-2: Correct answer is 2639 but getting 2625
const output = numberOfPresents(data, 1);


console.log(output);
