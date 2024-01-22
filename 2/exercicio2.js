const fibonacci = (n) => {

    let penultimo = 1;
    let ultimo = 2;
    let resultado = 0;

    let valoresPares = []
    let somaPares = 0;

    let sequencia = [penultimo, ultimo];

        for (let i = 0; ultimo <= n; i++) {

            resultado = penultimo + ultimo;
            penultimo = ultimo;

            ultimo % 2 == 0 ? valoresPares.push(ultimo) : null;
            ultimo = resultado;

            sequencia.push(resultado);
        }

        for (let i = 0; i < valoresPares.length; i++) {
            somaPares += valoresPares[i];
        }

        return somaPares + ` (Soma dos termos pares: ${valoresPares})`
}

console.log(fibonacci(prompt('Digite o valor de n:')));