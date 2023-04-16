import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("react op");
    }, 1000);
    return () => {
      console.log("react op return");
      clearInterval(timer);
    };
  });
  console.log("render");

  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
