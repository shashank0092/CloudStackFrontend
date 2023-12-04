import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "./api/UserProfile";
import { onMessageListener } from "../../firebase"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {


    const navigate = useNavigate()
    const [userData, setUserData] = useState(null);
    console.log(localStorage.getItem('userdetails'), 'this s userdetails')
    console.log(localStorage.getItem('token'), "this is token")


    onMessageListener().then(payload => {
        toast(`Message From Firebase:${payload.notification.body} & ${payload.notification.title} `, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        console.log(payload)
    }).catch(err => console.log('failed: ', err));


    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            navigate('/login')
        }
        else {
            FetchProfile()
        }
    }, [])

    const FetchProfile = async () => {
        const profile = await UserProfile();
        console.log(profile?.data, "this is profile data")
        setUserData(profile?.data)
    }

    return (
        <>
            <div>
                <div className='h-[100vh] flex flex-col gap-5 justify-center items-center bg-purple-100 ' >

                    <div>
                        <p className=' text-7xl text-gray-700 font-semibold' >Profile Details</p>
                    </div>

                    <div className="border-2 border-black p-20 rounded-lg flex flex-col gap-10" >
                        <div className="flex gap-2 " >
                            <p className="underline font-bold" >Email:</p>
                            <p>{userData?.email}</p>
                        </div>
                        <div className="flex gap-2 " >
                            <p className="underline font-bold" >User Name:</p>
                            <p>{userData?.username}</p>
                        </div>
                        <div className="flex gap-2 ">
                            <p className="underline font-bold"> Password: </p>
                            <p>{userData?.password}</p>
                        </div>
                        <div className="flex gap-2 ">
                            <p className="underline font-bold"> FCMToken: </p>
                            <p>{userData?.FCMToken}</p>
                        </div>
                    </div>

                </div>




            </div>
            <ToastContainer />
        </>
    )








}

export default Profile;