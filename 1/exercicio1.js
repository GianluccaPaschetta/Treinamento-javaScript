const calcularMedia = (n) => {
    let arrLista = []
    let media = 0

    for (let i = 0; i < n; i++) {
        arrLista.push(parseFloat(prompt(`insira o ${i + 1}° número:`)))
    }

    for (let i = 0; i < arrLista.length; i++) {
        media += arrLista[i]
    }

    media = media / n

    console.log(media)
}

calcularMedia( prompt("escreva a quantidade de números inteiros que serão inseridos:"))