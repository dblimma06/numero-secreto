
alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000; //seria de 1 até o número que colocar aí
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas += 1;
        tentativas ++;
        console.log(tentativas)
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você Acertou!!! O número era ${numeroSecreto} e você acertou com ${tentativas} ${palavraTentativa} :)`)

//if (tentativas > 1) {
//alert(`Você Acertou!!! O número era ${numeroSecreto} e você acertou com ${tentativas} tentativas :)`)
//} else {
//    alert(`Você Acertou!!! O número era ${numeroSecreto} e você acertou com ${tentativas} tentativa :)`)
// }