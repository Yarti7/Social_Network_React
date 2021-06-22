import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    requestUsers

} from "../../redux/users-reducer";
import Users from "./Users";
import Loader from "../common/Loader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getMaxCount,
    getPageSize,
    getPortionSize,
    getTotalUsersCount,
    getUsers,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {

            let {currentPage, maxCount, totalUsersCount} = this.props;
            this.props.getUsers(currentPage, maxCount, totalUsersCount);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.maxCount, this.props.totalUsersCount);
    }

    render() {
        return <>
            {this.props.isFetching ? <Loader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   portionSize={this.props.portionSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        portionSize: getPortionSize(state),
        totalUsersCount: getTotalUsersCount(state),
        maxCount: getMaxCount(state),
        isFetching: getIsFetching(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state)

    }
}


export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers: requestUsers
    })
)(UsersContainer);