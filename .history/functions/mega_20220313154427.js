export function mega (qtde = 6, numeros = []) {

  if (qtde < 6 && qtde >60) {
    throw "Quantidade Invalida"
  }

  if (numeros.length === qtde) {
    return numeros
  }

  const numeroAleatorio = parseInt(Math.random() * 60) + 1
  if (!numeros.includes(numeroAleatorio)) {
    return mega(qtde,[...numeros])
  }
}