function calcularPrecoAssento(assentoId) {
    const coluna = assentoId[0];
    const linha = assentoId[1];

    let preco;

    // calcular preço base
    if (['1', '2', '3', '7', '8', '9'].includes(linha)) {
        preco = 1000;
    } else {
        preco = 800;
    }
    // acrésimo coluna
    if (['D', 'E', 'F', 'G'].includes(coluna)) {
        preco += preco * 0.05;
    }
    // acrécimos fileiras
    if (['1', '9'].includes(linha)) {
        preco += preco * 0.5;
    } else if (['3', '4', '6', '7'].includes(linha)) {
        preco -= preco * 0.2;
    }

    return preco;
}

function formatarValorEmReais(n) {
    const value = n.toFixed(2).toString().replace('.', ',');
    return 'R$' + value;
}
