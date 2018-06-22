import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = ({ sessionStore }) =>
  <div>
    { sessionStore.authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link className="navbar-brand" to={routes.HOME}>Home</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link className="nav-link" to={routes.LANDING}>Landing</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to={routes.ACCOUNT}>Account</Link>
      </li>
      <li className="nav-item">
      <SignOutButton/>      
      </li>
    </ul>
  </div>
</nav>

const NavigationNonAuth = () =>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link className="navbar-brand" to={routes.LANDING}>Landing</Link>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link className="nav-link" to={routes.SIGN_IN}>Sign In</Link>
      </li>
    </ul>
</nav>

export default compose(
  inject('sessionStore'),
  observer
)(Navigation);
