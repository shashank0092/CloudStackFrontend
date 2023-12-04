export const RegisterUser=async(email,username,password,FCMToken)=>{

    try{
        const User=await fetch("https://cloudstackbackend.onrender.com/user/v0/register",{
            method:"post",
            mode:"cors",
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email:email,
                username:username,
                password:password,
                FCMToken:FCMToken
            })
        })

        const UserData=await User.json();
        const UserSavedData=await UserData;

        return UserSavedData;
    }


    catch(err){
        console.log(err)
    }

}