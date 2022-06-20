import "../styles/style.css";

const app = document.querySelector("#app")! as HTMLDivElement;

const person = {
  name: "Saman",
  lastname: "Safaei",
  age: 20
};

app.innerHTML = `
  <p><strong>This is the power of typescript</strong></p>
  <p>name : ${person.name} </p>
  <p>lastname : ${person.lastname} </p>
  <p>age : ${person.age} </p>
`;