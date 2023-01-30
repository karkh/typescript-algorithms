import LinkedListNode from "../LinkedListNode";

describe('LLN', () => {
  it('should create list node with value', () => {
    const node = new LinkedListNode<number>(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });
})
