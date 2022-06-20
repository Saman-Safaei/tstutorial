type combinable = string | number;
type point = "as-text" | "as-number";

// -------------------------------------------------------------- Literal Types with aliases

function combine2(input1: combinable, input2: combinable, point: point) {
  if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    point === "as-number"
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

combine2(2, 3, "as-text"); // return 23
combine2(2, 3, "as-number"); // return 5
