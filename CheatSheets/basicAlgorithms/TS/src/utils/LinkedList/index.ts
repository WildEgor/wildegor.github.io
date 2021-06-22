export class Node {
  value: number;
  next: Node;

  constructor(value: number) {
    //super();
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  private head: Node;
  private lenght: number;

  constructor() {
    //super();
    this.head = null;
    this.lenght = 0;
  }

  /**
   * name
   */
  public add(value: number) {
    const newItem = new Node(value);

    if (this.lenght === 0) {
      this.head = newItem;
    } else {
      let currentItem: Node = this.head;

      while (currentItem.next) {
        currentItem = currentItem.next;
      }

      currentItem.next = new Node(value);
    }
    this.lenght++;
  }

  /**
   * name
   */
  public insert(position: number, value: number) {
    if (!!this.isExistsPosition(position)) return false;

    const newItem = new Node(value);

    if (position === 0) {
      newItem.next = this.head;
      this.head = newItem;
    } else {
      let currentItem = this.head;
      let prevItem = null;
      let indx = 0;

      while (indx < position) {
        prevItem = currentItem;
        currentItem = currentItem.next;
        indx++;
      }

      prevItem.next = newItem;
      newItem.next = currentItem;
    }
    this.lenght++;
  }

  public getNodeByPosition(position: number): number {
    if (!!this.isExistsPosition(position)) return -1;

    let currentItem = this.head;
    let indx = 0;

    while (indx < position) {
      currentItem = currentItem.next;
      indx++;
    }

    return currentItem.value;
  }

  /**
   * removeFromPosition
   */
  public removeNodeFromPosition(position: number): number {
    if (!!this.isExistsPosition(position)) return -1;

    let currentItem = this.head;

    if (position === 0) {
      this.head = currentItem.next;
    } else {
      let prevItem = null;
      let indx = 0;

      while (indx < position) {
        prevItem = currentItem;
        currentItem = currentItem.next;
        indx++;
      }

      prevItem.next = currentItem.next;
    }

    this.lenght--;
    return currentItem.value;
  }

  public getIndexOf(value: number): number {
    let currentItem = this.head;
    let indx = 0;

    while (currentItem) {
      if (currentItem.value === value) return indx;
      currentItem = currentItem.next;
      indx++;
    }

    return -1;
  }

  /**
   * isEmpty
   */
  public isEmpty(): boolean {
    return this.lenght === 0;
  }

  /**
   * getLenght
   */
  public getLenght(): number {
    return this.lenght;
  }

  public print() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  private isExistsPosition(position: number): boolean {
    if (position < 0 || position > this.lenght) return false;
    return true;
  }
}
