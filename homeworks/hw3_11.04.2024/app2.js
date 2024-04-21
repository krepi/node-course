const getAverage = (grades) => {
    const total = Object.values(grades).reduce((acc, grade) => acc + grade, 0);
    return total / Object.keys(grades).length;
  };
  
  const getStudentInfo = (student) => ({ name: student.name, average: getAverage(student.grades) });
  
  const getAverageGrade = (students) => students.map(getStudentInfo);

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

console.log(getAverageGrade(students));