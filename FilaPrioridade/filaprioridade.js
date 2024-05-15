class No {
    constructor(dado, cor) {
        this.dado = dado;
        this.cor = cor;
        this.proximo = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.head = null;
    }

    inserirPorPrioridade(dado, cor) {
        const novoNo = new No(dado, cor);

        if (!this.head || cor === 'amarelo') {
            novoNo.proximo = this.head;
            this.head = novoNo;
            return;
        }

        let atual = this.head;

        while (atual.proximo && atual.proximo.cor !== 'verde') {
            atual = atual.proximo;
        }

        novoNo.proximo = atual.proximo;
        atual.proximo = novoNo;
    }

    imprimirLista() {
        let atual = this.head;
        while (atual) {
            console.log(`Dado: ${atual.dado}, Cor: ${atual.cor}`);
            atual = atual.proximo;
        }
    }
}

const lista = new ListaEncadeada();
lista.inserirPorPrioridade('Item 1', 'verde');
lista.inserirPorPrioridade('Item 2', 'amarelo');
lista.inserirPorPrioridade('Item 3', 'verde');
lista.inserirPorPrioridade('Item 4', 'amarelo');
lista.inserirPorPrioridade('Item 5', 'verde');
lista.inserirPorPrioridade('Item 6', 'amarelo');

console.log("Lista Encadeada:");
lista.imprimirLista();
