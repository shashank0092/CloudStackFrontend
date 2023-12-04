import { Link } from "react-router-dom";
const Home=()=>{

    return(
        <>

            <div className="h-[100vh] flex justify-center items-center bg-pink-200"  >
                <div className="flex flex-col bg-gray-400  border-2 border-black rounded-xl p-20 gap-5" >
                    <div>
                        <p className="text-white font-bold text-3xl" >Hello From Cloud Stacks</p>
                    </div>
                    <div className="flex justify-around" >
                        <Link to="/register" className="bg-black p-3 border border-white rounded-lg hover:cursor-pointer" >
                            <p className="text-white text-lg font-bold" >Register</p>
                        </Link>

                        <Link to="/login" className="bg-white p-3 border border-black rounded-lg hover:cursor-pointer" >
                            <p className="text-black text-lg font-bold" >Login</p>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;