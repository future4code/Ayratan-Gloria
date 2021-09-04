function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let numeroApareceu = 0
  for(var i = 0; i < arrayDeNumeros.length;i++) {
    if(numeroEscolhido === arrayDeNumeros[i]) numeroApareceu = numeroApareceu + 1
  }
  if(numeroApareceu > 0) return `O número ${numeroEscolhido} aparece ${numeroApareceu}x`
  else return "Número não encontrado"
}
  