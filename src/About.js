import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClassComponent from "./ProfileClassComponent";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  render() {
    console.log("Parent render");

    return (
      <div>
        <h1>About us page</h1>
        <h2>this is react finding the path ....</h2>
        <ProfileClassComponent name={"child1"} />
        <Profile />
        <Outlet />
      </div>
    );
  }
}

export default About;
