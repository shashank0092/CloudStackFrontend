import { Formik, Field, Form } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Loader from '../../Components/Loader';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginSchema } from './schema/LoginSchema';
import { LoginUser } from './api/LoginUser';


const Login = () => {

    const [isLoading, setLoading] = useState(false)
    const navigate=useNavigate()
    return (
        <>


            <div className='h-[100vh] flex flex-col gap-5 justify-center items-center bg-purple-100 ' >

                <div>
                    <p className=' text-7xl text-gray-700 font-semibold' >Login Here</p>
                </div>

                {

                    <>
                        <div className='border-2 border-black p-20 rounded-lg' >
                            <Formik
                                initialValues={{
                                    userdetails:"",
                                    password: ""
                                }}
                                validationSchema={LoginSchema}
                                onSubmit={
                                    async (e) => {
                                        setLoading(true)
                                        console.log(e,"shukla mera bhai")
                                        const LoginUserData = await LoginUser(e.userdetails,e.password)
                                        console.log(LoginUserData,"this is hukla")
                                        localStorage.setItem('userdetails',e.userdetails)
                                        localStorage.setItem('token',LoginUserData?.token)
                                        toast(LoginUserData?.message, {
                                            position: "top-center",
                                            autoClose: 3000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "dark",
                                        });



                                        setLoading(false)

                                       
                                        setTimeout(()=>{
                                            navigate("/profile")
                                        },4000)
                                       
                                    }
                                }
                            >
                                {

                                    ({ errors, touched }) => (
                                        <Form className='flex flex-col gap-10 justify-center items-center' >
                                            <div  >
                                                <Field
                                                    id="userdetails"
                                                    name="userdetails"
                                                    type="text"
                                                    placeholder="Enter EmailID Or User Name"

                                                    className='w-96 border border-black p-3 rounded-full text-black font-bold text-center'
                                                />
                                                {errors.userdetails && touched.userdetails ? (
                                                    <div>
                                                        <p className='text-red-700 font-semibold text-xs' >{errors.userdetails}*</p>
                                                    </div>
                                                ) : null}
                                            </div>

                                            <div>
                                                <Field
                                                    id="password"
                                                    name="password"
                                                    type='password'
                                                    placeholder="Enter Password Here"

                                                    className='w-96 border border-black p-3 rounded-full text-black font-bold text-center'
                                                />
                                                {errors.password && touched.password ? (
                                                    <div><p className='text-red-700 font-semibold text-xs' >{errors.password}*</p></div>
                                                ) : null}
                                            </div>

                                            <div  >
                                                <button type="submit" className='font-bold bg-green-600 p-3 rounded-full px-10 border-black border-2  ' >{isLoading === false ? (`Submit`) : (<Loader />)}</button>
                                            </div>
                                        </Form>
                                    )

                                }

                            </Formik>
                        </div>
                    </>
                }
            </div>

            

            <ToastContainer />
        </>
    )
}

export default Login;