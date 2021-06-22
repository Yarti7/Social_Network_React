import s from "./ProfileInfo.module.css";
import React from "react";
import {createField, Input, Textarea} from "../../common/FormsContorls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsContorls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit} className={s.deskblock}>
        {<button onClick={() => {}}>Save</button>}
        {error && <div className={style.formSummaryError}>{error}</div>}

        <h1>{createField("Full name", "fullName", [], Input)}</h1>
        <p>{createField("", "lookingForAJob", [], Input,{type: "checkbox"})}</p>
        <p>{createField("My professional skills", "lookingForAJobDescription", [], Textarea,)}</p>
        <p>{createField("About me", "aboutMe", [], Textarea)}</p>
        {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}



    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm;