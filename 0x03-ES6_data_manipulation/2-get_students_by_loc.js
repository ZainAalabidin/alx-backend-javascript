const getStudentsByLocation = (listOfStudents, city) => {
  let studentAtLocation = [];
  studentAtLocation = listOfStudents.filter((student) => student.location === city);
  return studentAtLocation;
};

export default getStudentsByLocation;
