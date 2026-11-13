// Integration an existing Form
import { useForm } from 'react-hook-form';
import Input from './Input';

function Forms3(){
    const {register,handleSubmit}=useForm();

    const onSubmit=(data)=>{
        alert("form is submitted successfully");
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Student name"
              name="name"
              register={register}
              required
              />
            
            <Input
              label="Email"
              name="email"
              register={register}
              required
              />
            
            <button type="submit">Submit</button>
        </form>
    );
}

export default Forms3;