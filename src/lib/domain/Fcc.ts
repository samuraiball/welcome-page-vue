export class FCC<T> {
    constructor(readonly values: T[]) {
    }

    map<U>(callBackFunc: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
        return this.values.map(callBackFunc, thisArg)
    }

    filter<U>(callBackFunc: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T[] {
        return this.values.filter(callBackFunc, thisArg)
    }

    isEmpty() {
        return this.values.length === 0;
    }
}