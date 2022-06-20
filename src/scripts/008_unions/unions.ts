function combine1(input1: number | string, input2: number | string) {
  // return input1 + input2; // It's not excepted //

  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

// Used to except multiple types in function params //

// -------------------------------------------------------------- Literal Types

function combine2(
  input1: number | string,
  input2: number | string,
  point: "as-text" | "as-number"
) {
  if (typeof input1 === "number" && typeof input2 === "number" && point === 'as-number') {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

combine2(2, 3, 'as-text') // return 23
combine2(2, 3, 'as-number') // return 5