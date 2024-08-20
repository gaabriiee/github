/**
 * Subtrai valores numéricos
 * @param  {...number} numeros Valores a serem subtraídos
 * @returns Total da subtração
 */
export function subtrairNumeros(...numeros) {
  return numeros.reduce((total, proximo) => total - proximo, 0);
}

/**
 * Subtrai valores numéricos presentes em um array
 * @param {number} numeros Valores a serem subtraídos
 * @returns Total da subtração
 */
export function subtrairNumerosArray(numeros) {
  return numeros.reduce((total, proximo) => total - proximo, 0);
}
