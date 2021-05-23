const calc = document.getElementById('calc');



function gasoGasto () {
    
    const kmviagem = document.getElementById('kmviagem').value;
    const gasolina = document.getElementById('gasolina').value;
    const kmlitro = document.getElementById('kmlitro').value;
    const resultado = document.getElementById('resultado');

    if (kmviagem !== '' && gasolina !== '' && kmlitro !== '') {

        const gasto = ((kmviagem * gasolina.replace(',' , '.')) / kmlitro);


        resultado.textContent = `Você irá gastar: ${gasto.toLocaleString('pt-BR', {style: 'currency', currency:'BRL' })}`
    }
    else {

        window.alert('Por favor preencha todos os campos!')
    }

};

calc.addEventListener('click', gasoGasto);