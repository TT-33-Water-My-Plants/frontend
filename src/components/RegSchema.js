import * as yup from 'yup'

const RegSchema = yup.object().shape({
    username: yup
    .string()
    .required('Username is required')
    .min(5, 'Username must be at least 5 characters'),
    phoneNumber: yup
    .string()
    .required('This must be a valid phone number')
    .min(10, 'phone number is at least 10 characters' ),
    password: yup
    .string()
    .required('Password required')
    .min(6, 'Password must be at least 6 characters long')
})
export default RegSchema