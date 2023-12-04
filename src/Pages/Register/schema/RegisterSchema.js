import * as Yup from 'yup';
export const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Required'),
    username: Yup.string().min(3, "Username must have more than 3 character").max(10, "Username consists only 10 characters").required("Required"),
    password: Yup.string().min(5, "Password Is Too Short").max(10, "Paasword Is Too Long").required("Required")

})