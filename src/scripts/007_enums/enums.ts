// It's a enum and each enum member have a number and start from zero // It's a human readable identifire //
enum Role {
  ADMIN,
  USER,
  GUEST,
}

// Another syntax //
enum Roles {
    ADMIN = 3,
    USER,
    GUEST
} // USER will be 4 and GUEST will be 5 //

// used for check user permision or similar things //
const person = {
  name: "Samuel",
  age: 18,
  role: Role.USER,
};

if (person.role === Role.USER) console.log("Samuel is a user");

