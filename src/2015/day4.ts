/**
 * Problem: https://adventofcode.com/2015/day/4
 * 
 * Find the MD5 hash of the input, if the has doesn't start with 5 consecutive 0's
 * Add 1 to the end of the string, if the output again is not with 5 consecutive 0's
 * check adding next number to the end of the previous input and continue till there is an output with 
 * 5 consecutive 0's.
 * 
 * The soultion to the excerise will be the decimal values added to the end of the input
 * string to get the MD5 with 5 consecutive 0's
 * 
 */

import { Md5 } from 'ts-md5';

const input = 'bgvyzdsv';

function checkForZeros(hash: string, numberOfZeros: number) {
    for(let i=0; i<numberOfZeros; i++){
        if(hash[i] !== '0')
            return false;
    }
    return true;
}

function generateValue(value: string) {
    let hash = Md5.hashStr(value);
    let num = 0;
    while (!checkForZeros(hash, 6)) {
        num++;
        hash = Md5.hashStr(`${value}${num}`);
    }
    return {value, out: hash, num};
}

const result = generateValue(input);

console.log({ result })
