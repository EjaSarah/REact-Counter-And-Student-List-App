// import { useState } from 'react';

// function Students() {
//     const [students, setStudents] = useState([
//       { id: 1, name: "Ada Beke", age: 20 }
//     ]);
//     const [formData, setFormData] = useState({ name: "", age: "" });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const newStudent = { id: students.length + 1, name: formData.name, age: parseInt(formData.age) };
//       setStudents([...students, newStudent]);
//       setFormData({ name: "", age: "" });
//     };
  
//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             placeholder="Enter your age"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//           />
//           <button type="submit">Add Student</button>
//         </form>
//         {students.map((student) => (
//           <div
//             key={student.id}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               border: "1px solid #000",
//               padding: "5px",
//               marginTop: "5px",
//             }}
//           >
//             <p>{student.name}</p>
//             <p>{student.age}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// export default Students;  