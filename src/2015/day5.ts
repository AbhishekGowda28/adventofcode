/**
 * Problem Statement: https://adventofcode.com/2015/day/5
 * 
 * Rules
 * -----
 * 1. Contains atleast 3 any vowels
 * 2. Contains repeated characters
 * 3. Doesn't contain [ab, cd, pq, xy]
 * 
 */

import { getDataFromFile } from './getDataFromFile';

const fileName = `${__filename.split('.')[0]}.txt`;

let input = getDataFromFile(fileName);

function numberOfVowels(str: string) {
    const input = str.split('');
    const vowelArray = ["a", "e", "i", "o", "u"];
    return input.reduce((count, currentString) => {
        vowelArray.includes(currentString) && count++;
        return count;
    }, 0);
}

function containRepetativeCharacters(str: string) {
    return str.split('').filter((ele, index, arr) => {
        const nearestIndex = arr.indexOf(ele);
        return nearestIndex !== index && nearestIndex === index - 1
    }).length;
}

function containsRestristedCharacters(str: string) {
    const restrictedArray = ["ab", "cd", "pq", "xy"];
    return restrictedArray.filter(key => str.includes(key)).length;
}

function isStringNice(str: string) {
    const vowels = numberOfVowels(str);
    const repetativeStr = containRepetativeCharacters(str);
    const hasRestristiveWord = containsRestristedCharacters(str);
    return (vowels >= 3) && (repetativeStr >= 1) && (hasRestristiveWord === 0);
}

function numberOfNiceStrings(data: string) {
    const str = data.split('\n');
    let counter = 0;
    str.forEach((ele) => {
        if (isStringNice(ele)) {
            counter++;
        }
    });
    return counter;
}

const output = numberOfNiceStrings(input);
console.log({ output });
