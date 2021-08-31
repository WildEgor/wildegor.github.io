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
    if (low < high) {
      const lowIndex = this.partition(array, low, high);
      this.quickSort(array, low, lowIndex - 1);
      this.quickSort(array, lowIndex, high);
    }
    return array;
  }
}

const sortedArr = ClassicSortAlgorithms.quickSort([2, 4, 4, 5, 1, 4, 2]);

console.log(ClassicSearchAlgorithms.quickReqBinarySearch(sortedArr, 5));
