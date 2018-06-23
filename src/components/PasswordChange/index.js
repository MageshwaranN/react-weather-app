import React, { Component } from "react";

import { auth } from "../../firebase";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    auth
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Change Password</label>
          <div className="col-sm-4">
            <input
              className="form-control"
              value={passwordOne}
              onChange={event =>
                this.setState(
                  updateByPropertyName("passwordOne", event.target.value)
                )
              }
              type="password"
              placeholder="New Password"
            />
          </div>
          <div className="col-sm-4">
            <input
              className="form-control"
              value={passwordTwo}
              onChange={event =>
                this.setState(
                  updateByPropertyName("passwordTwo", event.target.value)
                )
              }
              type="password"
              placeholder="Confirm New Password"
            />
          </div>
          <div className="col-sm-2">
            <button
              className="btn btn-success"
              disabled={isInvalid}
              type="submit"
            >
              Change Password
            </button>
          </div>
        </div>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default PasswordChangeForm;
