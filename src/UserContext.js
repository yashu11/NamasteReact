import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy name",
    email: "dummyemail",
  },
});

export default UserContext;
