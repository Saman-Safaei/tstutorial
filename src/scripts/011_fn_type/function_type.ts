function sum(num1: number, num2: number) {
  return num1 + num2;
}

function log(text:string) {
    console.log(text);
}

let showNum;
showNum = sum;
showNum = log; // it should be not happen //

let sumNum: (a: number, b: number) => number;
sumNum = sum;
// sumNum = log; // this will be throw an error ... nice . we want this behavior .