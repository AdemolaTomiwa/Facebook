import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Authentication extends Component {
   render() {
      return (
         <div className="auth">
            <div className="intro">
               <h1>facebook</h1>
               <h4>
                  Facebook helps you connect and share with the people in your
                  life.
               </h4>
            </div>
            <form className="form">
               <div>
                  <input
                     type="email"
                     placeholder="Email Address"
                     name="email"
                  />
               </div>
               <div>
                  <input
                     type="password"
                     placeholder="Password"
                     name="password"
                  />
               </div>
               <div>
                  <button className="btn btn-primary">Log In</button>
               </div>
               <div>
                  <p>Forgetten password?</p>
               </div>

               <div className="line"></div>

               <Link to="/register">
                  <button className="btn btn-success">
                     Create New Account
                  </button>
               </Link>
            </form>
         </div>
      );
   }
}

export default Authentication;
