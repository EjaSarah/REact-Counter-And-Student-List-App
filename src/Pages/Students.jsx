import { useState } from "react";
import ButtonComponent from "../Components/ButtonComponent";

// import Count from "./Pages/Count";


// const App = () => {
//   return(
//     <div><Count /></div>
//   );
// };



function Students(){
  const [students, setStudents] = useState([
    // { id: 1, name: "Ada Bake", age: 20 }
  ]);
  const [formData, setFormData] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { id: students.length + 1, name: formData.name, age: parseInt(formData.age) };
    setStudents([...students, newStudent]);
    setFormData({ name: "", age: "" });
  };

  // to delete we make a shallow copy of what we have already so we can delete
  const deleteStudent = (id) => {
    const newStudent = [...students];
    const updateStudent = newStudent.filter((students) => students.id !==id);
    setStudents(updateStudent);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter your age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {/* <button type="submit">Add Student</button> */}
        <ButtonComponent text="Add Student" color="#fff" />
        

      </form>
      {/* ? ..the question mark here is called  optional chaining... so that when the datsa you want to fecth is not available..it wont break your cade*/}
      {students?.map((student) => (
        <div
          key={student.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid #000",
            padding: "5px",
            marginTop: "5px",
          }}
        >
          <p>{student.name}</p>
          <p>{student.age}</p>

          <ButtonComponent text="Delete" color="red"
           onClick={() => deleteStudent(student?.id)} />
        </div>
      ))}
    </div>
  );
}

export default Students;



