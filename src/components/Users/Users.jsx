import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import style from "./users.module.css";

let Users = ({currentPage, totalUsersCount, pageSize, portionSize, onPageChanged, users, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} portionSize={portionSize} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount}
                   pageSize={pageSize}/>
        <div className={style.user} >
            {
                users.map(u => <User user={u}
                                     key={u.id}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                />)
            }
        </div>
    </div>

}

export default Users;