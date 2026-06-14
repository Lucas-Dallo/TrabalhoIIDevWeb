// 1 - TRIÂNGULO
function verificarTriangulo() {
    const a = Number(document.getElementById("lado1").value);
    const b = Number(document.getElementById("lado2").value);
    const c = Number(document.getElementById("lado3").value);

    const tela = document.getElementById("resultado");

    if (a + b <= c || a + c <= b || b + c <= a) {
        tela.innerHTML = "❌ Não é possível formar um triângulo";
        return;
    }

    let tipo =
        (a === b && b === c) ? "Equilátero" :
        (a === b || a === c || b === c) ? "Isósceles" :
        "Escaleno";

    tela.innerHTML = `✅ Triângulo ${tipo}`;
}


// 2 - IMC
function calcularIMC() {
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

    const visor = document.getElementById("resultado");
    const imc = peso / Math.pow(altura, 2);

    let classificacao;

    switch (true) {
        case imc < 18.5:
            classificacao = "Abaixo do peso";
            break;
        case imc < 25:
            classificacao = "Peso ideal";
            break;
        case imc < 30:
            classificacao = "Sobrepeso";
            break;
        case imc < 35:
            classificacao = "Obesidade Grau I";
            break;
        case imc < 40:
            classificacao = "Obesidade Grau II";
            break;
        default:
            classificacao = "Obesidade Grau III";
    }

    visor.innerHTML = `IMC calculado: ${imc.toFixed(2)}<br>${classificacao}`;
}


// 3 - IMPOSTO
function calcularImposto() {
    const ano = Number(document.getElementById("ano").value);
    const preco = Number(document.getElementById("valor").value);

    const porcentagem = ano < 1990 ? 0.01 : 0.015;
    const imposto = preco * porcentagem;

    document.getElementById("resultado").innerHTML =
        `Valor do imposto: R$ ${imposto.toFixed(2)}`;
}


// 4 - SALÁRIO
function calcularSalario() {
    const base = Number(document.getElementById("salario").value);
    const cargo = Number(document.getElementById("cargo").value);

    const tabela = {
        101: 10,
        102: 20,
        103: 30
    };

    const taxa = tabela[cargo] || 40;

    const aumento = base * taxa / 100;
    const atualizado = base + aumento;

    document.getElementById("resultado").innerHTML = `
        Salário Atual: R$ ${base.toFixed(2)}<br>
        Salário Reajustado: R$ ${atualizado.toFixed(2)}<br>
        Aumento Recebido: R$ ${aumento.toFixed(2)}
    `;
}


// 5 - CRÉDITO
function calcularCredito() {
    const saldo = Number(document.getElementById("saldo").value);

    let credito = 0;

    if (saldo > 600) credito = saldo * 0.40;
    else if (saldo > 400) credito = saldo * 0.30;
    else if (saldo > 200) credito = saldo * 0.20;

    document.getElementById("resultado").innerHTML = `
        Saldo Médio: R$ ${saldo.toFixed(2)}<br>
        Crédito Disponível: R$ ${credito.toFixed(2)}
    `;
}


// 6 - LANCHONETE
function calcularLanche() {
    const codigo = Number(document.getElementById("codigo").value);
    const quantidade = Number(document.getElementById("quantidade").value);

    const cardapio = {
        1: 11,
        2: 8.5,
        3: 8,
        4: 9,
        5: 10,
        6: 4.5
    };

    const preco = cardapio[codigo] || 4.5;
    const total = preco * quantidade;

    document.getElementById("resultado").innerHTML =
        `Total do pedido: R$ ${total.toFixed(2)}`;
}


// 7 - VENDAS
function calcularVenda() {
    const valor = Number(document.getElementById("valor").value);
    const forma = document.getElementById("pagamento").value.toUpperCase();

    const opcoes = {
        A: valor * 0.90,
        B: valor * 0.85,
        C: valor,
        D: valor * 1.10
    };

    const total = opcoes[forma] || valor;

    document.getElementById("resultado").innerHTML =
        `Preço final: R$ ${total.toFixed(2)}`;
}


// 8 - PROFESSOR
function calcularProfessor() {
    const nivel = Number(document.getElementById("nivel").value);
    const aulas = Number(document.getElementById("aulas").value);

    const valores = {
        1: 12,
        2: 17,
        3: 25
    };

    const valorHora = valores[nivel] || 0;
    const salario = valorHora * aulas * 4.5;

    document.getElementById("resultado").innerHTML =
        `Salário mensal: R$ ${salario.toFixed(2)}`;
}