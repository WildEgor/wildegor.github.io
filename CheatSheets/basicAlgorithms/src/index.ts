// import { measure } from 'helpful-decorators';

class ClassicAlgorithms {
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

  // @measure
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

  // @measure
  public static quickSort<T>(array: T[], low = 0, high = array.length - 1): T[] {
    if (low < high) {
      const lowIndex = this.partition(array, low, high);
      this.quickSort(array, low, lowIndex - 1);
      this.quickSort(array, lowIndex, high);
    }
    return array;
  }

  public static binarySearch() {}
}

console.log(ClassicAlgorithms.quickSort([2, 4, 4, 5, 1, 4, 2]));
console.log(ClassicAlgorithms.qSort([2, 4, 4, 5, 1, 4, 2]));

