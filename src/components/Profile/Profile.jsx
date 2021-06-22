 import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostContainer from "./MyPosts/MyPostContainer";



const Profile = (props) => {

    return <div className={s.profile}>
        <ProfileInfo savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}
                     isOwner={props.isOwner}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus} />
        <MyPostContainer  />
    </div>


}


export default Profile;