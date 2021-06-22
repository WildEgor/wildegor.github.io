/* eslint-disable prettier/prettier */
class DoublyLinkedListNode {
  value: number;
  next: DoublyLinkedListNode;
  previous: DoublyLinkedListNode;

  constructor(value: number, next: DoublyLinkedListNode = null, previous: DoublyLinkedListNode = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
    private head: DoublyLinkedListNode;
    private tail: DoublyLinkedListNode;
    private lenght: number;

    /**
     *
     */
    constructor() {
        // super();
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }

    public prepend(value: number) {
        const newItem = new DoublyLinkedListNode(value, this.head);
    }

    public append() {}

    public delete() {}

    public find() {}

    public deleteTail() {}

    public deleteHead() {}


}
