/* eslint-disable prettier/prettier */
export default class Algo {
  static factorial(value: number): number {
    if (value === 0 || value === 1)
      return 1;
    return this.factorial(value-1)*value;
  }

  private static fibonacciNth(n: number): number {
    let currentNum = 1;
    let previousNum = 0;

    if (n === 1) return 1;
    let iter = n - 1;

    while (iter) {
      currentNum += previousNum;
      previousNum = currentNum - previousNum; 
      iter--;
    }

    return currentNum;
  }

  static fibonacci(n: number): number[]  {
    const fSq = [1];

    if (n === 1) return fSq;

    for (let index = 2; index <= n; index++) {
      //fSq.push(this.fibonacciNth(index));
      fSq.push(this.fibonacciClosedForm(index));
    }

    return fSq;
  }

  static fibonacciClosedForm(position: number): number {
    const topMaxValidPosition = 70;
  
    // Check that position is valid.
    if (position < 1 || position > topMaxValidPosition) {
      throw new Error(`Can't handle position smaller than 1 or greater than ${topMaxValidPosition}`);
    }
  
    // Calculate √5 to re-use it in further formulas.
    const sqrt5 = Math.sqrt(5);
    // Calculate φ constant (≈ 1.61803).
    const phi = (1 + sqrt5) / 2;
  
    // Calculate fibonacci number using Binet's formula.
    return Math.floor((phi ** position) / sqrt5 + 0.5);
  }

  static linearSearch(array: number[], item: number): number | null {

    if (!array.length) return null;

    // let element = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] === item) return index;
        // if (element === item) return item;
        // element = array[index];
    }
    return null;
  }

  static dummySort(array: number[]): number[] {
    const newArray: number[] = [...array];

    for (let i = 0; i < newArray.length; i++) {
      let indexMin = i;
      for (let j = i + 1; j < newArray.length; j++) {
        if (newArray[j] < newArray[indexMin]) indexMin = j;
        // if (newArray[i] < newArray[j]) indexMin = j;
      }

      if (indexMin !== i) {
        const tmp = newArray[i];
        newArray[i] = newArray[indexMin];
        newArray[indexMin] = tmp;
      }
    }

    return newArray;
  }

  static bubbleSort(array: number[]): number[] {
    let swapped = false;
    const newArray: number[] = [...array];
    for (let i = 0; i < newArray.length; i++) {
      swapped = false;
      for (let j = 0; j < newArray.length; j++) {
        if (newArray[j] > newArray[j + 1]) {
          const temp = newArray[j];
          newArray[j] =  newArray[j + 1];
          newArray[j + 1] = temp;
          swapped = true;
        }
      } 
      if (!swapped) {
        return newArray;
      }
    }
    return newArray;
  }

  static binarySearch(array: number[], item: number): number {
    const newArray = this.bubbleSort(array);
    let pos = -1;
    let searchValue = null;
    let arrStart = 0;
    let arrEnd = newArray.length;

    while(!searchValue || arrStart <= arrEnd) {
      const middle = Math.floor((arrStart + arrEnd) / 2);

      if (item === newArray[middle]){
        searchValue = newArray[middle];
        pos = middle;
        return pos;
      } else if (item < newArray[middle]) {
        arrEnd = middle - 1;
      } else {
        arrStart = middle + 1;
      }
    }

    return pos;
  }

  private static isEven(value: number) {
    return value & 1;
  }
}

