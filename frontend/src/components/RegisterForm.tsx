import {useForm} from 'react-hook-form'
import type { RegisterRequest } from '../types/register'
import { useRegisterMutation } from '../api/baseApi'

export function RegisterForm(){
    const {register, handleSubmit} = useForm<RegisterRequest>()
    const [registerUser] = useRegisterMutation()
    async function onSubmit(data: RegisterRequest){
        try{
            const response = await registerUser(data).unwrap()
            alert(JSON.stringify(response))
        } catch(error){
            alert(JSON.stringify(error))
        }
    }
    return(
        <div className ="form-container">
            <h2>Registration</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email")} placeholder='Write your email' required/>
                <input type="password" {...register("password")} placeholder='Create your password' required/>
                <button type='submit'>Sing up</button>
            </form>
        </div>
    )
}