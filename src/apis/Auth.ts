import { SignInRequest, SignUpRequest, AuthResponse } from '@/types/Auth'
import { axiosInstance } from './axios'

export const register = async (signUpData: SignUpRequest) => {
    const { data } = await axiosInstance.post<AuthResponse>('/register', signUpData)
    return data
}

export const login = async (signInData: SignInRequest) => {
    const { data } = await axiosInstance.post<AuthResponse>('/login', signInData)
    return data
}
