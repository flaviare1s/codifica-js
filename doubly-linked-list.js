class Node {
  constructor(valor) {
    this.valor = valor
    this.anterior = null
    this.proximo = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
  }

  inserirInicio(v) {
    let novo = new Node(v)
    novo.proximo = this.head
    if(this.head) {
      this.head.anterior = novo
    }
    this.head = novo
  }

  inserirFim(v) {
  }

  imprimirFrente() {

  }

  imprimirAtras() {

  }
}
