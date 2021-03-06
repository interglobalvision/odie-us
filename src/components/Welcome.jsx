import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NoMatch from '../components/NoMatch.jsx';
import WelcomeHome from './WelcomeHome.jsx';
import CreateAccount from './CreateAccount.jsx';
import ForgotPassword from './ForgotPassword.jsx';
import UserAccount from '../containers/UserAccount.jsx';
import WelcomeHeader from './WelcomeHeader.jsx';
import Footer from './Footer.jsx';

const Welcome = () => {
  return (
    <div id='main-container'>
      <WelcomeHeader />
      <main id='main-content'>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={WelcomeHome} />
            <Route path='/createaccount' render={() => <UserAccount Layout={CreateAccount} /> } />
            <Route path='/forgotpassword' render={() => <UserAccount Layout={ForgotPassword} /> } />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  )
};

export default Welcome;
