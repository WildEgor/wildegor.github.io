/* eslint-disable prettier/prettier */
export default class Algo {

  static searchUnique(s: string):string {
    const mapper = new Map();
    const origString = s.split('');

    const map = origString.reduce((acc, i) => {
      acc[i] = acc[i]? acc[i] + 1 : 1;
      return acc;
    }, {});

    for (let index = 0; index < origString.length; index++) {
      const element = origString[index];
      if (map[element] === 1) return element;
    }

    return '';
  }

  static arrIntersection (firstArray: number[], secondArray: number[]): number[] {
    const newArray = [];

    const map = firstArray.reduce((acc, i) => {
      acc[i] = acc[i]? acc[i] + 1 : 1;
      return acc;
    }, {});

    for (let index = 0; index < secondArray.length; index++) {
      const current: number = secondArray[index];
      const count = map[current];
      if (count && count > 0){
        newArray.push(current);
        map[current] -= 1;
      }
    }
    return newArray;
  }


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

  static fibonacciReq(n: number): number {
    if (n === 1 || n === 2) return 1;
    return this.fibonacciReq(n - 1) + this.fibonacciReq(n - 2)
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

  static swapTwo(numOne: number, numTwo: number): number[] {
    return [numTwo, numOne]
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

  static insertionSort(array: number[]): number[] {
    const newArray = [...array];
    for (let index = 1; index < newArray.length; index++) {
      let currentIndex = index;
      while(newArray[currentIndex - 1] !== undefined && newArray[currentIndex] < newArray[currentIndex - 1]){
        [
          newArray[currentIndex - 1],
          newArray[currentIndex],
        ] = this.swapTwo(newArray[currentIndex - 1], newArray[currentIndex])
        currentIndex -= 1;
      } 
    }
    return newArray;
  }

  static quickSort(array: number[]): number[] {
    if (array.length <= 1) return array;
  
    const newArray = [...array];

    const leftArr = [];
    const rightArr = [];
    const centerItem = newArray.shift();
    const centerArr = [centerItem];

    while(newArray.length) {
      const currentItem = newArray.shift();

      if (currentItem === centerItem) {
        centerArr.push(currentItem);
      } else if (currentItem < centerItem) {
        leftArr.push(currentItem);
      } else {
        rightArr.push(currentItem);
      }
    }

    const leftArrSorted = this.quickSort(leftArr);
    const rightArrSorted = this.quickSort(rightArr);

    return leftArrSorted.concat(centerArr, rightArrSorted);
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

  static reqBinarySearch(arr: number[], value: number): number {
    if(!arr.length) return -1;
    const average = Math.floor(arr.length-1/2);
 
    if (value === arr[average]) return average;
    if (value > arr[average]) return this.reqBinarySearch(arr.slice(average+1),value);
    if (value < arr[average]) return this.reqBinarySearch(arr.slice(0,average),value);
 
 }

  static binarySearch(array: number[], item: number): number {
    const newArray = [...array];
    let searchValue = null;
    let arrStart = 0;
    let arrEnd = newArray.length;

    while(!searchValue || arrStart <= arrEnd) {
      const middle = arrEnd + Math.floor((arrEnd - arrStart) / 2);

      if (item === newArray[middle]){
        searchValue = newArray[middle];
        return middle;
      }
      
      if (item < newArray[middle]) {
        arrEnd = middle - 1;
      } else {
        arrStart = middle + 1;
      }
    }
  }

  private static isEven(value: number) {
    return value & 1;
  }
}

