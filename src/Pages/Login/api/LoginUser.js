export const LoginUser=async(userdetails,password)=>{

    console.log(userdetails,"this is taht user")
    console.log(password,"this is taht pass")
    try{
        const LoginUser=await fetch("https://cloudstackbackend.onrender.com/user/v0/login",{
            method:"post",
            mode:"cors",
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                userdetails:userdetails,
                password:password
            })
        })

        const LoginUserData=await LoginUser.json();
        const LoginUserSavedData=await LoginUserData;

        return LoginUserSavedData;
    }


    catch(err){
        console.log(err)
    }

}