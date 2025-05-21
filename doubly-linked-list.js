class Node {
  constructor(valor) {
    this.valor = valor
    this.anterior = null
    this.proximo = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  inserirInicio(v) {
    let novo = new Node(v);
    if (!this.head) {
      this.head = this.tail = novo;
    } else {
      novo.proximo = this.head;
      this.head.anterior = novo;
      this.head = novo;
    }
    this.length++;
  }

  inserirFim(v) {
    let novo = new Node(v);
    if (!this.head) {
      this.head = this.tail = novo;
    } else {
      this.tail.proximo = novo;
      novo.anterior = this.tail;
      this.tail = novo;
    }
    this.length++;
  }

  inserirEm(indice, valor) {
    if (indice < 0 || indice > this.length)
      throw RangeError("Índice está fora dos limites!");
    if (indice === 0) return this.inserirInicio(valor);
    if (indice === this.length) return this.inserirFim(valor);

    let atual = this.head;

    for (let i = 0; i < indice; i++) {
      atual = atual.proximo;
    }

    let novo = new Node(valor);
    let noAnterior = atual.anterior;

    noAnterior.proximo = novo;
    novo.anterior = noAnterior;
    novo.proximo = atual;
    atual.anterior = novo;

    this.length++;
  }

  removerEm(indice) {
    if (indice < 0 || indice >= this.length)
      throw RangeError("Índice está fora dos limites!");

    let removido;

    if (this.length === 1) {
      removido = this.head;
      this.head = this.tail = null;
    } else if (indice === 0) {
      removido = this.head;
      this.head = this.head.proximo;
      this.head.anterior = null;
    } else if (indice === this.length - 1) {
      removido = this.tail;
      this.tail = this.tail.anterior;
      this.tail.proximo = null;
    } else {
      let atual = this.head;

      for (let i = 0; i < indice; i++) {
        atual = atual.proximo;
      }

      removido = atual;
      const { proximo, anterior } = atual;
      anterior.proximo = proximo;
      proximo.anterior = anterior;
    }
    this.length--;

    return removido.valor;
  }

  imprimirFrente() {
    let atual = this.head;
    let resultado = [];
    while (atual) {
      resultado.push(atual.valor);
      atual = atual.proximo;
    }
    console.log("Frente:", resultado.join(" <-> "));
  }

  imprimirAtras() {
    let atual = this.tail;
    let resultado = [];
    while (atual) {
      resultado.push(atual.valor);
      atual = atual.anterior;
    }
    console.log("Trás:", resultado.join(" <-> "));
  }
}

let lista = new DoublyLinkedList()

lista.inserirFim(10)
lista.inserirFim(20)
lista.inserirFim(30)
lista.inserirEm(1, 15)   // Insere 15 entre 10 e 20
lista.inserirInicio(5)   // Agora o 5 vira o primeiro

lista.imprimirFrente()   // Deve mostrar: Frente: 5 <-> 10 <-> 15 <-> 20 <-> 30
lista.imprimirAtras()    // Deve mostrar: Trás: 30 <-> 20 <-> 15 <-> 10 <-> 5

console.log("Removido:", lista.removerEm(2)) // Remove o 15 (posição 2)
lista.imprimirFrente()   // Deve mostrar: Frente: 5 <-> 10 <-> 20 <-> 30
