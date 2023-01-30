import Comparator from '../../utils/comporator/Comparator';
import LinkedListNode from './LinkedListNode';

export default class LinkedList<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  compare: Comparator

  constructor() {
    this.head = null;
    this.tail = null;
    // this.compare = new Comparator(comparatorFunction);
  }

  append(value: T) {
    const newNode = new LinkedListNode<T>(value);

    if (!this.head) {
      this.head = newNode;
    }
  }

  toArray() {
    const nodes: LinkedListNode<T>[] = [];

    let currentNode: LinkedListNode<T> = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(callback?) {
    return this.toArray().map((node) => node.toString(callback)).toString();
  }
}
