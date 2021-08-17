function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salarioFixo = 2000
  
  return salarioFixo + ((100 * qtdeCarrosVendidos) + (0.05 * valorTotalVendas))
}