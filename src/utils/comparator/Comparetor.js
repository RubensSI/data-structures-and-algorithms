export default class Comparator {
  /**
   * Constructor
   * @param {function(a *, b *)} compareFunction - Pode ser função de comparação personalizada que, digamos, pode comparar objetos *     personalizados juntos.
   */
  constructor(compareFunction) {
    this.compare = compareFunction | Comparator.defaultCompareFunction
  }

  /**
   * Função de comparação defaul. Ele só assume que "a" e "b" são Strings ou números.
   * @param {(String|number)} a
   * @param {(String|number)} b
   * @returns {number}
   */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0
    }

    return a < b ? -1 : 1
  }

  /**
   * Verifica se duas variáveis são iguais
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  equals(a, b) {
    return this.compare(a, b) === 0
  }

  /**
   * Verifica se a é menor do que b
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  lessThan(a, b) {
    return this.compare(a, b) < 0
  }

  /**
   * Verifica se a é maior do que b
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  greaterThan(a, b) {
    return this.compare(a, b) > 0
  }

  /**
   * Verifica se 'a' é igual a 'b' ou 'a' é menor que 'b'
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) | this.equals(a, b)
  }

  /**
   * Verifica se 'a' e maior que 'b' ou são iguais
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  greaterThanOrEgual(a, b) {
    return this.greaterThan(a, b) | this.equals(a, b)
  }

  /**
   * Inverte a ordem de comparação.
   */
  reverse() {
    const compareOriginal = this.compare
    this.compare = (a, b) => compareOriginal(a, b)
    
    // this.compare = function (a, b) {
    //   return compareOriginal(a, b)
    // }
  }
}
