import React from "react";
class ProfileClassComponent extends React.Component {
  constructor(props) {
    super(props);
    //create state
    this.state = {
      count: 0,
    };
    this.state = {
      userInfo: {
        name: "dummyname",
        location: "dummylocation",
      },
    };
    console.log("Child constructor" + this.props.name);
  }
  async componentDidMount() {
    console.log("Parent component did mount");
    const data = await fetch("https://api.github.com/users/yashu11");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    console.log("Child render" + this.props.name);

    return (
      <div>
        <h2>name:{this.state.userInfo.name}</h2>
        <h2>Location:{this.state.userInfo.location}</h2>
        <img src={this.state.userInfo.avatar_url} />
      </div>
    );
  }
}
export default ProfileClassComponent;
