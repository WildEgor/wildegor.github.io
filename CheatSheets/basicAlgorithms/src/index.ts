import { measure } from './utils/meausure.decorator';

class ClassicSearchAlgorithms {
  public static quickReqBinarySearch<T>(arr: T[], value: T): number | null {
    if (!arr.length) return null;
    const average = Math.floor(arr.length - 1 / 2);

    if (value === arr[average]) {
      return average;
    } else if (value > arr[average]) {
      return this.quickReqBinarySearch(arr.slice(average + 1), value);
    }
    return this.quickReqBinarySearch(arr.slice(0, average), value);
  }

  public static reqBinarySearch<T>(
    array: T[],
    item: T,
    low: number = 0,
    high: number = array.length - 1,
  ): number | null {
    if (low <= high) {
      const middleIndex = (low + high) / 2;
      const middleItem = array[middleIndex];
      if (middleItem === item) {
        return middleIndex;
      } else if (item < middleItem) {
        // high = middleIndex - 1;
        return this.reqBinarySearch(array, item, low, middleIndex - 1);
      } else {
        // low = middleIndex + 1;
        return this.reqBinarySearch(array, item, middleIndex + 1, high);
      }
    }

    return null;
  }
}

class ClassicSortAlgorithms {
  private static partition<T>(array: T[], low: number, high: number): number {
    const pivotIndex = Math.floor(Math.random() * array.length);
    const pivotItem = array[pivotIndex];
    while (high >= low) {
      while (array[high] > pivotItem) {
        high--;
      }

      while (array[low] < pivotItem) {
        low++;
      }

      if (high >= low) {
        [array[low], array[high]] = [array[high], array[low]];
        high--;
        low++;
      }
    }
    return low;
  }

  public static bubbleSort(array: number[]): number[] {
    let swapped = false;
    const newArray: number[] = [...array];
    for (let i = 0; i < newArray.length; i++) {
      swapped = false;
      for (let j = 0; j < newArray.length; j++) {
        if (newArray[j] > newArray[j + 1]) {
          const temp = newArray[j];
          newArray[j] = newArray[j + 1];
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

  public static qSort<T>(array: T[]): T[] {
    if (array.length <= 1) return array;

    const newArray = [...array];

    const leftArr = [];
    const rightArr = [];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const centerItem = newArray.shift()!;
    const centerArr = [centerItem];

    while (newArray.length) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const currentItem = newArray.shift()!;

      if (currentItem === centerItem) {
        centerArr.push(currentItem);
      } else if (currentItem < centerItem) {
        leftArr.push(currentItem);
      } else {
        rightArr.push(currentItem);
      }
    }

    const leftArrSorted = this.qSort(leftArr);
    const rightArrSorted = this.qSort(rightArr);

    return leftArrSorted.concat(centerArr, rightArrSorted);
  }

  @measure
  public static quickSort<T>(array: T[], low = 0, high = array.length - 1): T[] {
    if (low < high && array.length > 1) {
      const lowIndex = this.partition(array, low, high);
      this.quickSort(array, low, lowIndex - 1);
      this.quickSort(array, lowIndex, high);
    }
    return array;
  }

  private static searchMin<T>(array: T[]): number {
    let minValue = array[0];
    let minIndex = 0;
    for (let i = 0; i < array.length; i++) {
      if (minValue > array[i]) {
        minValue = array[i];
        minIndex = i;
      }
    }
    return minIndex;
  }

  @measure
  public static selectionSort<T>(array: T[]): T[] {
    let newArray = [];
    const len = array.length;
    for (let i = 0; i < len; i++) {
      const minIndex = this.searchMin(array);
      newArray.unshift(...array.splice(minIndex, 1));
    }
    return newArray;
  }
}

class ClassicCommonAlgorithms {
  @measure
  public static factorial(number: number, running = 1): number {
    if (number < 1) return running;
    return this.factorial(number - 1, running * number);
  }

  public static sum(number: number[], running = 0): number {
    if (number.length <= 0) return running;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const item = number.pop()!;
    return this.sum(number, running + item);
  }
}

console.log(ClassicCommonAlgorithms.sum([2, 4, 6]));
