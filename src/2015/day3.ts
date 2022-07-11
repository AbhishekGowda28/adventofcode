import { getDataFromFile } from './getDataFromFile';

const fileName = `${__filename.split('.')[0]}.txt`;

let data = getDataFromFile(fileName);

type Presents = {
    [key: string]: number;
}

type Location = {
    x: number;
    y: number;
};

function numberOfPresents(directions: string) {
    const houses = directions.trim().split("");
    const santa: Location = { x: 0, y: 0 };
    const location: Presents = { "00": 1 };

    houses.forEach((house, index) => {

        switch (house) {
            case '^': {
                santa.y += 1;
                break;
            }
            case '<': {
                santa.x -= 1;
                break;
            }
            case '>': {
                santa.x += 1;
                break;
            }
            case 'v': {
                santa.y -= 1;
                break;
            }
            default: break;
        }

        const currentLocation = `${santa.x}${santa.y}`;
        const numberOfpresentDelivedToLocation = location[currentLocation] || 0;
        location[currentLocation] = numberOfpresentDelivedToLocation + 1;

    });

    return { houseWithAtleastOnePresent: Object.keys(location).length };
};

const output = numberOfPresents(data);

console.log(output);
