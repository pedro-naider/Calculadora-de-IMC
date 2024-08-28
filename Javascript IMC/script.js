const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        alert('Valores Preenchidos.');
        const calculo = (peso / (altura * 2)).toFixed(2);
        let classificacao = '';

        if (calculo < 18.5) { classificacao = 'abaixo do peso!' }
        else if (calculo < 24.5) { classificacao = 'no peso ideal!' }
        else if (calculo < 30) { classificacao = 'acima do peso!' }
        else if (calculo < 35) { classificacao = 'em obesidade grau I!' }
        else if (calculo < 40) { classificacao = 'em obesidade grau II!' }
        else if (calculo < 41) { classificacao = 'em obesidade grau III!' }
        // } else (calculo < 24.5) {classificacao = 'você está no peso ideal'}

        resultado.textContent = `${nome} o seu IMC é:  ${calculo}. Você está ${classificacao}`;

    } else {
        alert('Preencha todos os campos!'), resultado.textContent = 'É necessário todos os campos preenchidos!';
    }

}

calcular.addEventListener('click', imc);
