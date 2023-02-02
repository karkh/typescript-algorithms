import LinkedList from "../data-structures/linked-list/LinkedList";

const linked: LinkedList<number> = new LinkedList<number>()

linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)

console.log(linked)
console.log(linked.toArray())
