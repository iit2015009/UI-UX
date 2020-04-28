class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}
var head = null;

function insertAtFront(head, data) {
  let newNode = new Node(data);

  if (head === null) {
    return newNode;
  }
  head.next = newNode;
  return newNode;
}

head = insertAtFront(head, 50);
head = insertAtFront(head, 60);
