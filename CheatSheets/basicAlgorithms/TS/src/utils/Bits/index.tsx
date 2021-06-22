/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
export class BitMath {
    static getBit(value: number, position: number): number {
        return (value >> position) & 1; // shift to pos AND mask 1
    }

    static setBit(value: number, position: number): number {
        return value | (1 << position); // make mask OR with value
    }

    static clearBit(value: number, position: number): number {
        return ~(1 << position) & value; // create inverted mask AND value
    }

    static updateBit(value: number, position: number, bitValue: number | boolean): number {
        const clearMask = ~(1 << position);
        return (value & clearMask) | (bitValue? 1 : 0 << position);
    }
}