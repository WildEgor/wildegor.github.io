import React from "react";
import Algo from "../../utils/Algorithms";

const arr = [3, 2, 5, 1, 3];
const item = 1;
console.log(`Item: ${item} from arr: ${arr} on pos: ${Algo.linearSearch(arr, item)}`);
console.log(Algo.dummySort(arr));
console.log(Algo.bubbleSort(arr));
console.log(Algo.binarySearch(arr, 1));
console.log(Algo.factorial(5));
console.log(Algo.fibonachi(15));

const Playground = () => {
  return <div></div>;
};

export default Playground;
