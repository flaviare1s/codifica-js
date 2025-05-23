class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(value) {
    let NewNode = Node(value)
    NewNode.next = this.top
    this.top = NewNode
  }

  pop() {
    if(!this.top) return null
    let poppedValue = this.top.value
    this.top = this.next
    return poppedValue
  }

  peek() {
    if (!this.top) return null;
    return this.top.value
  }

  isEmpty() {
    return this.top === null
  }
}
