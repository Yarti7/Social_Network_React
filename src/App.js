import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import Settings from "./components/Settings/Settings.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import {BrowserRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Loader from "./components/common/Loader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    catchAllUnhandledErrors = (reason, promiseRejectionEvent) => {
        alert("Some error occured");
       //console.error(promiseRejectionEvent);

    }

    componentDidMount() {
        this.props.initializeApp();

        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }

        return (

            <div className='app-wrapper'>

                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={"/profile"} />}/>
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                        <Route path="*" render={() => <div>Error 404</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }

}

const MapStateToProps = (state) => ({
    initialized: state.app.initialized
})


let AppContainer = compose(
    withRouter,
    connect(MapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;

