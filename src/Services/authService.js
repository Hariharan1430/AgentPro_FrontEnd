const students = [
  {
    id: "STU101",
    password: "123456",
    name: "Hari",
    email: "hari@test.com",
  },
  {
    id: "STU102",
    password: "123456",
    name: "Arun",
    email: "arun@test.com",
  },
  {
    id: "STU103",
    password: "123456",
    name: "Priya",
    email: "priya@test.com",
  },
  {
    id: "STU104",
    password: "123456",
    name: "Rahul",
    email: "rahul@test.com",
  },
  {
    id: "STU105",
    password: "123456",
    name: "Divya",
    email: "divya@test.com",
  },
];

export function login(studentId, password) {
  return students.find(
    (student) =>
      student.id === studentId &&
      student.password === password
  );
}