// Controller
// import { useForm, Controller } from "react-hook-form";
// function Controller1(){
//     const {Control,handleSubmit}=useForm({
//         defaultValues:{
//             course:""
//         }
//     });

//     const onSubmit=(data)=>{
//         alert("controller form submitted successfully");
//         console.log(data);
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>

//             <Controller
//                name="course"
//         control={control}
//         render={({ field }) => (
//           <select {...field}>
//             <option value="">Select Course</option>
//             <option value="React">React</option>
//             <option value="Python">Python</option>
//             <option value="Java">Java</option>
//           </select>
//         )}
//         />

//         <button type="submit">Submit</button>
//         </form>
//     );
// }

// export default Controller1;