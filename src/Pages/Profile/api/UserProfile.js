export const UserProfile=async(fcmToken)=>{


    const userdetails= localStorage.getItem('userdetails')
    const token=localStorage.getItem('token')
    try{
        const UserProfile=await fetch("https://cloudstackbackend.onrender.com/user/v0/profile",{
            method:"post",
            mode:"cors",
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Authorization': `${token}`,
            },
            body: JSON.stringify({
                userdetails:userdetails,
                fcmToken:fcmToken
            })
        })

        const UserProfileData=await UserProfile.json();
        const UserProfileSavedData=await UserProfileData;

        return UserProfileSavedData;
    }


    catch(err){
        console.log(err)
    }

}