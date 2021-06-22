import React from "react";
import { LinkedList } from "../../utils/LinkedList";
import { BitMath } from "../../utils/Bits";

const list = new LinkedList();
list.add(5);
list.add(3);
list.getIndexOf(5);
list.print();

console.log(BitMath.getBit(5, 2));
console.log(BitMath.setBit(4, 0));
console.log(BitMath.updateBit(5, 0, 0));

const Playground = () => {
  return <div></div>;
};

export default Playground;
