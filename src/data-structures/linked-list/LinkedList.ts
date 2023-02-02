import Comparator from '../../utils/comporator/Comparator';
import LinkedListNode from './LinkedListNode';

export default class LinkedList<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  compare: Comparator<T>

  constructor(comparatorFunction?) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  append(value: T): LinkedList<T> {
    const node = new LinkedListNode<T>(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;

      return this
    }

    this.tail.next = node;
    this.tail = node;

    return this;
  }

  prepend(value): LinkedList<T> {
    const node = new LinkedListNode<T>(value, this.head)
    this.head = node

    if (!this.tail) {
      this.tail = node
    }

    return this
  }

  delete(value): LinkedListNode<T> {
    if (!this.head) {
      return null
    }

    let deletedNode = null

    while (this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }


  }

  toArray(): LinkedListNode<T>[] {
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
