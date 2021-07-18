function quickSort(array){
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
}

module.exports = quickSort;