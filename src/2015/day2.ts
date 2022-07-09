import { getDataFromFile } from './getDataFromFile';

const fileName = './src/2015/input-2.txt';

function getSurfaceAreaOfBox(boxDimmension: string) {
    const [l, w, h] = boxDimmension.split('x').map(x => parseInt(x, 10)).sort((a, b) => a - b);
    const surfaceArea = 2 * (l * w + w * h + h * l);
    const volume = l * w * h;
    const wrapperArea: number = surfaceArea + (l * w);
    const ribbon: number = (2 * (l + w)) + (volume);
    return { wrapper: wrapperArea, bowRibbon: ribbon };
}

const data = getDataFromFile(fileName);

const dataString = data.split('\r\n');
const totalWrapperRequired = dataString.reduce((acc, boxData, index) => {
    const { wrapper, bowRibbon } = getSurfaceAreaOfBox(boxData);
    acc.wrapper += wrapper;
    acc.ribbon += bowRibbon;
    return acc;
}, { wrapper: 0, ribbon: 0 });

console.log({ totalWrapperRequired });
