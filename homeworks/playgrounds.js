const students = [
  {
    name: "peter",
    grades: {
      math: 3,
      eng: 3,
    },
  },
  {
    name: "mary",
    grades: {
      math: 4,
      eng: 4,
    },
  },
];

const getAvragesGrades = (students) => {
  // separate each student obj
  return students.map((student) => {
    return {
      name: student.name,
      average:
        Object.values(student.grades).reduce((acc, grade) => acc + grade, 0) /
        Object.values(student.grades).length,
    };
  });
};

const grades = {
  math: 3,
  eng: 4,
};
console.log(getAvrages(students));
