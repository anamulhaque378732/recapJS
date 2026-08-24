let students = [
  { id: 101, name: "Anamul", age: 25, department: "MATH" },
  { id: 102, name: "rai", age: 25, department: "history" },
  { id: 103, name: "Sum", age: 25, department: "MATH" },
];

function addStudent(name, age, dept) {
  let newId = students.length > 0 ? students[students.length - 1].id + 1 : 101;

  let newStudent = {
    id: newId,
    name,
    age,
    dept,
  };

  students.push(newStudent);
  console.log("student added successfully");
}

// addStudent("Fahim", 36, "physics");
// console.log(students);

function getAll() {
  for (let student of students) {
    console.log(student);
  }
}
// getAll();

function findStudent(id) {
  let foundStudent = null;

  for (let student of students) {
    if (student.id == id) {
      foundStudent = student;
      break;
    }
  }

  if (foundStudent) {
    console.log("Found student :", foundStudent);
  } else {
    console.log("404 not found");
  }
}

// findStudent(108);

function deleteStudent(id) {
  let targetStudent = -1;

  for (let i = 0; i < students.length; i++) {
    if (students[i].id == id) {
      targetStudent = i;
      break;
    }
  }
  if (targetStudent !== -1) {
    let deletedStd = students.splice(targetStudent, 1);
    console.log(`deleted ${deletedStd[0].name} id:${targetStudent}`);
  } else {
    console.log("404 not found");
  }
}

deleteStudent(101);
getAll();
