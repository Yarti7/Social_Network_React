import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import Loader from "../../common/Loader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Loader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );


    }


return <div>
    <img className={s.avatar} src={props.profile.photos.large || userPhoto}/>
    {props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    {!editMode ?
        <ProfileData profile={props.profile}
                     isOwner={props.isOwner}
                     toEditMode={() => {
                         setEditMode(true)
                     }}/>
        : <ProfileDataForm profile={props.profile} initialValues={props.profile} onSubmit={onSubmit}/>}

</div>

}

const ProfileData = ({profile, isOwner, toEditMode}) => {
    return <div className={s.deskblock}>
        {isOwner && <button onClick={toEditMode}>Edit</button>}
        <h1>{profile.fullName}</h1>
        <p>{profile.aboutMe}</p>
        <p><b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</p>
        {profile.lookingForAJob && <p>{profile.lookingForAJobDescription}</p>}
        <p>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</p>

    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;