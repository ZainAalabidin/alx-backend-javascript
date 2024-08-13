const getListStudentIds = (listStudents) => {
  let listStudentsId = [];
  if (listStudents instanceof Array) {
    listStudentsId = listStudents.map((student) => student.id);
    return listStudentsId;
  }
  return listStudentsId;
};

export default getListStudentIds;
