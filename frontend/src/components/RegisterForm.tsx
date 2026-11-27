import { useForm } from 'react-hook-form'
import type { RegisterRequest } from '../types/register'
import { useRegisterMutation } from '../api/baseApi'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export function RegisterForm() {
    const { register, handleSubmit, setError, formState: { errors } } = useForm<RegisterRequest>({
        mode: "onChange"
    })
    const [registerUser] = useRegisterMutation()
    async function onSubmit(data: RegisterRequest) {
        try {
            const response = await registerUser(data).unwrap()
            if(response) return
        } catch (error) {
            if (typeof error === 'object' && error !== null && 'status' in error) {
                const apiError = error as FetchBaseQueryError
                const data = apiError.data;
                if (
                    typeof data === 'object' &&
                    data !== null &&
                    'message' in data &&
                    typeof data.message === 'string'
                ) {
                    setError('root', {
                        message: data.message
                    });
                }
            }
        }
    }
    return (
        <div className="form-container">
            <h2>Sing Up</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email", {
                    validate: (value) => {
                        if (!value.includes("@") || !value.includes(".")) return 'Email must include @ and .'
                        if (!Number.isNaN(Number(value[0]))) return "Email can't start with a number"
                        return true
                    },
                    required: 'Wrong email address',
                    maxLength: { value: 50, message: 'Too many signs' }
                    })}
                    placeholder='Write your email' required 
                />

                {errors.email && <p className='error'> {errors.email.message}</p>}

                <input type="password" {...register("password", {
                    required: 'Wrong email address',
                    minLength: { value: 8, message: 'Too few signs' },
                    maxLength: { value: 30, message: 'Too many signs' }
                })} placeholder='Create your password' required />

                {errors.password && <p className='error'> {errors.password.message}</p>}

                <button type='submit'>Sing up</button>

                {errors.root && <p className='error'> {errors.root.message}</p>}
            </form>
        </div>
    )
}