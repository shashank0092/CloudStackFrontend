import { Formik, Field, Form } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Loader from '../../Components/Loader';
import { useState } from 'react';
import { RegisterUser } from './api/RegisterUser';
import { RegisterSchema } from './schema/RegisterSchema';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/Store';


const Register = () => {

    const{FCMToken}=useGlobalContext()
    console.log(FCMToken,"THIS IS MY GLOBAL FIREBASE TOKEN ON REGISTER FILE")
    const [isLoading, setLoading] = useState(false)
    const navigate=useNavigate()
    return (
        <>


            <div className='h-[100vh] flex flex-col gap-5 justify-center items-center bg-purple-100 ' >

                <div>
                    <p className=' text-7xl text-gray-700 font-semibold' >Register Here</p>
                </div>

                {

                    <>
                        <div className='border-2 border-black p-20 rounded-lg' >
                            <Formik
                                initialValues={{
                                    email: "",
                                    username: "",
                                    password: ""
                                }}
                                validationSchema={RegisterSchema}
                                onSubmit={
                                    async (e) => {
                                        setLoading(true)

                                        const userRegister = await RegisterUser(e.email, e.username, e.password,FCMToken.toString())
                                        console.log(userRegister,"this is hukla")
                                        toast(userRegister?.message, {
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
                                            navigate("/login")
                                        },4000)
                                       
                                    }
                                }
                            >
                                {

                                    ({ errors, touched }) => (
                                        <Form className='flex flex-col gap-10 justify-center items-center' >
                                            <div  >
                                                <Field
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Enter Email"

                                                    className='w-96 border border-black p-3 rounded-full text-black font-bold text-center'
                                                />
                                                {errors.email && touched.email ? (
                                                    <div>
                                                        <p className='text-red-700 font-semibold text-xs' >{errors.email}*</p>
                                                    </div>
                                                ) : null}
                                            </div>

                                            <div>
                                                <Field
                                                    id="username"
                                                    name="username"
                                                    placeholder="Please Create One Username"

                                                    className='w-96 border border-black p-3 rounded-full text-black font-bold text-center'
                                                />
                                                {errors.username && touched.username ? (
                                                    <div><p className='text-red-700 font-semibold text-xs' >{errors.username}*</p></div>
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

export default Register;