let n = prompt('Digite a quantidade de números para a lista:')

let arrLista = []

for (let i = 0; i < n; i++) {
    arrLista.push(parseFloat(prompt(`Digite o ${i}° número da lista:`)))
}

const subconjuntos = (lista, k) => {
    let subconjuntos = [];
    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length; j++) {
            for (let l = 0; l < lista.length; l++) {
                if (lista[i] + lista[j] == k) {
                    if (subconjuntos.indexOf([lista[i], lista[j]]) == -1) {
                        subconjuntos.push([lista[i], lista[j]]);
                    }
                }
                if (lista[i] + lista[l] == k) {
                    if (subconjuntos.indexOf([lista[i], lista[l]]) == -1) {
                        subconjuntos.push([lista[i], lista[l]]);
                    }
                }
                if (lista[l] + lista[j] == k) {
                    if (subconjuntos.indexOf([lista[l], lista[j]]) == -1) {
                        subconjuntos.push([lista[l], lista[j]]);
                    }
                }
                if (lista[l] + lista[j] + lista[i]== k) {
                    if (subconjuntos.indexOf([lista[l], lista[j], lista[i]]) == -1) {
                        subconjuntos.push([lista[l], lista[j], lista[i]]);
                    }
                }
            }
        }
    }

    console.log(`soma_subconjuntos([${arrLista}], ${k})`)  
    console.log(subconjuntos);
}
subconjuntos(arrLista, prompt('Digite o número do valor determinado para a soma:'))