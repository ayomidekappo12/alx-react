// App.js
import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { user, logOut } from "./AppContext";
import { AppContext } from "./AppContext";
import { connect } from "react-redux";
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "../actions/uiActionCreators";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDrawer: false,
      user: user,
      listNotifications: [
        { id: 1, value: "New course available", type: "default" },
        { id: 2, value: "New resume available", type: "urgent" },
        // Assuming getLatestNotification is defined somewhere
        { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
      ],
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  markNotificationAsRead = (id) => {
    const newList = this.state.listNotifications.filter(
      (keep) => keep.id !== id
    );
    this.setState({
      listNotifications: newList,
    });
  };

  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      logOut(); // Fix: Use logOut directly from AppContext
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  logIn(email, password) {
    this.setState({ user: { email, password, isLoggedIn: true } });
  }

  render() {
    const {
      isLoggedIn,
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
    } = this.props;
    const { user, listNotifications } = this.state;

    return (
      <AppContext.Provider
        value={{
          user,
          logOut,
        }}
      >
        <React.Fragment>
          <div className="Header">
            <Notifications
              handleDisplayDrawer={displayNotificationDrawer}
              displayDrawer={displayDrawer}
              listNotifications={listNotifications}
              handleHideDrawer={hideNotificationDrawer}
              markNotificationAsRead={displayNotificationDrawer}
            />
            <Header />
          </div>
          <div className={css(styles.App)}>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the school">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis at tempora odio, necessitatibus repudiandae
                reiciendis cum nemo sed asperiores ut molestiae eaque aliquam
                illo ipsa iste vero dolor voluptates.
              </p>
            </BodySection>
            <Footer />
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    position: "relative",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
});

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
    displayDrawer: state.get("isNotificationDrawerVisible"),
  };
};

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
