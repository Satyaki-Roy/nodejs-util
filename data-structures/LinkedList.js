/** Node in the linked list **/
function Node(element) {
  // Data in the node
  this.element = element;
  // Pointer to the next node
  this.next = null;
}

function LinkedList() {
  // initializing length=0
  let length = 0;
  // initializing empty head
  let head = null;
  // returns the size of the LinkedList
  this.size = function () {
    return length;
  };
  // returns the element of the head
  this.head = function () {
    return head;
  };
  // Add another node at the tail
  this.add = function (element) {
    // instance of the Node
    const node = new Node(element);
    // If this is the first element of the Linked List
    if (head == null) {
      head = node;
    } else {
      // if elements are already present
      let currentNode = head;
      // check each node stop when currentNode.next !== null
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      // add the next node here
      currentNode.next = node;
    }
    // increase the length
    length++;
  };
  // Remove certain node
  this.remove = function (element) {
    let currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };
  this.isEmpty = function () {
    return length === 0;
  };
  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;
    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };
  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };
  this.addAt = function (index, element) {
    var node = new Node(element);
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index > length) {
      return false;
    }
    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };
  this.removeAt = function (index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentIndex.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };
}
