import React from "react";

import { auth } from "../../firebase";

const SignOutButton = () => (
  <button
    className="btn btn-outline-danger my-2 my-sm-0"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>
);

export default SignOutButton;
