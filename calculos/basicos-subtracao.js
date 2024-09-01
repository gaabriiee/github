/**
 * Subtrai, como valores numéricos, valores presentes em um array de strings
 * @param {number} numeros Valores a serem substraídos
 * @returns Total da subtração
 */
export function subtrairStringsArray(numeros) {
    const valores = numeros.map((n) => Number(n));
    return subtrairNumerosArray(valores);
  }