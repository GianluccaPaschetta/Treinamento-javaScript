transacoes = [
    { id: 0, valor: 1000.00, hora: "00:00:00" },
    { id: 1, valor: 100.00, hora: "12:00:00" },
    { id: 2, valor: 1500.00, hora: "12:05:00" },
    { id: 3, valor: 200.00, hora: "13:10:00" },
    { id: 4, valor: 300.00, hora: "13:40:00" },
    { id: 5, valor: 400.00, hora: "14:20:00" },
    { id: 6, valor: 1200.00, hora: "15:00:00" },
    { id: 7, valor: 3000.00, hora: "15:40:00" },
    { id: 8, valor: 1200.00, hora: "16:20:00" },
    { id: 9, valor: 500.00, hora: "17:00:00" },
    { id: 10, valor: 600.00, hora: "17:40:00" },
    { id: 11, valor: 800.00, hora: "19:30:00" },
    { id: 12, valor: 700.00, hora: "19:40:00" },
]


const detectarFraudes = (transacoes) => {
    fraudes = []
    horaGuardada = 0
    minutoGuardado = 0

    for (let i = 0; i < transacoes.length; i++) {
        if (i < 5) {
            if (transacoes[i].valor > transacoes[0].valor) {
                horaGuardada = transacoes[i].hora.split(":")[0]
                minutoGuardado = transacoes[i].hora.split(":")[1]
                fraudes.push(transacoes[i].id)
                transacoes.splice(i, 1)
            }
        } else {
            
            if (transacoes[i].valor > (transacoes[i - 1].valor + transacoes[i - 2].valor + transacoes[i - 3].valor + transacoes[i - 4].valor + transacoes[i - 5].valor) * 1.2) {
                horaGuardada = transacoes[i].hora.split(":")[0]
                minutoGuardado = transacoes[i].hora.split(":")[1]
                console.warn(minutoGuardado + ":" + horaGuardada);
                fraudes.push(transacoes[i].id)
                transacoes.splice(i, 1)
            }
            if (transacoes[i].hora.split(":")[0] <= horaGuardada || transacoes[i].hora.split(":")[0] - horaGuardada == 1 && transacoes[i].hora.split(":")[1] <= minutoGuardado) {
                horaGuardada = transacoes[i].hora.split(":")[0]
                minutoGuardado = transacoes[i].hora.split(":")[1]
                fraudes.push(transacoes[i].id)
                transacoes.splice(i, 1)
            }
        }


    }
    console.log(transacoes);
    console.log(fraudes);
}

detectarFraudes(transacoes);