import React from "react";
import Algo from "../../utils/Algorithms";

const arr = [3, 2, 5, 1, 3];
const item = 1;
console.log(`Item: ${item} from arr: ${arr} on pos: ${Algo.linearSearch(arr, item)}`);

console.log(Algo.binarySearch(Algo.bubbleSort(arr), 3));
console.log(Algo.reqBinarySearch(Algo.quickSort(arr), 3));

console.log(Algo.dummySort(arr));
console.log(Algo.insertionSort(arr));
console.log(Algo.bubbleSort(arr));
console.log(Algo.quickSort(arr));
console.log(Algo.factorial(5));
console.log(Algo.fibonacci(15));
console.log(Algo.fibonacciReq(15));

let a = 5;
let b = 6;
[a, b] = Algo.swapTwo(a, b);
console.log(b, a);

const Playground = () => {
  return <div></div>;
};

export default Playground;
