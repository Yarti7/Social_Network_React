import React from "react";
import s from './Post.module.css';


const Post = (props) => {




    return <div className={s.item} >
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR99VPaQ2koX9Pb5PQOL3gR4d__muqqWQdp_A&usqp=CAU' />
        { props.message }
           <div><span>Like  { props.count_like }</span></div>
        </div>


}

export  default Post;