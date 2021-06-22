import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsContorls/FormsControls";


const maxLength10 = maxLengthCreator(10);


let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div className={s.item}>
                <Field name="newPostText" component={Textarea}  placeholder={"Post message"} validate={[required, maxLength10]} />
            </div>

            <div>
                <button>Add post</button>
            </div>

        </form>

}

let AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPost"})(AddNewPostForm);

const MyPosts = React.memo(props => {
    console.log("Рендер");

    let postsDataElements = [...props.postsdata]
        .reverse()
        .map(p => <Post key={p.id} message={p.message} count_like={p.likescount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <div className={s.posts + " " + s.postblock}>
            <h2>My post</h2>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            {postsDataElements}
        </div>

    )
});


export default MyPosts;