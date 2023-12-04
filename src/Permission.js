const NotificationPermisson=async()=>{
    const permission=await Notification.requestPermission();

    if(permission==="granted"){

    }
    else if(permission==="denied"){
        alert("You Denied Message Permisson")
    }
}

export default NotificationPermisson;