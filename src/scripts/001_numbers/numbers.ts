const number1 = 1;           // this syntax is prefered //
const number2: number = 2;   // explicitly set type //
const number3 = <number> 2;  // another syntax //
const number4 = 2 as number; // another syntax //

/**
 * use in functions
 * @param {number} num1 - the first number to add
 * @param {number} num2 - the second number to add
 */
function sum(num1: number, num2: number): number {
  return num1 + num2;
}
