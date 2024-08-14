const getStudentIdsSum = (students) => students.reduce((preval, curr) => preval + curr.id, 0);

export default getStudentIdsSum;
