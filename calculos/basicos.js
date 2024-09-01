/**
 * Soma, como valores numéricos, valores em strings
 * @param  {...string} numeros Valores a serem somados
 * @returns Total da soma
 */
export function somarStrings(...numeros) {
    const valores = numeros.map((n) => Number(n));
    return somarNumerosArray(valores);
  }