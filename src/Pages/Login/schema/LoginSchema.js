import * as Yup from 'yup';
export const LoginSchema = Yup.object().shape({
    userdetails: Yup.string().required('Required'),
    password: Yup.string().min(5, "Password Is Too Short").max(10, "Paasword Is Too Long").required("Required")

})